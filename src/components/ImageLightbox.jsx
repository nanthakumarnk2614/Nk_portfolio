import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

export default function ImageLightbox({ images, title, subtitle, onClose, startIndex = 0 }) {
  const list = images.filter(Boolean)
  const [index, setIndex] = useState(() =>
    Math.min(Math.max(startIndex, 0), Math.max(list.length - 1, 0))
  )
  const current = list[index] || null

  useEffect(() => {
    setIndex(Math.min(Math.max(startIndex, 0), Math.max(list.length - 1, 0)))
  }, [startIndex, list.length])

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight' && list.length > 1) setIndex((i) => (i + 1) % list.length)
      if (e.key === 'ArrowLeft' && list.length > 1) setIndex((i) => (i - 1 + list.length) % list.length)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, list.length])

  if (!list.length) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title || 'Image preview'}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8"
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-4xl animate-fadeIn">
        <button
          onClick={onClose}
          aria-label="Close"
          className="focus-ring absolute -top-2 -right-2 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-ink-900 text-white hover:bg-white/10 sm:top-0 sm:right-0"
        >
          <X size={18} />
        </button>

        {(title || subtitle) && (
          <div className="mb-4 pr-12">
            {title ? <h3 className="font-display text-lg sm:text-xl font-semibold">{title}</h3> : null}
            {subtitle ? <p className="text-sm text-mist mt-1">{subtitle}</p> : null}
          </div>
        )}

        <div className="relative overflow-hidden rounded-2xl border-glow bg-ink-900">
          <img
            src={encodeURI(current)}
            alt={title ? `${title} — image ${index + 1}` : `Preview ${index + 1}`}
            className="mx-auto max-h-[75vh] w-full object-contain bg-black/40"
          />

          {list.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous image"
                onClick={() => setIndex((i) => (i - 1 + list.length) % list.length)}
                className="focus-ring absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white hover:bg-black/70"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                aria-label="Next image"
                onClick={() => setIndex((i) => (i + 1) % list.length)}
                className="focus-ring absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white hover:bg-black/70"
              >
                <ChevronRight size={18} />
              </button>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {list.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Show image ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`h-2 w-2 rounded-full transition-colors ${
                      i === index ? 'bg-violet-400' : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {list.length > 1 && (
          <p className="mt-3 text-center text-xs text-mist">
            {index + 1} / {list.length}
          </p>
        )}
      </div>
    </div>
  )
}
