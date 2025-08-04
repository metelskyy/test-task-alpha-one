import { useEffect } from 'react'
import { socket } from '../lib'
import {
  createOrderStore,
  currTokenStore,
  initAppStore,
  ordersStore,
} from '../store'
import { SOCKET_EVENTS } from '../const/socket-events'
import type { Order } from '../types/common'

// хук для установки подключения, отслеживания ивентов и синхронизации приходящих данных со стором
// в перспективе разбивается

export const useSocketConnections = () => {
  useEffect(() => {
    // подключение
    socket.connect()
    socket.on(SOCKET_EVENTS.CONNECT, onConnect)
    socket.on(SOCKET_EVENTS.DISCONNECT, onDisconnect)

    // Ивенты для получения данных
    socket.on(SOCKET_EVENTS.ORDERS_LIST, onOrderList)
    socket.on(SOCKET_EVENTS.NEW_ORDER, onNewOrder)
    socket.on(SOCKET_EVENTS.ORDER_UPDATED, onOrderUpdated)
    socket.on(SOCKET_EVENTS.TOKEN_RATE, onTokenRate)

    return () => {
      socket.disconnect()
      socket.off(SOCKET_EVENTS.CONNECT, onConnect)
      socket.off(SOCKET_EVENTS.DISCONNECT, onDisconnect)
      socket.off(SOCKET_EVENTS.ORDERS_LIST, onOrderList)
      socket.off(SOCKET_EVENTS.NEW_ORDER, onNewOrder)
      socket.off(SOCKET_EVENTS.ORDER_UPDATED, onOrderUpdated)
      socket.off(SOCKET_EVENTS.TOKEN_RATE, onTokenRate)
    }
  }, [])
}

function onConnect() {
  console.log('socket: connected')
  setTimeout(() => {
    initAppStore.setLoading(false)
  }, 1000)
}

function onDisconnect() {
  console.log('socket: disconnected')
}

function onOrderList(data: Array<Order>) {
  console.log('orders', data)
  ordersStore.setOrders(data)
}

function onNewOrder(data: Order) {
  console.log('create order', data)
  ordersStore.addNewOrder(data)
}

function onOrderUpdated(data: Order) {
  console.log('update order', data)
  ordersStore.updateOrder(data)
}

function onTokenRate(data: string) {
  currTokenStore.setTokenRate(data)
  createOrderStore.recalcSecondaryAmount()
}
