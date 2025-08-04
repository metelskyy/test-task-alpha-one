import { AmountField } from './AmountField'
import { CreateOrderButton } from './CreateOrderButton'
import { SecondaryAmount } from './SecondaryAmount'

// форма создания ордера

export const CreateOrderForm = () => {
  return (
    <div className="bg-card rounded-md p-2">
      <AmountField />
      <SecondaryAmount />
      <CreateOrderButton />
    </div>
  )
}
