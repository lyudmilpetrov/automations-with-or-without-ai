export const normalizePath = (value: string) => {
  if (!value) return '/'
  if (value === '/') return value
  return value.endsWith('/') ? value.slice(0, -1) : value
}

export const getPathFromHash = (hash: string) => normalizePath(hash.startsWith('#/') ? hash.slice(1) : '/')

export const createRouteHref = (path: string, baseUrl: string) => `${baseUrl}#${normalizePath(path)}`

export const shouldHandleNavigation = (
  event: Pick<MouseEvent, 'button' | 'defaultPrevented' | 'metaKey' | 'ctrlKey' | 'shiftKey' | 'altKey'>,
) => !event.defaultPrevented && event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey
