import { useState } from 'react'
import { Cpu, Radio, ShoppingBag, Bot, LayoutDashboard } from 'lucide-react'

const visualByLayout = {
  horizontal: HorizontalVisual,
  vertical: VerticalVisual,
  technical: TechnicalVisual,
  ecommerce: EcommerceVisual,
  portal: PortalVisual,
}

export default function ProjectVisual({ project, className = '', preferVideo = true }) {
  const [videoError, setVideoError] = useState(false)
  const [imageError, setImageError] = useState(false)
  const Fallback = visualByLayout[project.layout] || HorizontalVisual
  const fitClass = project.imageFit === 'contain' ? 'object-contain bg-ink-950' : 'object-cover'

  if (preferVideo && project.video && !videoError) {
    return (
      <video
        src={encodeURI(project.video)}
        className={`h-full w-full object-cover ${className}`}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onError={() => setVideoError(true)}
      />
    )
  }

  if (project.image && !imageError) {
    return (
      <img
        src={encodeURI(project.image)}
        alt={project.name}
        onError={() => setImageError(true)}
        className={`h-full w-full ${fitClass} ${className}`}
      />
    )
  }

  return <Fallback className={className} />
}

function HorizontalVisual({ className }) {
  return (
    <div className={`relative h-full w-full bg-gradient-to-br from-ink-800 to-ink-900 flex items-center justify-center ${className}`}>
      <Bot size={56} className="text-violet-400/70" strokeWidth={1.2} />
      <div className="absolute bottom-4 left-4 right-4 h-px bg-gradient-to-r from-violet-500/60 to-ember-500/60" />
    </div>
  )
}

function VerticalVisual({ className }) {
  return (
    <div className={`relative h-full w-full bg-ink-800 flex items-center justify-center ${className}`}>
      <div className="grid grid-cols-3 gap-2 opacity-40">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="h-3 w-3 rounded-full bg-ember-400" style={{ opacity: 0.3 + (i % 3) * 0.2 }} />
        ))}
      </div>
      <Cpu size={44} className="absolute text-ember-400/80" strokeWidth={1.2} />
    </div>
  )
}

function TechnicalVisual({ className }) {
  return (
    <div className={`relative h-full w-full bg-ink-900 flex items-center justify-center overflow-hidden ${className}`}>
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full opacity-20">
        <circle cx="100" cy="100" r="60" fill="none" stroke="#9B5CFF" strokeWidth="1" />
        <circle cx="100" cy="100" r="90" fill="none" stroke="#FF4D6D" strokeWidth="1" />
        <line x1="0" y1="100" x2="200" y2="100" stroke="#9B5CFF" strokeWidth="0.5" />
        <line x1="100" y1="0" x2="100" y2="200" stroke="#FF4D6D" strokeWidth="0.5" />
      </svg>
      <Radio size={40} className="text-violet-400/80" strokeWidth={1.2} />
    </div>
  )
}

function EcommerceVisual({ className }) {
  return (
    <div className={`relative h-full w-full bg-ink-800 flex items-center justify-center ${className}`}>
      <div className="grid grid-cols-2 gap-2 w-2/3">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="aspect-square rounded-lg bg-gradient-to-br from-violet-500/20 to-ember-500/20 border border-white/10" />
        ))}
      </div>
      <ShoppingBag size={30} className="absolute text-ember-400/80" strokeWidth={1.2} />
    </div>
  )
}

function PortalVisual({ className }) {
  return (
    <div className={`relative h-full w-full bg-gradient-to-br from-ink-800 to-ink-900 flex items-center justify-center overflow-hidden ${className}`}>
      <div className="absolute inset-6 grid grid-cols-3 gap-2 opacity-30">
        <div className="col-span-1 rounded-lg border border-white/10 bg-white/5" />
        <div className="col-span-2 space-y-2">
          <div className="h-3 w-2/3 rounded bg-violet-500/30" />
          <div className="h-16 rounded-lg border border-white/10 bg-white/5" />
          <div className="grid grid-cols-2 gap-2">
            <div className="h-10 rounded-lg border border-white/10 bg-ember-500/10" />
            <div className="h-10 rounded-lg border border-white/10 bg-violet-500/10" />
          </div>
        </div>
      </div>
      <LayoutDashboard size={40} className="relative text-violet-400/85" strokeWidth={1.2} />
    </div>
  )
}
