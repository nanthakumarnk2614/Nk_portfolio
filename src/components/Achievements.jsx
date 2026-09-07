import { useEffect, useState } from 'react'
import { Trophy } from 'lucide-react'
import { achievement } from '../data/portfolioData'
import { useReveal } from '../hooks/useReveal'
import ImageLightbox from './ImageLightbox'

export default function Achievements() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)
  const [ref, visible] = useReveal()
  const [failed, setFailed] = useState({})
  const images = (achievement.images || []).filter(Boolean)
  const visibleImages = images.filter((src) => !failed[src])

  useEffect(() => {
    if (visibleImages.length < 2) return undefined
    const id = setInterval(() => {
      setActive((i) => (i + 1) % visibleImages.length)
    }, 3200)
    return () => clearInterval(id)
  }, [visibleImages.length])

  useEffect(() => {
    if (active >= visibleImages.length) setActive(0)
  }, [active, visibleImages.length])

  const currentSrc = visibleImages[active] || visibleImages[0]

  return (
    <section id="achievements" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-xl">
          <p className="text-sm text-violet-400 font-medium mb-3">Achievements</p>
          <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">Recognition along the way.</h2>
        </div>

        <button
          type="button"
          ref={ref}
          onClick={() => visibleImages.length > 0 && setOpen(true)}
          className={`group relative aspect-[16/9] w-full max-w-3xl overflow-hidden rounded-3xl border-glow text-left transition-all duration-700 focus-ring hover:border-violet-500/40 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          } ${visibleImages.length ? 'cursor-pointer' : 'cursor-default'}`}
        >
          {visibleImages.length > 0 ? (
            <>
              {visibleImages.map((src, i) => (
                <img
                  key={src}
                  src={encodeURI(src)}
                  alt=""
                  onError={() => setFailed((f) => ({ ...f, [src]: true }))}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${
                    src === currentSrc ? 'opacity-100' : 'opacity-0'
                  } ${src === currentSrc ? 'group-hover:scale-105 transition-transform duration-500' : ''}`}
                />
              ))}
            </>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/15 via-ink-900 to-ember-500/15" />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/45 to-transparent" />

          <div className="relative z-10 flex h-full flex-col justify-end p-8 sm:p-10">
            {visibleImages.length === 0 && (
              <div className="mb-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-500/30 bg-violet-500/10">
                <Trophy size={22} className="text-violet-400" />
              </div>
            )}
            <p className="text-sm text-ember-400 font-medium mb-2">Achievement</p>
            <h3 className="text-2xl sm:text-3xl font-display font-semibold mb-2">{achievement.name}</h3>
            <p className="text-mist text-sm">
              {achievement.org} · {achievement.event}
            </p>

            {visibleImages.length > 1 && (
              <div className="mt-4 flex items-center gap-2">
                {visibleImages.map((src, i) => (
                  <span
                    key={src}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === active ? 'w-6 bg-violet-400' : 'w-1.5 bg-white/30'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </button>
      </div>

      {open && visibleImages.length > 0 && (
        <ImageLightbox
          images={images}
          title={achievement.name}
          subtitle={`${achievement.org} · ${achievement.event}`}
          onClose={() => setOpen(false)}
          startIndex={images.indexOf(currentSrc)}
        />
      )}
    </section>
  )
}
