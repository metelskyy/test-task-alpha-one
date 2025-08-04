import axios from 'axios'
import { API_URL } from '../const/common'

export const httpClient = axios.create({
  baseURL: API_URL,
})
