import { useI18n } from '../i18n'
import { uiCopy } from '../uiCopy'
import './ThemeToggle.css'

export const ThemeToggle = ({ mode, onToggle }: { mode: 'light' | 'dark'; onToggle: () => void }) => {
  const { language } = useI18n()
  const isDark = mode === 'dark'
  return <button type="button" onClick={onToggle} aria-label={isDark ? uiCopy[language].lightTheme : uiCopy[language].darkTheme} className="theme-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">{isDark ? <><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5 19 19M5 19l1.5-1.5M17.5 6.5 19 5"/></> : <path d="M20.5 14.1A8.6 8.6 0 0 1 9.9 3.5a8.6 8.6 0 1 0 10.6 10.6Z"/>}</svg></button>
}
