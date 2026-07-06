import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const { t, language, setLanguage } = useLanguage()

  const navLinks = [
    { label: t.nav.home, path: '/' },
    { label: t.nav.about, path: '/about' },
    { label: t.nav.services, path: '/services' },
    { label: t.nav.academy, path: '/academy' },
    { label: t.nav.studio, path: '/studio' },
    { label: t.nav.contact, path: '/contact' },
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[200] transition-all duration-400 ${
          scrolled ? 'bg-[rgba(9,9,10,0.92)] backdrop-blur-[12px]' : 'bg-transparent'
        }`}
      >
        <div className="wide-max flex items-center justify-between" style={{ height: 80 }}>
          <Link to="/" className="flex items-center gap-3">
            <img
              src="./assets/logo.png"
              alt="Jaiyeola Movie Entertainment Productions"
              className="h-12 w-auto object-contain"
            />
            <span className="hidden sm:flex flex-col">
              <span
                className="text-white font-semibold tracking-[0.08em] uppercase leading-tight"
                style={{ fontSize: '0.75rem', fontFamily: 'Inter, sans-serif' }}
              >
                Jaiyeola Movie Entertainment
              </span>
              <span className="font-micro text-[#D4A853] tracking-[0.06em]" style={{ fontSize: '0.55rem' }}>
                IN CONJUNCTION WITH FALA FILMS MULTIMEDIA
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-nav transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-[#D4A853] border-b border-[#D4A853] pb-0.5'
                    : 'text-white hover:text-[#D4A853]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            {/* Language Switcher */}
            <div className="flex items-center gap-2 border border-[rgba(255,255,255,0.3)] rounded-full px-2 py-1">
              <button
                onClick={() => setLanguage('en')}
                className={`font-nav text-xs px-3 py-1 rounded-full transition-colors ${
                  language === 'en'
                    ? 'bg-[#D4A853] text-[#09090A]'
                    : 'text-white hover:text-[#D4A853]'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('yo')}
                className={`font-nav text-xs px-3 py-1 rounded-full transition-colors ${
                  language === 'yo'
                    ? 'bg-[#D4A853] text-[#09090A]'
                    : 'text-white hover:text-[#D4A853]'
                }`}
              >
                YO
              </button>
            </div>
          </nav>

          {/* Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay flex flex-col items-center justify-center gap-8 ${
          menuOpen ? 'is-open' : ''
        }`}
      >
        <button
          className="absolute top-6 right-6 text-white p-2"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        {navLinks.map((link, i) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={() => setMenuOpen(false)}
            className={`font-h1 transition-colors duration-300 ${
              location.pathname === link.path ? 'text-[#D4A853]' : 'text-white hover:text-[#D4A853]'
            }`}
            style={{
              transitionDelay: menuOpen ? `${i * 0.08}s` : '0s',
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.5s ease, transform 0.5s ease, color 0.3s ease',
            }}
          >
            {link.label}
          </Link>
        ))}
        {/* Mobile Language Switcher */}
        <div
          className="flex items-center gap-2 border border-[rgba(255,255,255,0.3)] rounded-full px-2 py-1"
          style={{
            transitionDelay: menuOpen ? `${navLinks.length * 0.08}s` : '0s',
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.5s ease, transform 0.5s ease',
          }}
        >
          <button
            onClick={() => setLanguage('en')}
            className={`font-nav text-xs px-3 py-1 rounded-full transition-colors ${
              language === 'en'
                ? 'bg-[#D4A853] text-[#09090A]'
                : 'text-white hover:text-[#D4A853]'
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage('yo')}
            className={`font-nav text-xs px-3 py-1 rounded-full transition-colors ${
              language === 'yo'
                ? 'bg-[#D4A853] text-[#09090A]'
                : 'text-white hover:text-[#D4A853]'
            }`}
          >
            YO
          </button>
        </div>
      </div>
    </>
  )
}
