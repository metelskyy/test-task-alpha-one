import { ArrowUpDown } from 'lucide-react'
import type { ChangeEvent } from 'react'
import { createOrderStore } from '@/shared/store'
import { CURRENCY } from '@/shared/const/common'
import { Button, Input } from '@/shared/uikit'
import { formatPrice } from '@/shared/utils'

// инпут для ввода суммы ордера с кнопкой переключения типа суммы (токен или валюта)

export const AmountField = () => {
  const inputValue = createOrderStore.isCurrencyMode
    ? createOrderStore.currAmountValue
    : createOrderStore.currTokenAmountValue

  const onAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (createOrderStore.isCurrencyMode) {
      createOrderStore.setCurrAmountValue(e.target.value)
      createOrderStore.setCurrTokenAmountValue(createOrderStore.calcTokenAmount)
      return
    }

    createOrderStore.setCurrTokenAmountValue(e.target.value)
    createOrderStore.setCurrAmountValue(createOrderStore.calcAmount)
  }

  return (
    <div className="flex items-center gap-2 justify-between">
      <Input
        value={inputValue}
        onChange={onAmountChange}
        placeholder={formatPrice({
          value: '0',
          currency: createOrderStore.isCurrencyMode ? CURRENCY.USD : null,
          token: createOrderStore.isCurrencyMode ? null : 'SOL',
        })}
        type="number"
        min={0}
      />
      <Button
        className="size-10"
        variant="outline"
        onClick={() => createOrderStore.toggleCurrencyMode()}
      >
        <ArrowUpDown size={16} />
      </Button>
    </div>
  )
}
