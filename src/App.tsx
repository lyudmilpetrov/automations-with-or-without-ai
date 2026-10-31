import { LanguageSwitcher } from './components/LanguageSwitcher'
import { ThemeToggle } from './components/ThemeToggle'
import { useI18n } from './i18n'
import { useTheme } from './hooks/useTheme'
import { RouterOutlet, RouterProvider, NavLink, routes } from './router'
import { uiCopy } from './uiCopy'
import './App.css'

function App() {
  const { mode, toggle } = useTheme()
  const { t, language } = useI18n()
  const ui = uiCopy[language]

  return (
    <RouterProvider routes={routes}>
      <div className="app-shell">
        <a className="skip-link" href="#main-content" onClick={(event) => { event.preventDefault(); document.getElementById('main-content')?.focus() }}>{ui.skip}</a>
        <header className="app-bar app-wrapper">
          <NavLink to="/" className="brand-lockup"><span className="brand-symbol" aria-hidden="true"><svg viewBox="0 0 32 32" fill="none"><rect x="5" y="5" width="12" height="12" rx="3" stroke="currentColor" strokeWidth="2.5"/><rect x="15" y="15" width="12" height="12" rx="3" stroke="currentColor" strokeWidth="2.5"/></svg></span><span className="brand-mark">{t.header.brand}</span></NavLink>
          <div className="header-actions">
            <nav className="primary-nav" aria-label={ui.navigation}>
              <NavLink to="/" className="nav-link" activeClassName="nav-link--active">{t.header.nav.landing}</NavLink>
              <NavLink to="/explore-delivery-playbook" className="nav-link" activeClassName="nav-link--active">{t.header.nav.playbook}</NavLink>
              <NavLink to="/plan-my-workflow" className="nav-link nav-link--cta" activeClassName="nav-link--active">{t.header.nav.planner}<span aria-hidden="true">↗</span></NavLink>
            </nav>
            <div className="utility-actions"><LanguageSwitcher /><ThemeToggle mode={mode} onToggle={toggle} /></div>
          </div>
        </header>
        <main id="main-content" tabIndex={-1} className="app-wrapper main-content"><RouterOutlet key={language} /></main>
        <footer className="app-footer app-wrapper"><div><NavLink to="/" className="footer-brand">{t.header.brand}</NavLink><p>{ui.footer}</p></div><nav aria-label={ui.navigation}><NavLink to="/explore-delivery-playbook">{t.header.nav.playbook}</NavLink><NavLink to="/plan-my-workflow">{t.header.nav.planner}<span aria-hidden="true"> ↗</span></NavLink></nav></footer>
      </div>
    </RouterProvider>
  )
}

export default App
