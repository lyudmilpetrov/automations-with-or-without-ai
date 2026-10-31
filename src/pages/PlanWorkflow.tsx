import { useEffect, useState } from 'react'

import { useI18n, type LanguageCode } from '../i18n'
import { NavLink } from '../router/RouterProvider'
import { buttonTokens, cardTokens, layoutTokens, textTokens } from '../styles/theme'

const plannerLabels: Record<LanguageCode, {
  choose: string
  checklist: string
  download: string
  helper: string
  downloaded: string
}> = {
  en: {
    choose: '01 · Choose a task',
    checklist: '02 · Your starter checklist',
    download: 'Download my checklist',
    helper: 'No account or contact details needed. Your choices stay in this browser; downloading saves a text file to your device.',
    downloaded: 'Your checklist is ready to save.',
  },
  zh: {
    choose: '01 · 选择任务',
    checklist: '02 · 你的起步清单',
    download: '下载我的清单',
    helper: '无需账户或联系方式。你的选择仅保留在此浏览器中；下载会将文本文件保存到你的设备。',
    downloaded: '清单已准备好保存。',
  },
  ko: {
    choose: '01 · 작업 선택',
    checklist: '02 · 시작 체크리스트',
    download: '체크리스트 다운로드',
    helper: '계정이나 연락처가 필요하지 않습니다. 선택 내용은 이 브라우저에만 머물며, 다운로드하면 기기에 텍스트 파일이 저장됩니다.',
    downloaded: '체크리스트를 저장할 수 있습니다.',
  },
  ru: {
    choose: '01 · Выберите задачу',
    checklist: '02 · Ваш стартовый план',
    download: 'Скачать мой план',
    helper: 'Без регистрации и контактных данных. Ваш выбор остаётся в браузере; при скачивании текстовый файл сохраняется на устройстве.',
    downloaded: 'План готов к сохранению.',
  },
  ar: {
    choose: '01 · اختر مهمة',
    checklist: '02 · قائمة خطواتك الأولى',
    download: 'تنزيل قائمة الخطوات',
    helper: 'لا تحتاج إلى حساب أو بيانات اتصال. تبقى اختياراتك في هذا المتصفح؛ يحفظ التنزيل ملفًا نصيًا على جهازك.',
    downloaded: 'قائمة الخطوات جاهزة للحفظ.',
  },
  bg: {
    choose: '01 · Изберете задача',
    checklist: '02 · Вашият начален план',
    download: 'Изтеглете моя план',
    helper: 'Без регистрация или данни за контакт. Изборът ви остава в този браузър; изтеглянето запазва текстов файл на устройството ви.',
    downloaded: 'Планът ви е готов за запазване.',
  },
}

export const PlanWorkflowPage = () => {
  const { t, language } = useI18n()
  const planner = t.planner
  const labels = plannerLabels[language]
  const [selectedGoal, setSelectedGoal] = useState(planner.workflowGoals[0]?.id ?? '')
  const [downloadStatus, setDownloadStatus] = useState('')
  const activeGoal = planner.workflowGoals.find((goal) => goal.id === selectedGoal) ?? planner.workflowGoals[0]

  useEffect(() => {
    document.title = planner.documentTitle
  }, [planner.documentTitle])

  const downloadChecklist = () => {
    if (!activeGoal) return

    const contents = [
      t.header.brand,
      planner.documentTitle,
      '',
      activeGoal.label,
      activeGoal.summary,
      '',
      ...activeGoal.steps.map((step, index) => `${index + 1}. ${step}`),
      '',
      `${planner.goalMetricLabel}: ${activeGoal.metric}`,
    ].join('\n')
    const url = URL.createObjectURL(new Blob(['\uFEFF', contents], { type: 'text/plain;charset=utf-8' }))
    const link = document.createElement('a')
    link.href = url
    link.download = `automation-checklist-${activeGoal.id}-${language}.txt`
    document.body.appendChild(link)
    link.click()
    link.remove()
    window.setTimeout(() => URL.revokeObjectURL(url), 1000)
    setDownloadStatus(labels.downloaded)
  }

  return (
    <>
      <section className={`${layoutTokens.hero} planner-hero`}>
        <div className="hero-content planner-intro">
          <p className={textTokens.eyebrow}>{planner.hero.eyebrow}</p>
          <h1 id="page-heading" tabIndex={-1} className={textTokens.heroHeading}>{planner.hero.heading}</h1>
          <p className={`${textTokens.lead} hero-lead`}>{planner.hero.lead}</p>
        </div>

        <div className="planner-workspace">
          <div>
            <h2 id="workflow-choices" className="planner-step-label">{labels.choose}</h2>
            <div className="goal-selector" role="group" aria-labelledby="workflow-choices">
              {planner.workflowGoals.map((goal, index) => (
                <button
                  key={goal.id}
                  type="button"
                  className={`goal-card ${goal.id === activeGoal?.id ? 'is-active' : ''}`}
                  aria-pressed={goal.id === activeGoal?.id}
                  onClick={() => {
                    setSelectedGoal(goal.id)
                    setDownloadStatus('')
                  }}
                >
                  <span className="goal-card__number" aria-hidden="true">0{index + 1}</span>
                  <span>{goal.label}</span>
                  <span className="goal-card__check" aria-hidden="true">{goal.id === activeGoal?.id ? '✓' : '→'}</span>
                </button>
              ))}
            </div>
          </div>

          {activeGoal && (
            <section className="goal-panel" aria-labelledby="checklist-heading">
              <p className="planner-step-label">{labels.checklist}</p>
              <div aria-live="polite" aria-atomic="true">
                <h2 id="checklist-heading" className="goal-panel__heading">{activeGoal.label}</h2>
                <p className="goal-panel__summary">{activeGoal.summary}</p>
              </div>
              <ol className="goal-steps">
                {activeGoal.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              <p className="workflow-score">
                <span>{planner.goalMetricLabel}</span>
                <strong>{activeGoal.metric}</strong>
              </p>
              <div className="goal-panel__actions">
                <button type="button" className={`${buttonTokens.shared} ${buttonTokens.primary}`} onClick={downloadChecklist}>
                  {labels.download}
                  <span aria-hidden="true">↓</span>
                </button>
                <NavLink to="/explore-delivery-playbook" className={`${buttonTokens.shared} ${buttonTokens.ghost}`}>
                  {planner.hero.primaryCta}
                </NavLink>
              </div>
              <p className="planner-helper">{labels.helper}</p>
              <p className="download-status" role="status">{downloadStatus}</p>
            </section>
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
        <NavLink to="/" className="text-link">{planner.hero.secondaryCta} <span aria-hidden="true">↗</span></NavLink>
      </section>
    </>
  )
}

export default PlanWorkflowPage
