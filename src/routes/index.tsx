import { createFileRoute } from '@tanstack/react-router'
import { ROUTES } from '@/shared/const/routes'
import { TokenPrice } from '@/components/TokenPrice'
import { OrderList } from '@/components/OrderList'
import { CreateOrderForm } from '@/components/create-order-form/CreateOrderForm'

export const Route = createFileRoute(ROUTES.HOME)({
  component: App,
})

function App() {
  return (
    <div className="flex flex-col gap-5">
      <TokenPrice />
      <CreateOrderForm />
      <OrderList />
    </div>
  )
}
