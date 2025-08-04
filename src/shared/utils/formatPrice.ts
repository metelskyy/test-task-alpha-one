import { normalizePrice } from './normalizePrice'

type FormatPriceParams = {
  value: string | number
  token?: string | null
  currency?: string | null
}

export const formatPrice = ({ value, token, currency }: FormatPriceParams) => {
  const normalizedValue = normalizePrice(value)

  if (token) {
    return `${normalizedValue} ${token}`
  }

  return `${currency}${normalizedValue}`
}
