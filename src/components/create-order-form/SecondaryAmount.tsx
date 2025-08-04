import { CURRENCY } from '@/shared/const/common'
import { createOrderStore } from '@/shared/store'
import { formatPrice } from '@/shared/utils'

// блок, отображающий альтернативную сумму ордера, также по нажатию переключает тип суммы (токен или валюта)

export const SecondaryAmount = () => {
  return (
    <button
      onClick={() => createOrderStore.toggleCurrencyMode()}
      className="text-sm text-foreground/70 mt-2 underline cursor-pointer"
    >
      {formatPrice({
        value: createOrderStore.isCurrencyMode
          ? createOrderStore.calcTokenAmount
          : createOrderStore.calcAmount,
        currency: createOrderStore.isCurrencyMode ? null : CURRENCY.USD,
        token: createOrderStore.isCurrencyMode ? 'SOL' : null,
      })}
    </button>
  )
}
