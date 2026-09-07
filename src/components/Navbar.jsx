import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks, profile } from '../data/portfolioData'
import { useScrollSpy } from '../hooks/useScrollSpy'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useScrollSpy(navLinks.map((l) => l.href.slice(1)))

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function handleNav(href) {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div
          className={`flex items-center justify-between rounded-2xl border-glow px-5 py-3 transition-all duration-300 ${
            scrolled ? 'glass shadow-lg shadow-black/30' : 'bg-transparent'
          }`}
        >
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              handleNav('#home')
            }}
            className="font-display text-sm font-semibold tracking-tight focus-ring rounded"
          >
            NK_Portfolio
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = active === link.href.slice(1)
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNav(link.href)
                  }}
                  className={`relative px-3 py-2 text-sm rounded-lg transition-colors focus-ring ${
                    isActive ? 'text-white' : 'text-mist hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-gradient-to-r from-violet-500 to-ember-500" />
                  )}
                </a>
              )
            })}
          </nav>

          <button
            className="md:hidden p-2 text-white focus-ring rounded-lg"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 glass border-glow rounded-2xl p-2 animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNav(link.href)
                }}
                className={`block px-4 py-3 text-sm rounded-xl transition-colors focus-ring ${
                  active === link.href.slice(1) ? 'text-white bg-white/5' : 'text-mist hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
