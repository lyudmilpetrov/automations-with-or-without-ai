import type { FC } from 'react'
import './ThemeToggle.css'

type ThemeMode = 'light' | 'dark'

type ThemeToggleProps = {
  mode: ThemeMode
  onToggle: () => void
}

const SunIcon: FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="4.5" />
    <path d="M12 2v2.5M12 19.5V22M4.22 4.22l1.77 1.77M17.99 17.99l1.79 1.79M2 12h2.5M19.5 12H22M4.22 19.78l1.77-1.77M17.99 6.01l1.79-1.79" />
  </svg>
)

const MoonIcon: FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className} aria-hidden="true">
    <path d="M21 14.5A8.5 8.5 0 0 1 9.5 3 7 7 0 1 0 21 14.5Z" />
  </svg>
)

export const ThemeToggle: FC<ThemeToggleProps> = ({ mode, onToggle }) => {
  const isDark = mode === 'dark'
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={isDark}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="theme-toggle"
    >
      <span className="theme-toggle__label">{isDark ? 'Dark' : 'Light'}</span>
      <span className={`theme-toggle__switch ${isDark ? 'is-dark' : ''}`}>
        <span className={`theme-toggle__thumb ${isDark ? 'is-dark' : ''}`}>
          {isDark ? <MoonIcon className="theme-toggle__thumb-icon" /> : <SunIcon className="theme-toggle__thumb-icon" />}
        </span>
        <SunIcon className={`theme-toggle__icon theme-toggle__icon--sun ${isDark ? 'is-muted' : ''}`} />
        <MoonIcon className={`theme-toggle__icon theme-toggle__icon--moon ${isDark ? '' : 'is-muted'}`} />
      </span>
    </button>
  )
}
