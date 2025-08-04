import { io } from 'socket.io-client'
import { API_URL } from '../const/common'

export const socket = io(API_URL, {
  autoConnect: true,
})
