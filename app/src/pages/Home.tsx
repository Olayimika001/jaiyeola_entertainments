import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ServiceIcon } from '../components/Icons'

const services = [
  { icon: <ServiceIcon.Movie />, title: 'Film & Movie Production', desc: 'From captivating scripts to final post-production, we produce compelling movies, documentaries, and cinematic experiences that connect cultures and inspire generations.' },
  { icon: <ServiceIcon.Media />, title: 'Digital Content Production', desc: 'High-quality video and audio production for television, streaming platforms, and digital media — blending creative vision with cutting-edge production techniques.' },
  { icon: <ServiceIcon.Talent />, title: 'Talent Discovery & Development', desc: 'We actively invest in the creative ecosystem by discovering, nurturing, and launching fresh talent into the global spotlight through mentorship and on-set opportunities.' },
  { icon: <ServiceIcon.Multimedia />, title: 'Artist Development Academy', desc: 'Our Acting Academy transforms raw passion into professional screen excellence through hands-on training in acting, voice work, audition mastery, and the business of acting.' },
  { icon: <ServiceIcon.Promotions />, title: 'Film Consultancy', desc: 'Decades of industry expertise in directing, producing, and advisory services — helping filmmakers and producers achieve their creative and commercial goals.' },
  { icon: <ServiceIcon.Events />, title: 'Post-Production & Distribution', desc: 'Complete post-production services and distribution support to deliver world-class entertainment that reaches audiences at home and abroad.' },
]

const highlights = [
  { quote: 'Whether through the lens of a camera or the silhouette of a garment, my goal is to capture and express authentic human experiences.', author: 'Tawakalitu Aina Adeola Stephen', role: 'CEO, Jaiyeola Movie Entertainment Productions' },
  { quote: 'He is one of the pioneer advocates in the advent of home videos and a key player in the birth of the film industry in Nigeria.', author: 'Industry Recognition', role: 'Monsuru Obadina (FALA)' },
  { quote: 'Many star actors, directors, and producers were trained under his tutelage. His films have been a pacesetter in the Yoruba film industry.', author: 'Legacy of Mentorship', role: 'Fala Films Multimedia' },
  { quote: 'We are aiming for a self-orientated and goal-getting movie environment that will ensure and maintain a global standard in the movie industry.', author: 'Our Future', role: 'Jaiyeola & Fala Films' },
]

export default function Home() {
  const [heroLoaded, setHeroLoaded] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [currentHighlight, setCurrentHighlight] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => setHeroLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentHighlight((prev) => (prev + 1) % highlights.length)
    }, 7000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  const pauseCarousel = () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  const resumeCarousel = () => {
    intervalRef.current = setInterval(() => {
      setCurrentHighlight((prev) => (prev + 1) % highlights.length)
    }, 7000)
  }

  const goTo = (index: number) => setCurrentHighlight(index)
  const goNext = () => setCurrentHighlight((prev) => (prev + 1) % highlights.length)
  const goPrev = () => setCurrentHighlight((prev) => (prev - 1 + highlights.length) % highlights.length)

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
          {/* <div
            className={`mb-10 transition-all duration-800 ${
              heroLoaded && videoLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'
            }`}
            style={{ transitionDelay: '0.3s', transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)' }}
          >
            <img
              src="./assets/logo.png"
              alt="Jaiyeola Movie Entertainment Productions"
              className="h-24 sm:h-28 md:h-32 w-auto object-contain"
            />
          </div> */}
          {/* <p
            className={`section-label transition-all duration-800 ${
              heroLoaded && videoLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'
            }`}
            style={{ transitionDelay: '0.45s', transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)' }}
          >
            JAIYEOLA MOVIE ENTERTAINMENT & FALA FILMS MULTIMEDIA
          </p> */}
          <h1
            className={`font-display text-white max-w-[800px] transition-all duration-1000 ${
              heroLoaded && videoLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[40px]'
            }`}
            style={{ transitionDelay: '0.6s', textShadow: '0 2px 40px rgba(0,0,0,0.5)', transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)' }}
          >
            Bringing Stories to Life.<br />Shaping the Stars of Tomorrow.
          </h1>
          <p
            className={`font-body text-[#C8C8C8] max-w-[640px] mt-8 transition-all duration-800 ${
              heroLoaded && videoLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'
            }`}
            style={{ transitionDelay: '0.9s', transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)' }}
          >
            Welcome to Jaiyeola Movie Entertainment Productions In Conjunction with FALA FILMS MULTIMEDIA. We are a dynamic powerhouse dedicated to producing high-quality, culturally rich, and unforgettable cinematic experiences. From captivating scripts to final post-production, we create magic on screen while building the future leaders of the film industry.
          </p>
          <div
            className={`flex flex-wrap gap-4 mt-12 transition-all duration-600 ${
              heroLoaded && videoLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[15px]'
            }`}
            style={{ transitionDelay: '1.2s', transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)' }}
          >
            <a href="#services" className="btn-primary">Explore Our World</a>
            <Link to="/academy" className="btn-ghost">Become an Artist</Link>
          </div>
        </div>
      </section>

      {/* ─── PARTNERSHIP ─── */}
      <section className="section-padding content-max">
        <div className="reveal">
          <p className="section-label">OUR PARTNERSHIP</p>
          <h2 className="font-h1 text-white mb-6">Two Houses, One Vision</h2>
          <p className="font-body text-[#C8C8C8] max-w-[700px] mb-16">
            Jaiyeola Movie Entertainment Productions and Fala Films Multimedia have joined forces to create a full-service film powerhouse — combining visionary storytelling with decades of industry mastery to nurture the next generation of cinematic talent.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card reveal reveal-delay-1">
            <img
              src="./assets/logo.png"
              alt="Jaiyeola Movie Entertainment Productions logo"
              className="h-20 w-auto object-contain mb-4"
            />
            <h3 className="font-h3 text-white mb-3">Jaiyeola Movie Entertainment Productions</h3>
            <p className="font-body text-[#C8C8C8] mb-4">
              An independent media and film production company founded on the belief that storytelling has the power to change perspectives, connect cultures, and inspire generations. We produce compelling movies, documentaries, and digital content while investing in fresh talent.
            </p>
            <p className="font-micro text-[#D4A853]">Creating Unforgettable Moments</p>
          </div>

          <div className="glass-card reveal reveal-delay-2">
            <div className="w-12 h-12 rounded-full bg-[rgba(212,168,83,0.1)] flex items-center justify-center mb-4">
              <ServiceIcon.Star size={20} />
            </div>
            <h3 className="font-h3 text-white mb-3">Fala Films Multimedia</h3>
            <p className="font-body text-[#C8C8C8] mb-4">
              A veteran institution in the Yoruba movie industry with over 48 years of experience. From the Igi Nla Theatre Group to Fala Films Multimedia, Monsuru Obadina (FALA) has been a pioneer, director, producer, and mentor to generations of Nigerian filmmakers.
            </p>
            <p className="font-micro text-[#D4A853]">Est. Igi Nla Theatre Group · Fala Films Multimedia</p>
          </div>
        </div>

        <div className="mt-16 text-center reveal">
          <div className="divider-dark mb-12" />
          <h3 className="font-h2 text-white max-w-[800px] mx-auto" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>
            Together, we are redefining Nigerian cinema — creating unforgettable experiences while building the next generation of industry leaders.
          </h3>
        </div>
      </section>

      {/* ─── ABOUT PREVIEW ─── */}
      <section className="section-padding bg-[#FAFAF9]">
        <div className="content-max grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <p className="section-label">ABOUT OUR COMPANY</p>
            <h2 className="font-h1 text-[#09090A] mb-6">About Our Company</h2>
            <p className="font-body text-[rgba(9,9,10,0.7)] mb-6">
              Jaiyeola Movie Entertainment Productions is an independent media and film production company. Founded on the belief that storytelling has the power to change perspectives, connect cultures, and inspire generations, we produce compelling movies, documentaries, and digital content.
            </p>
            <p className="font-body text-[rgba(9,9,10,0.7)] mb-8">
              We blend creative vision with cutting-edge production techniques to deliver world-class entertainment. But we don&apos;t just stop at making movies—we believe in opening doors. We actively invest in the creative ecosystem by discovering, nurturing, and launching fresh talent into the global spotlight.
            </p>
            <div className="space-y-4 mb-8">
              <div>
                <h3 className="font-h3 text-[#D4A853] mb-2">Our Vision</h3>
                <p className="font-body text-[rgba(9,9,10,0.7)]">
                  To be a leading global voice in innovative storytelling and the premier incubator for cinematic talent.
                </p>
              </div>
              <div>
                <h3 className="font-h3 text-[#D4A853] mb-2">Our Mission</h3>
                <p className="font-body text-[rgba(9,9,10,0.7)]">
                  To produce thought-provoking content that entertains and inspires, while providing aspiring artists with the skills, mentorship, and platform they need to thrive.
                </p>
              </div>
            </div>
            <Link to="/about" className="btn-primary" style={{ background: '#D4A853', color: '#09090A' }}>Learn More About Us</Link>
          </div>
          <div className="reveal reveal-delay-2">
            <img
              src="./assets/about-production.png"
              alt="Film production on set at Jaiyeola Movie Entertainment"
              className="w-full rounded-xl object-cover"
              style={{ aspectRatio: '4/5', boxShadow: '0 20px 60px rgba(0,0,0,0.2)' }}
            />
          </div>
        </div>
      </section>

      {/* ─── SERVICES OVERVIEW ─── */}
      <section id="services" className="section-padding content-max">
        <div className="reveal">
          <p className="section-label">WHAT WE DO</p>
          <h2 className="font-h1 text-white mb-16">World-Class Entertainment Services</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={s.title} className={`glass-card reveal reveal-delay-${Math.min(i, 5)}`}>
              <div className="w-12 h-12 rounded-full bg-[rgba(212,168,83,0.1)] flex items-center justify-center mb-5">
                {s.icon}
              </div>
              <h3 className="font-h3 text-white mb-3">{s.title}</h3>
              <p className="font-body text-[#C8C8C8]">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 reveal">
          <Link to="/services" className="btn-primary">View All Services</Link>
        </div>
      </section>

      {/* ─── ACADEMY PREVIEW ─── */}
      <section
        className="section-padding"
        style={{ background: 'linear-gradient(to bottom, #09090A 0%, rgba(212,168,83,0.05) 100%)' }}
      >
        <div className="content-max grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <p className="section-label">THE ACADEMY</p>
            <h2 className="font-h1 text-white mb-6">Become an Artist</h2>
            <p className="font-body text-[#C8C8C8] mb-6">
              Have you always dreamed of seeing yourself on the big screen? Your journey starts here.
            </p>
            <p className="font-body text-[#C8C8C8] mb-8">
              At Jaiyeola Productions, we don&apos;t just look for stars—we build them. Our Artist Development &amp; Acting Academy is designed for passionate individuals who want to master the craft of acting, voice acting, and screen presence. Whether you are a complete beginner or looking to sharpen your skills, our hands-on curriculum bridges the gap between raw talent and professional excellence.
            </p>

            <h3 className="font-h3 text-[#D4A853] mb-4">What We Teach</h3>
            <div className="space-y-4 mb-8">
              <div>
                <p className="font-body text-white font-medium">Screen Acting Techniques</p>
                <p className="font-body text-[#C8C8C8]">Learn how to translate emotions naturally from the script to the camera.</p>
              </div>
              <div>
                <p className="font-body text-white font-medium">Character Development</p>
                <p className="font-body text-[#C8C8C8]">Master the psychology of a character, understanding their motivations, voice, and physical traits.</p>
              </div>
              <div>
                <p className="font-body text-white font-medium">Audition Mastery</p>
                <p className="font-body text-[#C8C8C8]">Get insider secrets on how to walk into an audition room with confidence, nail cold readings, and land the role.</p>
              </div>
              <div>
                <p className="font-body text-white font-medium">The Business of Acting</p>
                <p className="font-body text-[#C8C8C8]">Understand how the industry works, including branding yourself, working with directors, and managing contracts.</p>
              </div>
            </div>

            <h3 className="font-h3 text-[#D4A853] mb-4">Why Train With Us?</h3>
            <div className="space-y-4 mb-8">
              <div>
                <p className="font-body text-white font-medium">Industry-Active Mentors</p>
                <p className="font-body text-[#C8C8C8]">Learn directly from working directors, seasoned actors, and producers who know exactly what the industry is looking for.</p>
              </div>
              <div>
                <p className="font-body text-white font-medium">On-Set Experience</p>
                <p className="font-body text-[#C8C8C8]">Our best-performing students get direct opportunities to audition for and star in upcoming Jaiyeola Movie Entertainment feature films and projects.</p>
              </div>
              <div>
                <p className="font-body text-white font-medium">Professional Showreel</p>
                <p className="font-body text-[#C8C8C8]">Graduate with a high-quality video showreel of your performances to show future casting directors.</p>
              </div>
            </div>

            <Link to="/academy#curriculum" className="btn-primary inline-block">Download Course Outline</Link>
            <Link to="/academy#register" className="btn-ghost inline-block ml-4">Register &amp; Audition</Link>
            <p className="font-small text-[rgba(255,255,255,0.5)] mt-4">
              JAIYEOLA ACTING ACADEMY IN CONJUNCTION WITH FALA FILMS MULTIMEDIA
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
            <p className="section-label justify-center">OUR LEGACY</p>
            <h2 className="font-h1 text-white mb-16">Voices That Define Us</h2>
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
              {highlights.map((t, i) => (
                <div key={i} className="w-full flex-shrink-0 px-4">
                  <div className="glass-card text-center mx-8 md:mx-12">
                    <p
                      className="text-[#D4A853] leading-none mb-4"
                      style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '4rem' }}
                    >
                      &ldquo;
                    </p>
                    <p className="font-body text-white italic mb-6">{t.quote}</p>
                    <p className="font-small text-white font-medium mb-1">{t.author}</p>
                    <p className="font-micro text-[#C8C8C8] mb-4">{t.role}</p>
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
              {highlights.map((_, i) => (
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
          <h2 className="font-h1 text-white mb-6">Ready to Create Something Extraordinary?</h2>
          <p className="font-body text-[#C8C8C8] max-w-[560px] mx-auto mb-10">
            Whether you need world-class film production or you are ready to launch your acting career, Jaiyeola Movie Entertainment and Fala Films Multimedia are here to make it happen.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary">Work With Us</Link>
            <Link to="/academy#register" className="btn-ghost">Join the Academy</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
