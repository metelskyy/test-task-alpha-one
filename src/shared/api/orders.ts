import { API_ENDPOINTS } from '../const/api-endpoints'
import { httpClient } from './client'

type СreateOrderDTO = {
  amountTokens: string
  amountDollars: string
}

export const createOrder = (body: СreateOrderDTO) =>
  httpClient.post(API_ENDPOINTS.ORDERS, body)
