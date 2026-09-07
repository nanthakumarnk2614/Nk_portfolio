import {
  Code2,
  Database,
  Workflow,
  ShieldCheck,
  Terminal,
  FlaskConical,
  Headset,
  ExternalLink,
} from 'lucide-react'
import { profile, skillCategories } from '../data/portfolioData'
import { useReveal } from '../hooks/useReveal'

const icons = { Code2, Database, Workflow, ShieldCheck, Terminal, FlaskConical, Headset }

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-28 bg-ink-900/30">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="text-sm text-violet-400 font-medium mb-3">Skills</p>
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
              Tools and capabilities across the stack.
            </h2>
          </div>

          {profile.tryhackme && (
            <a
              href={profile.tryhackme}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center gap-2 self-start rounded-xl border-glow px-4 py-2.5 text-sm font-medium text-white transition-colors hover:border-violet-500/40 hover:bg-white/5 sm:self-auto"
            >
              TryHackMe profile
              <ExternalLink size={14} className="text-violet-400" />
            </a>
          )}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <SkillCard key={cat.title} category={cat} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillCard({ category, delay }) {
  const [ref, visible] = useReveal()
  const Icon = icons[category.icon] || Code2

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`group rounded-2xl border-glow bg-ink-900/40 p-6 transition-all duration-500 hover:border-violet-500/40 hover:bg-ink-900/70 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-ember-500/20 text-violet-400 transition-colors group-hover:text-white">
        <Icon size={18} />
      </div>
      <h3 className="font-display text-sm font-semibold mb-3">{category.title}</h3>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((s) => (
          <span
            key={s}
            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-mist transition-colors group-hover:text-white/90"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  )
}
