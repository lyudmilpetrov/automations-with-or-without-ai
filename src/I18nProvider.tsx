import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { I18nContext, translations, type LanguageCode } from './i18n'

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<LanguageCode>(() => {
    try {
      const stored = localStorage.getItem('automation-language')
      if (stored && Object.hasOwn(translations, stored)) return stored as LanguageCode
    } catch { /* Language selection still works when browser storage is unavailable. */ }
    return 'en'
  })

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
    try { localStorage.setItem('automation-language', language) } catch { /* Storage is optional. */ }
  }, [language])

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language],
    }),
    [language],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}
