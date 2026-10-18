'use client'

import { useRef, useState, type KeyboardEvent } from 'react'
import EyebrowLabel from '@/components/ui/EyebrowLabel'
import { engagementIcons } from '@/components/ui/EngagementIcons'

export type EngagementStep = { n: string; name: string; body: string }

// The six-step engagement model on /how-we-work, as a stepper (Decision 160).
// A rail across the top shows all six steps and fills Signal up to the current
// one; below it, one Ink panel gives the selected step a drawn icon, its name
// at display size and its body at reading size.
//
// It is a WAI-ARIA tabs pattern: the rail is the tablist, each panel a
// tabpanel, and Left/Right/Home/End move between steps. All six panels are
// rendered and the inactive ones are `hidden`, so every step's text is in the
// HTML for search engines and the HowTo schema's `step-NN` anchors still
// resolve.
export default function EngagementStepper({ steps }: { steps: EngagementStep[] }) {
  const [current, setCurrent] = useState(0)
  const tabs = useRef<(HTMLButtonElement | null)[]>([])
  const last = steps.length - 1
  const total = String(steps.length).padStart(2, '0')

  const go = (i: number, focus = false) => {
    const next = Math.max(0, Math.min(last, i))
    setCurrent(next)
    if (focus) tabs.current[next]?.focus()
  }

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    const keys: Record<string, number> = {
      ArrowRight: current + 1,
      ArrowLeft: current - 1,
      Home: 0,
      End: last,
    }
    if (e.key in keys) {
      e.preventDefault()
      go(keys[e.key], true)
    }
  }

  return (
    <section className="bg-paper py-20 lg:py-28 relative z-[1]">
      <div className="max-w-content mx-auto px-6 lg:px-20">
        <div className="mb-12 lg:mb-14">
          <EyebrowLabel className="mb-4 block">THE ENGAGEMENT MODEL</EyebrowLabel>
          <h2 className="font-archivo font-normal text-ink text-[32px] leading-[36px] lg:text-heading-1 tracking-[-0.025em]">
            Six steps, nothing skipped.
          </h2>
        </div>

        {/* Rail */}
        <div
          role="tablist"
          aria-label="Engagement steps"
          onKeyDown={onKey}
          className="relative grid grid-cols-6 mb-8 lg:mb-10"
        >
          <span aria-hidden className="absolute left-0 right-0 top-[19px] h-[2px] bg-ink/[0.12]" />
          <span
            aria-hidden
            className="absolute left-0 top-[19px] h-[2px] bg-signal transition-[width] duration-500 ease-out"
            style={{ width: `calc(${current} * (100% / ${steps.length}) + 20px)` }}
          />
          {steps.map((step, i) => {
            const state = i === current ? 'current' : i < current ? 'done' : 'todo'
            return (
              <button
                key={step.n}
                ref={(el) => {
                  tabs.current[i] = el
                }}
                role="tab"
                id={`step-tab-${step.n}`}
                aria-selected={i === current}
                aria-controls={`step-${step.n}`}
                tabIndex={i === current ? 0 : -1}
                onClick={() => go(i)}
                className="group relative z-[1] flex flex-col items-start gap-3 text-left focus:outline-none"
              >
                <span
                  className={`grid place-items-center w-10 h-10 rounded-full border-2 font-jetbrains text-xs tabular-nums transition-colors duration-300 group-focus-visible:ring-2 group-focus-visible:ring-signal group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-paper ${
                    state === 'current'
                      ? 'bg-signal border-signal text-ink'
                      : state === 'done'
                        ? 'bg-paper border-signal text-ink'
                        : 'bg-paper border-ink/[0.15] text-ink/45'
                  }`}
                >
                  {step.n}
                </span>
                <span
                  className={`hidden md:block font-archivo text-[15px] transition-colors duration-200 ${
                    state === 'current' ? 'text-ink' : 'text-ink/45 group-hover:text-ink'
                  }`}
                >
                  {step.name}
                </span>
              </button>
            )
          })}
        </div>

        {/* Panels */}
        {steps.map((step, i) => {
          const Icon = engagementIcons[step.n]
          return (
            <div
              key={step.n}
              role="tabpanel"
              id={`step-${step.n}`}
              aria-labelledby={`step-tab-${step.n}`}
              hidden={i !== current}
              className="engagement-panel bracketed raised-light rounded-lg bg-ink p-6 sm:p-8 lg:p-12 scroll-mt-24"
            >
              <div className="grid grid-cols-1 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-8 lg:gap-14 items-center">
                <div className="relative aspect-square w-full max-w-[220px] md:max-w-[340px] rounded-lg border border-paper/[0.10] bg-paper/[0.03] overflow-hidden">
                  <div aria-hidden className="absolute inset-0 topo-lines-pattern opacity-[0.12]" />
                  <div className="engagement-draw absolute inset-[14%]">{Icon && <Icon />}</div>
                </div>

                <div className="flex flex-col">
                  <span className="font-jetbrains text-xs font-medium tracking-eyebrow text-signal tabular-nums mb-4">
                    {step.n} <span className="text-paper/40">/ {total}</span>
                  </span>
                  <h3 className="font-archivo font-light text-paper text-[44px] leading-[1] sm:text-[60px] lg:text-[72px] tracking-[-0.04em] mb-6">
                    {step.name}
                  </h3>
                  <p className="font-barlow text-[18px] leading-[28px] lg:text-body-l text-paper/60 max-w-[52ch] mb-8">
                    {step.body}
                  </p>

                  <div className="flex gap-3">
                    <StepArrow label="Previous step" disabled={i === 0} onClick={() => go(i - 1)}>
                      ←
                    </StepArrow>
                    <StepArrow label="Next step" disabled={i === last} onClick={() => go(i + 1)}>
                      →
                    </StepArrow>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

function StepArrow({
  label,
  disabled,
  onClick,
  children,
}: {
  label: string
  disabled: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="grid place-items-center w-11 h-11 rounded-full border-[1.5px] border-signal font-jetbrains text-paper transition-colors duration-200 hover:bg-signal hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-paper disabled:cursor-default"
    >
      {children}
    </button>
  )
}
