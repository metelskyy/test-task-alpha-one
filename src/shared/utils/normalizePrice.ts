import { isEmptyPrice } from './isEmptyPrice'

export const normalizePrice = (value: number | string) => {
  if (isEmptyPrice(value)) {
    return '0'
  }

  if (Number.isSafeInteger(+value)) {
    return value.toString()
  }

  return Number(value).toFixed(2)
}
