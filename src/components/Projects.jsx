import { useState } from 'react'
import { ArrowUpRight, Github } from 'lucide-react'
import { projects } from '../data/portfolioData'
import { useReveal } from '../hooks/useReveal'
import ProjectModal from './ProjectModal'
import ProjectVisual from './ProjectVisual'

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null)
  const featured = projects.find((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-xl">
          <p className="text-sm text-violet-400 font-medium mb-3">Projects</p>
        </div>

        {featured && <FeaturedCard project={featured} onOpen={() => setActiveProject(featured)} />}

        <div className="mt-6 grid md:grid-cols-3 gap-5">
          {rest.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={() => setActiveProject(p)} />
          ))}
        </div>
      </div>

      {activeProject && <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />}
    </section>
  )
}

function FeaturedCard({ project, onOpen }) {
  const [ref, visible] = useReveal()
  return (
    <div
      ref={ref}
      className={`group grid md:grid-cols-2 gap-0 overflow-hidden rounded-3xl border-glow bg-ink-900/50 transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="relative aspect-video md:aspect-auto overflow-hidden">
        <ProjectVisual project={project} className="transition-transform duration-700 group-hover:scale-105" />
      </div>
      <div className="p-8 sm:p-10 flex flex-col justify-center">
        <p className="text-xs tracking-wide text-ember-400 font-medium mb-3">{project.category}</p>
        <h3 className="text-2xl font-display font-semibold mb-3">{project.name}</h3>
        <p className="text-mist text-sm leading-relaxed mb-5">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.slice(0, 5).map((t) => (
            <span key={t} className="rounded-full border border-white/10 px-3 py-1 text-xs text-mist">
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onOpen}
            className="focus-ring inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-violet-500 to-ember-500 px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
          >
            View Project
            <ArrowUpRight size={15} />
          </button>
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
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project, onOpen }) {
  const [ref, visible] = useReveal()
  return (
    <div
      ref={ref}
      className={`group flex flex-col overflow-hidden rounded-2xl border-glow bg-ink-900/50 transition-all duration-500 hover:border-violet-500/40 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <ProjectVisual project={project} className="transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <p className="text-xs text-violet-400 font-medium mb-2">{project.category}</p>
        <h3 className="font-display text-base font-semibold mb-2">{project.name}</h3>
        <p className="text-mist text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.slice(0, 3).map((t) => (
            <span key={t} className="rounded-full border border-white/10 px-2.5 py-0.5 text-[11px] text-mist">
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 mt-auto">
          <button
            onClick={onOpen}
            className="focus-ring inline-flex items-center gap-1 text-sm font-medium text-white hover:text-violet-400 transition-colors"
          >
            View project
            <ArrowUpRight size={14} />
          </button>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub repository"
              className="focus-ring ml-auto text-mist hover:text-white transition-colors"
            >
              <Github size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
