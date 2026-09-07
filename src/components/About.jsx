import { useEffect, useState } from 'react'
import {
  Film,
  Music,
  Users,
  Plane,
  UtensilsCrossed,
  Moon,
  Sparkles,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { aboutStats, aboutText, hobbies } from '../data/portfolioData'
import { useReveal } from '../hooks/useReveal'

const hobbyIcons = { Film, Music, Users, Plane, UtensilsCrossed, Moon }

export default function About() {
  const [ref, visible] = useReveal()
  const [hobbiesOpen, setHobbiesOpen] = useState(false)

  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-14">
          <div>
            <p className="text-sm text-violet-400 font-medium mb-3">About</p>
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
              A practical view of building and securing software.
            </h2>
          </div>

          <div
            ref={ref}
            className={`transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="space-y-5 text-mist text-base leading-relaxed">
              {aboutText.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {aboutStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border-glow p-5 bg-ink-900/40">
                  <p className="text-xs text-mist mb-1">{stat.label}</p>
                  <p className="text-sm font-medium text-white">{stat.value}</p>
                </div>
              ))}

              <button
                type="button"
                onClick={() => setHobbiesOpen(true)}
                className="rounded-2xl border-glow p-5 bg-ink-900/40 text-left transition-colors hover:border-violet-500/40 focus-ring col-span-2 sm:col-span-1"
              >
                <p className="text-xs text-mist mb-1">Hobbies</p>
                <p className="text-sm font-medium text-white inline-flex items-center gap-2">
                  <Sparkles size={14} className="text-violet-400" />
                  Click to explore
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>

      {hobbiesOpen && <HobbiesModal onClose={() => setHobbiesOpen(false)} />}
    </section>
  )
}

function HobbiesModal({ onClose }) {
  const [active, setActive] = useState(0)

  function goPrev() {
    setActive((i) => (i - 1 + hobbies.length) % hobbies.length)
  }

  function goNext() {
    setActive((i) => (i + 1) % hobbies.length)
  }

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  useEffect(() => {
    if (hobbies.length < 2) return undefined
    const id = setInterval(() => {
      setActive((i) => (i + 1) % hobbies.length)
    }, 2800)
    return () => clearInterval(id)
  }, [active])

  const current = hobbies[active]

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Hobbies"
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8"
    >
      <div className="absolute inset-0 bg-black/75 backdrop-blur-md" onClick={onClose} />

      <div className="relative w-full max-w-md animate-fadeIn">
        <button
          onClick={onClose}
          aria-label="Close"
          className="focus-ring absolute -top-2 -right-2 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-ink-900 text-white hover:bg-white/10"
        >
          <X size={18} />
        </button>

        <div className="mb-4 pr-10">
          <p className="text-sm text-violet-400 font-medium mb-1">Hobbies</p>
          <h3 className="font-display text-xl font-semibold">Things I enjoy.</h3>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border-glow bg-ink-900">
          {hobbies.map((hobby, i) => {
            const HobbyIcon = hobbyIcons[hobby.icon] || Sparkles
            const isActive = i === active
            return (
              <div
                key={hobby.id}
                className={`absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-violet-500/15 via-ink-900 to-ember-500/15 p-8 transition-opacity duration-700 ease-in-out ${
                  isActive ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-500/30 bg-violet-500/10 text-violet-400">
                  <HobbyIcon size={28} />
                </div>
                <p className="font-display text-xl sm:text-2xl font-semibold text-center text-white">
                  {hobby.label}
                </p>
              </div>
            )
          })}

          <button
            type="button"
            aria-label="Previous hobby"
            onClick={goPrev}
            className="focus-ring absolute left-3 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white hover:bg-black/70"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            aria-label="Next hobby"
            onClick={goNext}
            className="focus-ring absolute right-3 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white hover:bg-black/70"
          >
            <ChevronRight size={18} />
          </button>

          <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
            {hobbies.map((hobby, i) => (
              <button
                key={hobby.id}
                type="button"
                aria-label={hobby.label}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active ? 'w-6 bg-violet-400' : 'w-1.5 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        <p className="mt-3 text-center text-xs text-mist">
          {active + 1} / {hobbies.length} · {current.label}
        </p>
      </div>
    </div>
  )
}
