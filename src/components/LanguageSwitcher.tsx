import { languageOptions, useI18n, type LanguageCode } from '../i18n'
import { uiCopy } from '../uiCopy'

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useI18n()
  return <label className="language-switcher"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18"/></svg><span className="sr-only">{uiCopy[language].language}</span><select value={language} onChange={event => setLanguage(event.target.value as LanguageCode)}>{languageOptions.map(option => <option key={option.code} value={option.code} lang={option.code}>{option.label}</option>)}</select></label>
}

export default LanguageSwitcher
