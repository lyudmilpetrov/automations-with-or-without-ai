import { useEffect } from 'react'

import { useI18n } from '../i18n'
import { useRouter } from '../router'
import { buttonTokens, cardTokens, layoutTokens, textTokens } from '../styles/theme'

export const ExploreDeliveryPlaybookPage = () => {
  const { navigate } = useRouter()
  const { t } = useI18n()
  const playbook = t.playbook

  useEffect(() => {
    document.title = playbook.documentTitle
  }, [playbook.documentTitle])

  return (
    <>
      <section className={`${layoutTokens.hero} playbook-hero`}>
        <div className="hero-content">
          <p className={textTokens.eyebrow}>{playbook.hero.eyebrow}</p>
          <h1 className={textTokens.heroHeading}>{playbook.hero.heading}</h1>
          <p className={`${textTokens.lead} hero-lead`}>{playbook.hero.lead}</p>
          <div className="hero-actions">
            <button className={`${buttonTokens.shared} ${buttonTokens.primary}`} onClick={() => navigate('/plan-my-workflow')}>
              {playbook.hero.primaryCta}
            </button>
            <button className={`${buttonTokens.shared} ${buttonTokens.ghost}`} onClick={() => navigate('/')}>
              {playbook.hero.secondaryCta}
            </button>
          </div>
        </div>
      </section>

      <section className={`${layoutTokens.section} playbook-grid`}>
        <div className="section-header">
          <p className={textTokens.eyebrow}>{playbook.immersion.eyebrow}</p>
          <h2 className={textTokens.sectionHeading}>{playbook.immersion.heading}</h2>
          <p className={textTokens.sectionDescription}>{playbook.immersion.description}</p>
        </div>
        <div className="playbook-card-grid">
          {playbook.immersion.moments.map((moment) => (
            <article key={moment.title} className={`${cardTokens.base} playbook-card`}>
              <p className="card-eyebrow">{moment.outcome}</p>
              <h3 className="card-title">{moment.title}</h3>
              <p className="card-text">{moment.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`${layoutTokens.section} signal-section`}>
        <div className="section-header">
          <p className={textTokens.eyebrow}>{playbook.instrumentation.eyebrow}</p>
          <h2 className={textTokens.sectionHeading}>{playbook.instrumentation.heading}</h2>
        </div>
        <div className="signal-grid">
          {playbook.instrumentation.beats.map((beat) => (
            <article key={beat.label} className={`${cardTokens.base} signal-card`}>
              <h3 className="card-title">{beat.label}</h3>
              <p className="card-text">{beat.description}</p>
            </article>
          ))}
        </div>
        <div className="signal-highlights">
          <h3>{playbook.instrumentation.safetyHeading}</h3>
          <ul>
            {playbook.instrumentation.safetySignals.map((signal) => (
              <li key={signal}>{signal}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`${layoutTokens.section} experiment-section`}>
        <div className="section-header">
          <p className={textTokens.eyebrow}>{playbook.experiments.eyebrow}</p>
          <h2 className={textTokens.sectionHeading}>{playbook.experiments.heading}</h2>
          <p className={textTokens.sectionDescription}>{playbook.experiments.description}</p>
        </div>
        <div className="experiment-grid">
          {playbook.experiments.tracks.map((track) => (
            <article key={track.title} className={`${cardTokens.base} experiment-card`}>
              <h3 className="card-title">{track.title}</h3>
              <p className="card-text">{track.summary}</p>
              <ul>
                {track.milestones.map((milestone) => (
                  <li key={milestone}>{milestone}</li>
                ))}
              </ul>
              <button className={`${buttonTokens.shared} ${buttonTokens.secondary}`} onClick={() => navigate('/plan-my-workflow')}>
                {playbook.experiments.addButton}
              </button>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default ExploreDeliveryPlaybookPage
