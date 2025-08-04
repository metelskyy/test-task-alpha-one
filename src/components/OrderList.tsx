import { OrderCard } from './OrderCard'
import { ordersStore } from '@/shared/store'

// список ордеров

export const OrderList = () => {
  return (
    <div className="flex flex-col gap-3">
      <p className="font-bold text-xl">Ваши ордеры:</p>
      {ordersStore.orders
        .map(({ id, createdAt, amountDollars, amountTokens, status }) => (
          <OrderCard
            key={id}
            createdAt={createdAt}
            orderAmountTokens={amountTokens}
            orderAmountUSD={amountDollars}
            status={status}
          />
        ))
        .reverse()}
    </div>
  )
}
