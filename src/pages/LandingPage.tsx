import { useEffect, useState } from 'react'

import { useI18n } from '../i18n'
import { useRouter } from '../router'
import { badgeTokens, buttonTokens, cardTokens, gridTokens, layoutTokens, textTokens } from '../styles/theme'

export const LandingPage = () => {
  const { navigate } = useRouter()
  const { t } = useI18n()
  const landing = t.landing
  const [activeTier, setActiveTier] = useState(landing.adaptive.tiers[0]?.id ?? '')

  useEffect(() => {
    document.title = landing.documentTitle
  }, [landing.documentTitle])

  useEffect(() => {
    setActiveTier(landing.adaptive.tiers[0]?.id ?? '')
  }, [landing])

  return (
    <>
      <section className={layoutTokens.hero}>
        <div className="hero-content">
          <h1 className={textTokens.heroHeading}>{landing.hero.heading}</h1>
          <p className={`${textTokens.lead} hero-lead`}>{landing.hero.lead}</p>
          <div className="hero-promo">
            <span className="hero-promo__label">{landing.hero.promoLabel}</span>
            <p className="hero-promo__copy">{landing.hero.promoCopy}</p>
          </div>
          <div className="cta-group">
            <button className={`${buttonTokens.shared} ${buttonTokens.primary}`} onClick={() => navigate('/plan-my-workflow')}>
              {landing.hero.primaryCta}
            </button>
            <button
              className={`${buttonTokens.shared} ${buttonTokens.secondary}`}
              onClick={() => navigate('/explore-delivery-playbook')}
            >
              {landing.hero.secondaryCta}
            </button>
          </div>
          <div className={layoutTokens.metricsGrid}>
            {landing.metrics.map((metric) => (
              <div key={metric.label} className={`${cardTokens.base} metric-card`}>
                <p className={textTokens.metricValue}>{metric.value}</p>
                <p className={textTokens.metricLabel}>{metric.label}</p>
                <p className={textTokens.metricDetail}>{metric.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${layoutTokens.section} adaptive-grid`}>
        <div className="section-header">
          <p className={textTokens.eyebrow}>{landing.adaptive.eyebrow}</p>
          <h2 className={textTokens.sectionHeading}>{landing.adaptive.heading}</h2>
          <p className={textTokens.sectionDescription}>{landing.adaptive.description}</p>
        </div>
        <div className="accordion-grid">
          <div className="accordion-list" role="list">
            {landing.adaptive.tiers.map((tier) => (
              <article key={tier.id} className={`accordion-card ${activeTier === tier.id ? 'is-open' : ''}`} role="listitem">
                <button
                  className="accordion-trigger"
                  onClick={() => setActiveTier((prev) => (prev === tier.id ? '' : tier.id))}
                  aria-expanded={activeTier === tier.id}
                  aria-controls={`${tier.id}-content`}
                >
                  <div>
                    <p className="accordion-label">{tier.label}</p>
                    <h3 className="accordion-title">{tier.tagline}</h3>
                  </div>
                  <span className="accordion-icon" aria-hidden="true">
                    {activeTier === tier.id ? '−' : '+'}
                  </span>
                </button>
                <div id={`${tier.id}-content`} className="accordion-panel" aria-hidden={activeTier !== tier.id}>
                  <p className="accordion-summary">{tier.summary}</p>
                  <p className="accordion-location">{tier.location}</p>
                  <div className="accordion-columns">
                    <div>
                      <p className="accordion-eyebrow">{landing.adaptive.labels.benefits}</p>
                      <ul>
                        {tier.benefits.map((benefit) => (
                          <li key={benefit}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="accordion-eyebrow">{landing.adaptive.labels.useCases}</p>
                      <ul>
                        {tier.useCases.map((useCase) => (
                          <li key={useCase}>{useCase}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <aside className="accordion-sidebar">
            <div className="sidebar-card">
              <p className="accordion-eyebrow">{landing.adaptive.sidebar.blendingEyebrow}</p>
              <h3>{landing.adaptive.sidebar.blendingHeading}</h3>
              <p>{landing.adaptive.sidebar.blendingBody}</p>
              <ul>
                {landing.adaptive.sidebar.blendingHighlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <div className="sidebar-callout">{landing.adaptive.sidebar.blendingCallout}</div>
            </div>
            <div className="sidebar-card">
              <p className="accordion-eyebrow">{landing.adaptive.sidebar.sustainabilityEyebrow}</p>
              <h3>{landing.adaptive.sidebar.sustainabilityHeading}</h3>
              <ul>
                {landing.adaptive.sidebar.sustainabilityHighlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className={layoutTokens.section}>
        <div className="section-header">
          <p className={textTokens.eyebrow}>{landing.capabilities.eyebrow}</p>
          <h2 className={textTokens.sectionHeading}>{landing.capabilities.heading}</h2>
          <p className={textTokens.sectionDescription}>{landing.capabilities.description}</p>
        </div>
        <div className={gridTokens.sectionGrid}>
          {landing.capabilities.features.map((feature) => (
            <article key={feature.title} className={cardTokens.base}>
              {feature.highlight && <span className={cardTokens.highlight}>{feature.highlight}</span>}
              <h3 className="card-title">{feature.title}</h3>
              <p className="card-text">{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={layoutTokens.section}>
        <div className="section-header">
          <p className={textTokens.eyebrow}>{landing.deliveryPlaybook.eyebrow}</p>
          <h2 className={textTokens.sectionHeading}>{landing.deliveryPlaybook.heading}</h2>
          <p className={textTokens.sectionDescription}>{landing.deliveryPlaybook.description}</p>
        </div>
        <div className={gridTokens.sectionGrid}>
          {landing.deliveryPlaybook.pipeline.map((step) => (
            <article key={step.title} className={cardTokens.base}>
              <div className="step-timing">{step.timeframe}</div>
              <h3 className="card-title">{step.title}</h3>
              <p className="card-text">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={layoutTokens.section}>
        <div className="section-header">
          <p className={textTokens.eyebrow}>{landing.sustainability.eyebrow}</p>
          <h2 className={textTokens.sectionHeading}>{landing.sustainability.heading}</h2>
          <p className={textTokens.sectionDescription}>{landing.sustainability.description}</p>
        </div>
        <div className={gridTokens.sectionGrid}>
          {landing.sustainability.highlights.map((item) => (
            <article key={item.title} className={cardTokens.base}>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-text">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`${layoutTokens.section} stack-section`}>
        <div className="section-header">
          <p className={textTokens.eyebrow}>{landing.stack.eyebrow}</p>
          <h2 className={textTokens.sectionHeading}>{landing.stack.heading}</h2>
          <p className={textTokens.sectionDescription}>{landing.stack.description}</p>
        </div>
        <div className={gridTokens.stack}>
          {landing.stack.items.map((item) => (
            <div key={item} className={cardTokens.pill}>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className={layoutTokens.section}>
        <div className="section-header">
          <p className={textTokens.eyebrow}>{landing.fieldNotes.eyebrow}</p>
          <h2 className={textTokens.sectionHeading}>{landing.fieldNotes.heading}</h2>
        </div>
        <div className="case-grid">
          {landing.fieldNotes.caseStudies.map((study) => (
            <article key={study.company} className={cardTokens.base}>
              <div className="case-body">
                <span className={badgeTokens.caseMeta}>{study.company}</span>
                <strong className="case-result">{study.result}</strong>
              </div>
              <p className="case-text">{study.quote}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-banner">
        <div className="cta-layout">
          <div className="section-header">
            <p className={textTokens.eyebrow}>{landing.ctaBanner.eyebrow}</p>
            <h2 className="cta-heading">{landing.ctaBanner.heading}</h2>
            <p className={textTokens.sectionDescription}>{landing.ctaBanner.description}</p>
          </div>
          <div className="cta-actions">
            <button className={`${buttonTokens.shared} ${buttonTokens.primary}`} onClick={() => navigate('/plan-my-workflow')}>
              {landing.ctaBanner.primaryCta}
            </button>
            <button className={`${buttonTokens.shared} ${buttonTokens.ghost}`} onClick={() => navigate('/explore-delivery-playbook')}>
              {landing.ctaBanner.secondaryCta}
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default LandingPage
