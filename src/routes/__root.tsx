import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { initAppStore } from '@/shared/store'
import { LoadingView } from '@/shared/uikit'
import { useSocketConnections } from '@/shared/hooks'

export const Route = createRootRoute({
  component: () => <RootLayout />,
})

function RootLayout() {
  useSocketConnections()

  return (
    <div className="min-h-dvh p-3 md:p-5">
      {initAppStore.loading ? <LoadingView /> : <Outlet />}
      <TanStackRouterDevtools />
    </div>
  )
}
