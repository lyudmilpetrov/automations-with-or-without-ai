import { useCallback, useEffect, useMemo, useRef, useState, type MouseEvent, type ReactNode } from 'react'
import { createRouteHref, getPathFromHash, normalizePath, shouldHandleNavigation } from './hashRouting'
import { RouterContext, useRouter } from './useRouter'

type RouteDefinition = {
  path: string
  element: ReactNode
}

const getInitialPath = () => {
  if (typeof window === 'undefined') {
    return '/'
  }
  return getPathFromHash(window.location.hash)
}

export const RouterProvider = ({ routes, children }: { routes: RouteDefinition[]; children: ReactNode }) => {
  const [path, setPath] = useState<string>(() => getInitialPath())

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const handleLocationChange = () => {
      setPath(getInitialPath())
    }

    window.addEventListener('popstate', handleLocationChange)
    window.addEventListener('hashchange', handleLocationChange)
    return () => {
      window.removeEventListener('popstate', handleLocationChange)
      window.removeEventListener('hashchange', handleLocationChange)
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

      window.history.pushState({}, '', createRouteHref(normalized, import.meta.env.BASE_URL))
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

export const RouterOutlet = () => {
  const { routeElement, path } = useRouter()
  const previousPath = useRef(path)

  useEffect(() => {
    if (previousPath.current === path) return
    previousPath.current = path
    document.getElementById('page-heading')?.focus({ preventScroll: true })
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [path])

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
    if (!shouldHandleNavigation(event)) return
    event.preventDefault()
    navigate(normalized)
  }

  const classes = [className, isActive ? activeClassName : ''].filter(Boolean).join(' ').trim()

  return (
    <a href={createRouteHref(normalized, import.meta.env.BASE_URL)} className={classes} aria-current={isActive ? 'page' : undefined} onClick={handleClick}>
      {children}
    </a>
  )
}

export type { RouteDefinition }
