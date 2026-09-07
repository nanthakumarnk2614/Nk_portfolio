import { Briefcase } from 'lucide-react'
import { experience } from '../data/portfolioData'
import { useReveal } from '../hooks/useReveal'

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-28 bg-ink-900/30">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-xl">
          <p className="text-sm text-violet-400 font-medium mb-3">Experience</p>
        </div>

        <div className="relative max-w-4xl">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-violet-500/50 via-white/10 to-transparent" />
          <div className="space-y-8">
            {experience.map((item, i) => (
              <TimelineItem key={i} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ item }) {
  const [ref, visible] = useReveal()

  return (
    <div
      ref={ref}
      className={`relative flex gap-6 pl-0 transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="relative z-10 flex h-10 w-10 flex-none items-center justify-center rounded-full border-glow bg-ink-900 text-violet-400">
        <Briefcase size={16} />
      </div>
      <div className="flex-1 rounded-2xl border-glow bg-ink-900/50 p-6">
        <p className="text-xs text-ember-400 font-medium mb-2">{item.year}</p>
        <h3 className="font-display text-base font-semibold mb-1">{item.title}</h3>
        <p className="text-sm text-mist mb-3">{item.org}</p>
        {item.detail ? <p className="text-sm text-mist/90 leading-relaxed">{item.detail}</p> : null}
      </div>
    </div>
  )
}
