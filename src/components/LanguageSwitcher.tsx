import { useEffect, useRef, useState } from 'react'

import { languageOptions, useI18n, type LanguageCode } from '../i18n'

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useI18n()
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const activeLanguage = languageOptions.find((option) => option.code === language) ?? languageOptions[0]

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!containerRef.current || containerRef.current.contains(event.target as Node)) return
      setIsOpen(false)
    }

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClick)
    document.addEventListener('keydown', handleKey)

    return () => {
      document.removeEventListener('mousedown', handleClick)
      document.removeEventListener('keydown', handleKey)
    }
  }, [])

  const handleSelect = (code: LanguageCode) => {
    setLanguage(code)
    setIsOpen(false)
  }

  return (
    <div className="language-switcher" ref={containerRef}>
      <button
        type="button"
        className="language-switcher__button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="language-switcher__icon" aria-hidden="true" />
        <span className="language-switcher__label">{activeLanguage.label}</span>
      </button>
      {isOpen && (
        <ul className="language-switcher__list" role="listbox">
          {languageOptions.map((option) => (
            <li key={option.code}>
              <button
                type="button"
                className={`language-switcher__option ${option.code === language ? 'is-active' : ''}`}
                onClick={() => handleSelect(option.code)}
              >
                <span className="language-switcher__option-code">{option.code.toUpperCase()}</span>
                <span>{option.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default LanguageSwitcher
