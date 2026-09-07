import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Download, ExternalLink, FileText, Github, X } from 'lucide-react'
import ProjectVisual from './ProjectVisual'

export default function ProjectModal({ project, onClose }) {
  const [pptOpen, setPptOpen] = useState(Boolean(project.pptView || project.ppt))
  const scrollRef = useRef(null)

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 })
  }, [project.id])

  const cs = project.caseStudy
  const tech = Array.isArray(project.tech) ? project.tech : []
  const pptHref = project.ppt || project.pptView
  const pptLabel = project.pptLabel || 'Presentation.ppt'
  const mediaFit = project.imageFit === 'contain' ? 'object-contain bg-ink-950' : 'object-cover'

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.name} details`}
      className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-6"
    >
      <div className="absolute inset-0 bg-black/75 backdrop-blur-md" onClick={onClose} />

      <div className="relative flex w-full max-w-3xl max-h-[90vh] flex-col overflow-hidden rounded-3xl border-glow bg-ink-900 shadow-2xl shadow-black/50 animate-fadeIn">
        <div className="flex items-center justify-between gap-4 border-b border-white/10 bg-ink-900/95 px-5 py-3.5 sm:px-6">
          <div className="min-w-0">
            <p className="truncate text-[11px] uppercase tracking-wide text-ember-400 font-medium">{project.category}</p>
            <p className="truncate text-sm font-display font-semibold text-white">{project.name}</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="focus-ring flex h-9 w-9 flex-none items-center justify-center rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10"
          >
            <X size={18} />
          </button>
        </div>

        <div ref={scrollRef} className="modal-scroll flex-1 overflow-y-auto overscroll-contain">
          <div className={`relative aspect-video overflow-hidden bg-ink-800 ${project.imageFit === 'contain' ? 'bg-ink-950' : ''}`}>
            {project.video ? (
              <video
                key={project.video}
                src={encodeURI(project.video)}
                className={`h-full w-full ${mediaFit}`}
                controls
                playsInline
                preload="metadata"
                poster={project.image ? encodeURI(project.image) : undefined}
              >
                Your browser does not support video playback.
              </video>
            ) : (
              <ProjectVisual project={project} preferVideo={false} />
            )}
          </div>

          <div className="p-6 sm:p-9">
            <h3 className="text-2xl font-display font-semibold mb-3">{project.name}</h3>
            {project.description ? (
              <p className="text-mist text-sm leading-relaxed mb-6">{project.description}</p>
            ) : null}

            {tech.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {tech.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 px-3 py-1 text-xs text-mist">
                    {t}
                  </span>
                ))}
              </div>
            )}

            {project.pipeline && (
              <div className="mb-8">
                <p className="text-xs uppercase tracking-wide text-mist mb-3">System flow</p>
                <div className="flex flex-wrap items-center gap-2">
                  {project.pipeline.map((step, i) => (
                    <div key={step} className="flex items-center gap-2">
                      <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1.5 text-xs text-white">
                        {step}
                      </span>
                      {i < project.pipeline.length - 1 && <ArrowRight size={13} className="text-mist" />}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {(project.pptView || project.ppt) && (
              <div className="mb-8 border-t border-white/10 pt-6">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-violet-400 mb-1">Presentation</p>
                    <p className="text-sm text-white font-medium">{pptLabel}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {project.pptView && (
                      <button
                        type="button"
                        onClick={() => setPptOpen((v) => !v)}
                        className="focus-ring inline-flex items-center gap-1.5 rounded-xl border-glow px-4 py-2 text-sm font-medium text-white hover:bg-white/5"
                      >
                        <FileText size={15} />
                        {pptOpen ? 'Hide PPT' : 'View PPT'}
                      </button>
                    )}
                    {pptHref && (
                      <a
                        href={encodeURI(pptHref)}
                        download={pptLabel}
                        className="focus-ring inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-violet-500 to-ember-500 px-4 py-2 text-sm font-medium text-white"
                      >
                        <Download size={15} />
                        Download
                      </a>
                    )}
                  </div>
                </div>

                {pptOpen && project.pptView && (
                  <div className="overflow-hidden rounded-2xl border-glow bg-black/30">
                    <iframe
                      title={`${project.name} presentation`}
                      src={`${encodeURI(project.pptView)}#toolbar=1&navpanes=0`}
                      className="h-[420px] w-full bg-ink-950"
                    />
                  </div>
                )}
              </div>
            )}

            {cs && (
              <div className="space-y-6 border-t border-white/10 pt-6 pb-2">
                <CaseStudyRow label="Problem" text={cs.problem} />
                <CaseStudyRow label="Solution" text={cs.solution} />
                <CaseStudyRow label="Technology" text={cs.technology} />
                <CaseStudyRow label="How it works" text={cs.howItWorks} />
                <CaseStudyRow label="My contribution" text={cs.contribution} />
                <CaseStudyRow label="Outcome" text={cs.outcome} />
              </div>
            )}

            {(project.github || project.demo) && (
              <div className="mt-8 flex items-center gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring inline-flex items-center gap-1.5 rounded-xl border-glow px-5 py-2.5 text-sm font-medium text-white hover:bg-white/5"
                  >
                    <Github size={15} />
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-violet-500 to-ember-500 px-5 py-2.5 text-sm font-medium text-white"
                  >
                    <ExternalLink size={15} />
                    Live demo
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function CaseStudyRow({ label, text }) {
  if (!text) return null
  return (
    <div>
      <p className="text-xs uppercase tracking-wide text-violet-400 mb-1.5">{label}</p>
      <p className="text-sm text-mist leading-relaxed">{text}</p>
    </div>
  )
}
