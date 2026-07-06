import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ServiceIcon } from '../components/Icons'
import { useLanguage } from '../contexts/LanguageContext'

const getServiceIcon = (icon: string) => {
  switch (icon) {
    case 'movie': return <ServiceIcon.Movie />
    case 'media': return <ServiceIcon.Media />
    case 'talent': return <ServiceIcon.Talent />
    case 'academy': return <ServiceIcon.Multimedia />
    case 'consultancy': return <ServiceIcon.Promotions />
    case 'post': return <ServiceIcon.Events />
    default: return <ServiceIcon.Movie />
  }
}

export default function Home() {
  const [heroLoaded, setHeroLoaded] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [currentHighlight, setCurrentHighlight] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const { t } = useLanguage()

  useEffect(() => {
    const timer = setTimeout(() => setHeroLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentHighlight((prev) => (prev + 1) % t.home.highlights.items.length)
    }, 7000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [t.home.highlights.items.length])

  const pauseCarousel = () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  const resumeCarousel = () => {
    intervalRef.current = setInterval(() => {
      setCurrentHighlight((prev) => (prev + 1) % t.home.highlights.items.length)
    }, 7000)
  }

  const goTo = (index: number) => setCurrentHighlight(index)
  const goNext = () => setCurrentHighlight((prev) => (prev + 1) % t.home.highlights.items.length)
  const goPrev = () => setCurrentHighlight((prev) => (prev - 1 + t.home.highlights.items.length) % t.home.highlights.items.length)

  return (
    <div>
      {/* ─── HERO ─── */}
      <section className="relative w-full min-h-[100dvh] flex items-end overflow-hidden bg-[#09090A]">
        {!videoLoaded && (
          <div className="absolute inset-0 bg-[#09090A] z-[1]" />
        )}

        <video
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1800ms] ${
            heroLoaded && videoLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
          }`}
          style={{ transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)' }}
        >
          <source src="./assets/hero-bg.mp4" type="video/mp4" />
        </video>

        <div
          className="absolute inset-0 z-[2]"
          style={{ background: 'linear-gradient(to bottom, rgba(9,9,10,0.45) 0%, rgba(9,9,10,0.55) 35%, rgba(9,9,10,0.75) 65%, rgba(9,9,10,0.95) 100%)' }}
        />

        <div className="relative z-10 w-full px-[8vw] pt-28 pb-[12vh] max-w-[1400px] mx-auto">
          <h1
            className={`font-display text-white max-w-[800px] transition-all duration-1000 ${
              heroLoaded && videoLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[40px]'
            }`}
            style={{ transitionDelay: '0.6s', textShadow: '0 2px 40px rgba(0,0,0,0.5)', transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)' }}
          >
            {t.home.hero.title}
          </h1>
          <p
            className={`font-body text-[#C8C8C8] max-w-[640px] mt-8 transition-all duration-800 ${
              heroLoaded && videoLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'
            }`}
            style={{ transitionDelay: '0.9s', transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)' }}
          >
            {t.home.hero.subtitle}
          </p>
          <div
            className={`flex flex-wrap gap-4 mt-12 transition-all duration-600 ${
              heroLoaded && videoLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[15px]'
            }`}
            style={{ transitionDelay: '1.2s', transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)' }}
          >
            <a href="#services" className="btn-primary">{t.home.hero.cta1}</a>
            <Link to="/academy" className="btn-ghost">{t.home.hero.cta2}</Link>
          </div>
        </div>
      </section>

      {/* ─── PARTNERSHIP ─── */}
      <section className="section-padding content-max">
        <div className="reveal">
          <p className="section-label">{t.home.partnership.sectionLabel}</p>
          <h2 className="font-h1 text-white mb-6">{t.home.partnership.title}</h2>
          <p className="font-body text-[#C8C8C8] max-w-[700px] mb-16">
            {t.home.partnership.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card reveal reveal-delay-1">
            <img
              src="./assets/logo.png"
              alt="Jaiyeola Movie Entertainment Productions logo"
              className="h-20 w-auto object-contain mb-4"
            />
            <h3 className="font-h3 text-white mb-3">{t.home.partnership.jaiyeolaTitle}</h3>
            <p className="font-body text-[#C8C8C8] mb-4">
              {t.home.partnership.jaiyeolaDesc}
            </p>
            <p className="font-micro text-[#D4A853]">{t.home.partnership.jaiyeolaTag}</p>
          </div>

          <div className="glass-card reveal reveal-delay-2">
            <div className="w-12 h-12 rounded-full bg-[rgba(212,168,83,0.1)] flex items-center justify-center mb-4">
              <ServiceIcon.Star size={20} />
            </div>
            <h3 className="font-h3 text-white mb-3">{t.home.partnership.falaTitle}</h3>
            <p className="font-body text-[#C8C8C8] mb-4">
              {t.home.partnership.falaDesc}
            </p>
            <p className="font-micro text-[#D4A853]">{t.home.partnership.falaTag}</p>
          </div>
        </div>

        <div className="mt-16 text-center reveal">
          <div className="divider-dark mb-12" />
          <h3 className="font-h2 text-white max-w-[800px] mx-auto" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>
            {t.home.partnership.togetherText}
          </h3>
        </div>
      </section>

      {/* ─── ABOUT PREVIEW ─── */}
      <section className="section-padding bg-[#FAFAF9]">
        <div className="content-max grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <p className="section-label">{t.home.aboutPreview.sectionLabel}</p>
            <h2 className="font-h1 text-[#09090A] mb-6">{t.home.aboutPreview.title}</h2>
            <p className="font-body text-[rgba(9,9,10,0.7)] mb-6">
              {t.home.aboutPreview.description.split('. ')[0]}.
            </p>
            <p className="font-body text-[rgba(9,9,10,0.7)] mb-8">
              {t.home.aboutPreview.description.split('. ').slice(1).join('. ')}.
            </p>
            <div className="space-y-4 mb-8">
              <div>
                <h3 className="font-h3 text-[#D4A853] mb-2">{t.home.aboutPreview.visionTitle}</h3>
                <p className="font-body text-[rgba(9,9,10,0.7)]">
                  {t.home.aboutPreview.visionDesc}
                </p>
              </div>
              <div>
                <h3 className="font-h3 text-[#D4A853] mb-2">{t.home.aboutPreview.missionTitle}</h3>
                <p className="font-body text-[rgba(9,9,10,0.7)]">
                  {t.home.aboutPreview.missionDesc}
                </p>
              </div>
            </div>
            <Link to="/about" className="btn-primary" style={{ background: '#D4A853', color: '#09090A' }}>{t.home.aboutPreview.cta}</Link>
          </div>
          <div className="reveal reveal-delay-2">
            <img
              src="./assets/about-production.png"
              alt="Film production on set at Jaiyeola Movie Entertainment"
              className="w-full rounded-xl object-cover"
              style={{ aspectRatio: '4/5', boxShadow: '0 20px 60px rgba(0,0,0,0.4)' }}
            />
          </div>
        </div>
      </section>

      {/* ─── SERVICES OVERVIEW ─── */}
      <section id="services" className="section-padding content-max">
        <div className="reveal">
          <p className="section-label">{t.home.servicesOverview.sectionLabel}</p>
          <h2 className="font-h1 text-white mb-16">{t.home.servicesOverview.title}</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.home.servicesOverview.services.map((s, i) => (
            <div key={s.title} className={`glass-card reveal reveal-delay-${Math.min(i, 5)}`}>
              <div className="w-12 h-12 rounded-full bg-[rgba(212,168,83,0.1)] flex items-center justify-center mb-5">
                {getServiceIcon(s.icon)}
              </div>
              <h3 className="font-h3 text-white mb-3">{s.title}</h3>
              <p className="font-body text-[#C8C8C8]">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 reveal">
          <Link to="/services" className="btn-primary">{t.home.servicesOverview.cta}</Link>
        </div>
      </section>

      {/* ─── ACADEMY PREVIEW ─── */}
      <section
        className="section-padding"
        style={{ background: 'linear-gradient(to bottom, #09090A 0%, rgba(212,168,83,0.05) 100%)' }}
      >
        <div className="content-max grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <p className="section-label">{t.home.academyPreview.sectionLabel}</p>
            <h2 className="font-h1 text-white mb-6">{t.home.academyPreview.title}</h2>
            <p className="font-body text-[#C8C8C8] mb-6">
              {t.home.academyPreview.description.split('. ')[0]}.
            </p>
            <p className="font-body text-[#C8C8C8] mb-8">
              {t.home.academyPreview.description.split('. ').slice(1).join('. ')}.
            </p>

            <h3 className="font-h3 text-[#D4A853] mb-4">{t.home.academyPreview.whatWeTeachTitle}</h3>
            <div className="space-y-4 mb-8">
              {t.home.academyPreview.whatWeTeach.map((item, i) => (
                <div key={i}>
                  <p className="font-body text-white font-medium">{item.title}</p>
                  <p className="font-body text-[#C8C8C8]">{item.desc}</p>
                </div>
              ))}
            </div>

            <h3 className="font-h3 text-[#D4A853] mb-4">{t.home.academyPreview.whyTrainWithUsTitle}</h3>
            <div className="space-y-4 mb-8">
              {t.home.academyPreview.whyTrainWithUs.map((item, i) => (
                <div key={i}>
                  <p className="font-body text-white font-medium">{item.title}</p>
                  <p className="font-body text-[#C8C8C8]">{item.desc}</p>
                </div>
              ))}
            </div>

            <Link to="/academy#curriculum" className="btn-primary inline-block">{t.home.academyPreview.cta1}</Link>
            <Link to="/academy#register" className="btn-ghost inline-block ml-4">{t.home.academyPreview.cta2}</Link>
            <p className="font-small text-[rgba(255,255,255,0.5)] mt-4">
              {t.home.academyPreview.tag}
            </p>
          </div>

          <div className="reveal reveal-delay-2">
            <img
              src="./assets/academy-preview.jpg"
              alt="Jaiyeola Acting Academy training session"
              className="w-full rounded-xl object-cover"
              style={{ aspectRatio: '4/5', boxShadow: '0 0 40px rgba(212,168,83,0.15)' }}
            />
          </div>
        </div>
      </section>

      {/* ─── HIGHLIGHTS ─── */}
      <section className="section-padding">
        <div className="content-max max-w-[1000px]">
          <div className="reveal text-center">
            <p className="section-label justify-center">{t.home.highlights.sectionLabel}</p>
            <h2 className="font-h1 text-white mb-16">{t.home.highlights.title}</h2>
          </div>

          <div
            className="relative overflow-hidden reveal"
            onMouseEnter={pauseCarousel}
            onMouseLeave={resumeCarousel}
          >
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${currentHighlight * 100}%)`,
                transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
              }}
            >
              {t.home.highlights.items.map((item, i) => (
                <div key={i} className="w-full flex-shrink-0 px-4">
                  <div className="glass-card text-center mx-8 md:mx-12">
                    <p
                      className="text-[#D4A853] leading-none mb-4"
                      style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '4rem' }}
                    >
                      &ldquo;
                    </p>
                    <p className="font-body text-white italic mb-6">{item.quote}</p>
                    <p className="font-small text-white font-medium mb-1">{item.author}</p>
                    <p className="font-micro text-[#C8C8C8] mb-4">{item.role}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={goPrev}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[rgba(255,255,255,0.1)] items-center justify-center text-white hover:bg-[rgba(255,255,255,0.2)] transition-colors z-10"
              aria-label="Previous highlight"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={goNext}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[rgba(255,255,255,0.1)] items-center justify-center text-white hover:bg-[rgba(255,255,255,0.2)] transition-colors z-10"
              aria-label="Next highlight"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            <div className="flex justify-center gap-2 mt-8">
              {t.home.highlights.items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === currentHighlight ? 'w-2.5 h-2.5 bg-[#D4A853]' : 'w-2 h-2 bg-[rgba(255,255,255,0.3)] hover:bg-[rgba(255,255,255,0.5)]'
                  }`}
                  aria-label={`Go to highlight ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="relative overflow-hidden" style={{ padding: 'clamp(100px, 15vh, 200px) 0' }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, rgba(212,168,83,0.08) 0%, transparent 70%)' }}
        />
        <div className="relative z-10 max-w-[800px] mx-auto px-6 text-center reveal">
          <h2 className="font-h1 text-white mb-6">{t.home.finalCta.title}</h2>
          <p className="font-body text-[#C8C8C8] max-w-[560px] mx-auto mb-10">
            {t.home.finalCta.description}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary">{t.home.finalCta.cta1}</Link>
            <Link to="/academy#register" className="btn-ghost">{t.home.finalCta.cta2}</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
