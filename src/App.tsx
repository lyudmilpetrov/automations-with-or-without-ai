import { LanguageSwitcher } from './components/LanguageSwitcher'
import { ThemeToggle } from './components/ThemeToggle'
import { useI18n } from './i18n'
import { useTheme } from './hooks/useTheme'
import { RouterOutlet, RouterProvider, NavLink, routes } from './router'
import { layoutTokens, textTokens } from './styles/theme'
import './App.css'

function App() {
  const { mode, toggle } = useTheme()
  const { t } = useI18n()
  const headerCopy = t.header
  const navLinks = [
    { path: '/', label: headerCopy.nav.landing },
    { path: '/explore-delivery-playbook', label: headerCopy.nav.playbook },
    { path: '/plan-my-workflow', label: headerCopy.nav.planner },
  ]

  return (
    <RouterProvider routes={routes}>
      <div className={layoutTokens.shell}>
        <main className={layoutTokens.wrapper}>
          <header className="app-bar">
            <div className="brand-lockup">
              <p className={`${textTokens.eyebrow} eyebrow--muted`}>{headerCopy.eyebrow}</p>
              <p className="brand-mark">{headerCopy.brand}</p>
              <p className="brand-copy">{headerCopy.copy}</p>
            </div>
            <div className="header-actions">
              <nav className="primary-nav" aria-label="Primary navigation">
                {navLinks.map((link) => (
                  <NavLink key={link.path} to={link.path} className="nav-link" activeClassName="nav-link--active">
                    {link.label}
                  </NavLink>
                ))}
              </nav>
              <div className="utility-actions">
                <LanguageSwitcher />
                <ThemeToggle mode={mode} onToggle={toggle} />
              </div>
            </div>
          </header>
          <RouterOutlet />
        </main>
      </div>
    </RouterProvider>
  )
}

export default App
