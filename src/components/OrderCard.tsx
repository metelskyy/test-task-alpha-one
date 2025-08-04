import type { Order } from '@/shared/types/common'
import { CURRENCY } from '@/shared/const/common'
import { formatDate, formatPrice } from '@/shared/utils'
import { cn } from '@/shared/utils/cn'

type OrderCardProps = {
  createdAt: string | Date
  status: Order['status']
  orderAmountUSD: string
  orderAmountTokens: string
}

// не стал убирать в константы, как будто хочется, чтобы лежал тут рядом
const ORDER_CARD_CONFIG = {
  Processing: { statusText: 'В процессе', className: '' },
  Completed: { statusText: 'Выполнено', className: 'text-chart-2' },
} as const

// карточка ордера, отображает данные ордера и статус

export const OrderCard = ({
  createdAt,
  orderAmountTokens,
  orderAmountUSD,
  status,
}: OrderCardProps) => {
  return (
    <div className="bg-card rounded-md p-2">
      <div className="flex items-center justify-between gap-2">
        <span
          className={cn(
            'font-bold text-base',
            ORDER_CARD_CONFIG[status].className,
          )}
        >
          {ORDER_CARD_CONFIG[status].statusText}
        </span>
        <span className="font-bold text-base">
          {formatPrice({
            value: orderAmountTokens,
            token: 'SOL',
          })}
        </span>
      </div>
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs text-foreground/70">
          {formatDate(createdAt)}
        </span>
        <span className="font-bold text-base">
          {formatPrice({
            value: orderAmountUSD,
            currency: CURRENCY.USD,
          })}
        </span>
      </div>
    </div>
  )
}
