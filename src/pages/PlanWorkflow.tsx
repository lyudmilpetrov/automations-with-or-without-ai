import { useEffect, useMemo, useState } from 'react'

import { useI18n } from '../i18n'
import { useRouter } from '../router'
import { buttonTokens, cardTokens, layoutTokens, textTokens } from '../styles/theme'

export const PlanWorkflowPage = () => {
  const { navigate } = useRouter()
  const { t } = useI18n()
  const planner = t.planner
  const [selectedGoal, setSelectedGoal] = useState(planner.workflowGoals[0]?.id ?? '')

  const activeGoal = useMemo(
    () => planner.workflowGoals.find((goal) => goal.id === selectedGoal) ?? planner.workflowGoals[0],
    [planner.workflowGoals, selectedGoal],
  )

  useEffect(() => {
    document.title = planner.documentTitle
  }, [planner.documentTitle])

  useEffect(() => {
    setSelectedGoal(planner.workflowGoals[0]?.id ?? '')
  }, [planner.workflowGoals])

  return (
    <>
      <section className={`${layoutTokens.hero} planner-hero`}>
        <div className="hero-content">
          <p className={textTokens.eyebrow}>{planner.hero.eyebrow}</p>
          <h1 className={textTokens.heroHeading}>{planner.hero.heading}</h1>
          <p className={`${textTokens.lead} hero-lead`}>{planner.hero.lead}</p>
          <div className="goal-selector" role="tablist" aria-label="Workflow goals">
            {planner.workflowGoals.map((goal) => (
              <button
                key={goal.id}
                type="button"
                className={`goal-card ${goal.id === activeGoal?.id ? 'is-active' : ''}`}
                onClick={() => setSelectedGoal(goal.id)}
                role="tab"
                aria-selected={goal.id === activeGoal?.id}
              >
                <span>{goal.label}</span>
                <span className="goal-card__metric">{goal.metric}</span>
              </button>
            ))}
          </div>
          {activeGoal && (
            <div className="goal-panel">
              <p className="goal-panel__summary">{activeGoal.summary}</p>
              <div className="workflow-score">
                <span>{planner.goalMetricLabel}</span>
                <strong>{activeGoal.metric}</strong>
              </div>
              <ul className="goal-steps">
                {activeGoal.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
              <div className="goal-panel__actions">
                <button className={`${buttonTokens.shared} ${buttonTokens.primary}`} onClick={() => navigate('/explore-delivery-playbook')}>
                  {planner.hero.primaryCta}
                </button>
                <button className={`${buttonTokens.shared} ${buttonTokens.ghost}`} onClick={() => navigate('/')}>
                  {planner.hero.secondaryCta}
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className={`${layoutTokens.section} workflow-panel`}>
        <div className="section-header">
          <p className={textTokens.eyebrow}>{planner.assurance.eyebrow}</p>
          <h2 className={textTokens.sectionHeading}>{planner.assurance.heading}</h2>
        </div>
        <div className="insight-grid">
          {planner.assurance.tracks.map((track) => (
            <article key={track.title} className={`${cardTokens.base} insight-card`}>
              <h3 className="card-title">{track.title}</h3>
              <p className="card-text">{track.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`${layoutTokens.section} workflow-moments`}>
        <div className="section-header">
          <p className={textTokens.eyebrow}>{planner.milestones.eyebrow}</p>
          <h2 className={textTokens.sectionHeading}>{planner.milestones.heading}</h2>
        </div>
        <div className="moment-grid">
          {planner.milestones.highlights.map((moment) => (
            <article key={moment.tag} className="moment-card">
              <span className="moment-card__tag">{moment.tag}</span>
              <h3>{moment.title}</h3>
              <p>{moment.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`${layoutTokens.section} insight-section`}>
        <div className="section-header">
          <p className={textTokens.eyebrow}>{planner.insights.eyebrow}</p>
          <h2 className={textTokens.sectionHeading}>{planner.insights.heading}</h2>
        </div>
        <div className="insight-grid">
          {planner.insights.tiles.map((tile) => (
            <article key={tile.title} className={`${cardTokens.base} insight-card`}>
              <h3 className="card-title">{tile.title}</h3>
              <p className="card-text">{tile.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default PlanWorkflowPage
