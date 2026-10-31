import { useEffect } from 'react'
import { useI18n } from '../i18n'
import { NavLink } from '../router/RouterProvider'
import { uiCopy } from '../uiCopy'

const Arrow = () => <span aria-hidden="true">↗</span>

export const LandingPage = () => {
  const { t, language } = useI18n()
  const landing = t.landing
  const ui = uiCopy[language]

  useEffect(() => { document.title = landing.documentTitle }, [landing.documentTitle])

  return (
    <>
      <section className="landing-hero" aria-labelledby="page-heading">
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow"><span className="status-dot" />{ui.heroEyebrow}</p>
          <h1 id="page-heading" tabIndex={-1} className="hero-heading">{landing.hero.heading}</h1>
          <p className="lead hero-lead">{landing.hero.lead}</p>
          <div className="cta-group">
            <NavLink to="/plan-my-workflow" className="button button--primary">{landing.hero.primaryCta}<Arrow /></NavLink>
            <NavLink to="/explore-delivery-playbook" className="text-link">{landing.hero.secondaryCta}<span aria-hidden="true">→</span></NavLink>
          </div>
          <p className="hero-note"><span aria-hidden="true">✓</span>{ui.noSignup}</p>
        </div>
        <figure className="workflow-visual">
          <div className="visual-topline"><span className="visual-dots" aria-hidden="true"><i /><i /><i /></span><span>{ui.workflowExample}</span><span className="visual-status" aria-hidden="true">↗</span></div>
          <div className="workflow-canvas">
            <div className="workflow-node workflow-node--incoming"><span className="node-icon" aria-hidden="true">↙</span><div><span className="node-kicker">01 / {ui.input}</span><strong>{ui.taskArrives}</strong></div><span className="node-check" aria-hidden="true">✓</span></div>
            <div className="workflow-connector" aria-hidden="true"><span>↓</span></div>
            <div className="workflow-node workflow-node--process"><span className="node-icon" aria-hidden="true">⌘</span><div><span className="node-kicker">02 / {ui.automation}</span><strong>{ui.checkAndOrganize}</strong></div><span className="node-check" aria-hidden="true">✓</span></div>
            <div className="workflow-connector" aria-hidden="true"><span>↓</span></div>
            <div className="workflow-node workflow-node--ready"><span className="node-icon" aria-hidden="true">✓</span><div><span className="node-kicker">03 / {ui.output}</span><strong>{ui.readyToReview}</strong></div><span className="node-check" aria-hidden="true">✓</span></div>
            <div className="human-note"><span aria-hidden="true">◎</span>{ui.inControl}</div>
          </div>
          <figcaption>{ui.visualCaption}</figcaption>
        </figure>
      </section>
      <ul className="benefit-strip" aria-label={ui.principles}>
        {landing.metrics.map((metric, index) => <li key={metric.label}><span className="benefit-number" aria-hidden="true">0{index + 1}</span><div><strong>{metric.value}</strong><span>{metric.label}</span><p>{metric.detail}</p></div></li>)}
      </ul>
      <section className="section-card examples-section" aria-labelledby="examples-heading">
        <div className="section-header section-header--split"><div><p className="eyebrow">{landing.fieldNotes.eyebrow}</p><h2 id="examples-heading" className="section-heading">{landing.fieldNotes.heading}</h2></div><p className="section-description">{ui.examplesIntro}</p></div>
        <div className="case-grid">
          {landing.fieldNotes.caseStudies.map((study, index) => <article key={study.company} className={`example-card example-card--${index + 1}`}><div className="example-topline"><span className="case-badge">{study.company}</span><span className="example-icon" aria-hidden="true">{index === 0 ? '≡' : '↗'}</span></div><h3>{study.result}</h3><p>{study.quote}</p><NavLink to="/plan-my-workflow" className="text-link">{ui.exploreWorkflow}<span aria-hidden="true">→</span></NavLink></article>)}
        </div>
      </section>
      <section className="section-card approach-section" aria-labelledby="approach-heading">
        <div className="approach-intro"><p className="eyebrow">{landing.adaptive.eyebrow}</p><h2 id="approach-heading" className="section-heading">{landing.adaptive.heading}</h2><p className="section-description">{landing.adaptive.description}</p><p className="approach-note"><span aria-hidden="true">↳</span>{landing.adaptive.sidebar.blendingBody}</p></div>
        <div className="approach-list">{landing.adaptive.tiers.map((tier, index) => <details className="approach-detail" key={tier.id}><summary><span className="detail-number" aria-hidden="true">0{index + 1}</span><span><span className="detail-label">{tier.label}</span><span className="detail-tagline">{tier.tagline}</span></span><span className="disclosure-icon" aria-hidden="true">+</span></summary><div className="detail-content"><p>{tier.summary}</p><p>{tier.location}</p><h3>{landing.adaptive.labels.useCases}</h3><ul>{tier.useCases.map(item => <li key={item}>{item}</li>)}</ul><h3>{landing.adaptive.labels.benefits}</h3><ul>{tier.benefits.map(item => <li key={item}>{item}</li>)}</ul></div></details>)}</div>
      </section>
      <section className="section-card delivery-section" aria-labelledby="delivery-heading">
        <div className="section-header"><p className="eyebrow">{landing.deliveryPlaybook.eyebrow}</p><h2 id="delivery-heading" className="section-heading">{landing.deliveryPlaybook.heading}</h2><p className="section-description">{landing.deliveryPlaybook.description}</p></div>
        <ol className="delivery-steps">{landing.deliveryPlaybook.pipeline.map((step, index) => <li key={step.title}><span className="step-number" aria-hidden="true">0{index + 1}</span><h3>{step.title}</h3><p>{step.description}</p></li>)}</ol>
        <NavLink to="/explore-delivery-playbook" className="text-link">{landing.hero.secondaryCta}<span aria-hidden="true">→</span></NavLink>
      </section>
      <section className="cta-banner" aria-labelledby="next-step-heading"><div><p className="eyebrow">{landing.ctaBanner.eyebrow}</p><h2 id="next-step-heading">{landing.ctaBanner.heading}</h2><p>{landing.ctaBanner.description}</p></div><div className="cta-banner__action"><NavLink to="/plan-my-workflow" className="button button--primary">{landing.ctaBanner.primaryCta}<Arrow /></NavLink><span>{ui.noSignup}</span></div></section>
    </>
  )
}

export default LandingPage
