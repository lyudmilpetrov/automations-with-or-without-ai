import { useEffect, useState } from 'react'

type ThemeMode = 'light' | 'dark'

const STORAGE_KEY = 'automation-theme-preference'

const getStoredTheme = () => {
  try { return window.localStorage.getItem(STORAGE_KEY) } catch { return null }
}

const getPreferredTheme = (): ThemeMode => {
  if (typeof window === 'undefined') {
    return 'dark'
  }

  const stored = getStoredTheme()
  if (stored === 'light' || stored === 'dark') {
    return stored
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export const useTheme = () => {
  const [mode, setMode] = useState<ThemeMode>(() => getPreferredTheme())

  useEffect(() => {
    const root = document.documentElement
    if (mode === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }

    document.body.classList.toggle('dark', mode === 'dark')
    try { window.localStorage.setItem(STORAGE_KEY, mode) } catch { /* Theme selection works without storage. */ }
  }, [mode])

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const listener = (event: MediaQueryListEvent) => {
      const stored = getStoredTheme()
      if (!stored) {
        setMode(event.matches ? 'dark' : 'light')
      }
    }

    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [])

  const toggle = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return { mode, toggle }
}
