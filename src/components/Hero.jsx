import { useState } from 'react'
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/portfolioData'

function WhatsAppIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export default function Hero() {
  const [imgError, setImgError] = useState(false)
  const initials = profile.name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)

  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
        <div className="absolute -top-40 left-1/4 h-[420px] w-[420px] rounded-full bg-violet-500/20 blur-[120px]" />
        <div className="absolute top-20 right-0 h-[380px] w-[380px] rounded-full bg-ember-500/15 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl w-full px-6 grid md:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
        <div>
          <p className="text-sm tracking-wide text-mist mb-4">{profile.name}</p>

          <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] font-semibold mb-6">
            {profile.headline[0]}
            <br />
            <span className="grad-text">{profile.headline[1]}</span>
          </h1>

          <p className="text-mist text-base sm:text-lg max-w-xl mb-3">{profile.summary}</p>
          <p className="text-sm text-violet-400/90 font-medium mb-10">{profile.focus}</p>

          <div className="flex flex-wrap items-center gap-4 mb-10">
            <button
              onClick={() => scrollTo('experience')}
              className="focus-ring inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-ember-500 px-6 py-3 text-sm font-medium text-white shadow-glow transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              View my work
            </button>
            <a
              href={profile.resume}
              download="Nantha_Kumar_Resume.docx"
              className="focus-ring inline-flex items-center gap-2 rounded-xl border-glow px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5"
            >
              <Download size={16} />
              Download resume
            </a>
          </div>

          <div className="flex items-center gap-4">
            <SocialLink href={profile.github} label="GitHub" icon={<Github size={18} />} />
            <SocialLink href={profile.linkedin} label="LinkedIn" icon={<Linkedin size={18} />} />
            <SocialLink href={`mailto:${profile.email}`} label="Email" icon={<Mail size={18} />} />
            <SocialLink href={profile.whatsapp} label="WhatsApp" icon={<WhatsAppIcon size={18} />} />
          </div>
        </div>

        <div className="relative mx-auto md:mx-0">
          <div className="absolute inset-0 scale-95 rounded-[2rem] bg-gradient-to-br from-violet-500/40 to-ember-500/30 blur-2xl" />
          <div className="relative glass border-glow rounded-[2rem] p-3 w-[280px] sm:w-[320px]">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-ink-800">
              {!imgError ? (
                <img
                  src={profile.image}
                  alt={profile.name}
                  onError={() => setImgError(true)}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-ink-800 to-ink-900">
                  <span className="font-display text-5xl font-semibold grad-text">{initials}</span>
                </div>
              )}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
            </div>
            <div className="mt-4 px-1 pb-1">
              <p className="font-display text-sm font-medium">{profile.title}</p>
              <p className="text-xs text-mist mt-0.5">{profile.focus}</p>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollTo('about')}
        aria-label="Scroll to about section"
        className="focus-ring absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full border-glow p-2 text-mist hover:text-white transition-colors animate-bounce"
      >
        <ArrowDown size={18} />
      </button>
    </section>
  )
}

function SocialLink({ href, label, icon }) {
  if (!href) return null
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      aria-label={label}
      className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border-glow text-mist transition-colors hover:text-white hover:border-violet-500/50"
    >
      {icon}
    </a>
  )
}
