import { makeAutoObservable } from 'mobx'
import type { Order } from '../types/common'

class OrdersStore {
  // список ордеров
  orders: Array<Order> = []

  constructor() {
    makeAutoObservable(this)
  }

  setOrders(currOrders: Array<Order>) {
    this.orders = currOrders
  }

  addNewOrder(currOrder: Order) {
    this.orders.push(currOrder)
  }

  updateOrder(currOrder: Order) {
    const currIndex = this.orders.findIndex((item) => item.id === currOrder.id)

    // не нашли ордер в массиве
    if (currIndex === -1) return

    this.orders[currIndex] = currOrder
  }
}

export const ordersStore = new OrdersStore()
