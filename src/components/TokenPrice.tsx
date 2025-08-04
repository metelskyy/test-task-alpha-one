import { CURRENCY } from '@/shared/const/common'
import { currTokenStore } from '@/shared/store/currentTokenStore'
import { formatPrice } from '@/shared/utils'

// блок, отображающий текущий прайс токена

export const TokenPrice = () => {
  const tokenAmount = formatPrice({
    value: 1,
    token: 'SOL',
  })

  const tokenPrice = formatPrice({
    value: currTokenStore.tokenRate,
    currency: CURRENCY.USD,
  })

  return (
    <div className="bg-card rounded-md p-2 flex items-center justify-center h-20 font-bold text-xl">{`${tokenAmount} -  ${tokenPrice}`}</div>
  )
}
