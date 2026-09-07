import { useState } from 'react'
import { Award } from 'lucide-react'
import { certifications } from '../data/portfolioData'
import { useReveal } from '../hooks/useReveal'
import ImageLightbox from './ImageLightbox'

export default function Certifications() {
  const [active, setActive] = useState(null)

  return (
    <section id="certifications" className="relative py-24 sm:py-28 bg-ink-900/30">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-xl">
          <p className="text-sm text-violet-400 font-medium mb-3">Certifications</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <CertCard key={cert.id || cert.name} cert={cert} delay={i * 50} onOpen={() => setActive(cert)} />
          ))}
        </div>
      </div>

      {active?.image && (
        <ImageLightbox
          images={[active.image]}
          title={active.name}
          subtitle={[active.provider, active.year].filter(Boolean).join(' · ')}
          onClose={() => setActive(null)}
        />
      )}
    </section>
  )
}

function CertCard({ cert, delay, onOpen }) {
  const [ref, visible] = useReveal()
  const [imgError, setImgError] = useState(false)
  const hasImage = Boolean(cert.image) && !imgError

  return (
    <button
      type="button"
      ref={ref}
      onClick={() => {
        if (hasImage) onOpen()
      }}
      style={{ transitionDelay: `${delay}ms` }}
      className={`group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border-glow text-left transition-all duration-500 hover:border-violet-500/40 focus-ring ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      } ${hasImage ? 'cursor-pointer' : 'cursor-default'}`}
    >
      {hasImage ? (
        <img
          src={cert.image}
          alt=""
          onError={() => setImgError(true)}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-ink-900 to-ember-500/15" />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/55 to-transparent" />

      <div className="relative z-10 flex h-full flex-col justify-end p-5">
        {!hasImage && (
          <div className="mb-auto flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-ember-500/20 text-violet-400">
            <Award size={18} />
          </div>
        )}
        <h3 className="font-display text-sm font-semibold leading-snug text-white">{cert.name}</h3>
        {cert.provider ? <p className="mt-1.5 text-xs text-mist">{cert.provider}</p> : null}
        {cert.year ? <p className="mt-0.5 text-xs text-mist/70">{cert.year}</p> : null}
      </div>
    </button>
  )
}
