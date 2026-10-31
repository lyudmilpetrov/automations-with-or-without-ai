import { createContext, useContext, type ReactNode } from 'react'

type RouterContextValue = {
  path: string
  navigate: (to: string) => void
  routeElement: ReactNode
}

export const RouterContext = createContext<RouterContextValue | null>(null)

export const useRouter = () => {
  const context = useContext(RouterContext)
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider')
  }
  return context
}
