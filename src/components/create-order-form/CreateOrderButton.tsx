import { createOrder } from '@/shared/api/orders'
import { createOrderStore } from '@/shared/store'
import { Button } from '@/shared/uikit'

// кнопка создания ордера, отправляет запрос на бэк

export const CreateOrderButton = () => {
  const isDisabled =
    createOrderStore.isPending ||
    (!+createOrderStore.currAmountValue &&
      !+createOrderStore.currTokenAmountValue)

  const onClick = async () => {
    try {
      createOrderStore.setIsPending(true)

      await createOrder({
        amountDollars: createOrderStore.currAmountValue,
        amountTokens: createOrderStore.currTokenAmountValue,
      })
    } catch (error) {
      console.log(error)
    } finally {
      createOrderStore.setIsPending(false)
    }
  }

  return (
    <Button onClick={onClick} disabled={isDisabled} className="w-full mt-5">
      Создать ордер
    </Button>
  )
}
