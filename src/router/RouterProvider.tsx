/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useEffect, useMemo, useState, type MouseEvent, type ReactNode } from 'react'

type RouteDefinition = {
  path: string
  element: ReactNode
}

type RouterContextValue = {
  path: string
  navigate: (to: string) => void
  routeElement: ReactNode
}

const RouterContext = createContext<RouterContextValue | null>(null)

const normalizePath = (value: string) => {
  if (!value) return '/'
  if (value === '/') return value
  return value.endsWith('/') ? value.slice(0, -1) : value
}

const getInitialPath = () => {
  if (typeof window === 'undefined') {
    return '/'
  }
  return normalizePath(window.location.pathname || '/')
}

export const RouterProvider = ({ routes, children }: { routes: RouteDefinition[]; children: ReactNode }) => {
  const [path, setPath] = useState<string>(() => getInitialPath())

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const handlePopState = () => {
      setPath(getInitialPath())
    }

    window.addEventListener('popstate', handlePopState)
    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  const navigate = useCallback(
    (targetPath: string) => {
      const normalized = normalizePath(targetPath)

      if (typeof window === 'undefined') {
        setPath(normalized)
        return
      }

      if (normalized === path) {
        return
      }

      window.history.pushState({}, '', normalized)
      setPath(normalized)
    },
    [path],
  )

  const routeElement = useMemo(() => {
    const match = routes.find((route) => normalizePath(route.path) === path)
    return match?.element ?? routes[0]?.element ?? null
  }, [path, routes])

  const value = useMemo(
    () => ({
      path,
      navigate,
      routeElement,
    }),
    [navigate, path, routeElement],
  )

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
}

export const useRouter = () => {
  const context = useContext(RouterContext)
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider')
  }
  return context
}

export const RouterOutlet = () => {
  const { routeElement } = useRouter()
  return <>{routeElement}</>
}

export const NavLink = ({
  to,
  children,
  className = '',
  activeClassName = 'is-active',
}: {
  to: string
  children: ReactNode
  className?: string
  activeClassName?: string
}) => {
  const { path, navigate } = useRouter()
  const normalized = normalizePath(to)
  const isActive = path === normalized

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    navigate(normalized)
  }

  const classes = [className, isActive ? activeClassName : ''].filter(Boolean).join(' ').trim()

  return (
    <a href={to} className={classes} aria-current={isActive ? 'page' : undefined} onClick={handleClick}>
      {children}
    </a>
  )
}

export type { RouteDefinition }
