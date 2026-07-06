import { useRef, useState } from 'react'
import { UIIcon } from '../components/Icons'
import PageHero from '../components/PageHero'
import { submitToEmail } from '../lib/submitForm'
import { useLanguage } from '../contexts/LanguageContext'

function triggerConfetti(container: HTMLElement) {
  for (let i = 0; i < 8; i++) {
    const dot = document.createElement('div')
    dot.className = 'confetti-dot'
    dot.style.left = `${40 + Math.random() * 20}%`
    dot.style.top = '50%'
    dot.style.setProperty('--drift', `${(Math.random() - 0.5) * 100}px`)
    dot.style.animation = `confetti-fall 1.5s ease-out ${i * 0.1}s forwards`
    container.appendChild(dot)
    setTimeout(() => dot.remove(), 2000)
  }
}

const getIcon = (icon: string) => {
  switch (icon) {
    case 'phone': return <UIIcon.Phone />
    case 'email': return <UIIcon.Email />
    case 'map': return <UIIcon.MapPin />
    case 'clock': return <UIIcon.Clock />
    default: return <UIIcon.Phone />
  }
}

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const successRef = useRef<HTMLDivElement>(null)
  const { t } = useLanguage()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormState('submitting')

    try {
      await submitToEmail(new FormData(e.currentTarget))
      setFormState('success')
      setTimeout(() => {
        if (successRef.current) triggerConfetti(successRef.current)
      }, 100)
    } catch {
      setFormState('error')
    }
  }

  return (
    <div>
      <PageHero
        label={t.contact.pageHero.label}
        title={t.contact.pageHero.title}
        subtitle={t.contact.pageHero.subtitle}
        backgroundImage="./assets/monsuru-on-set.png"
      />

      <section className="section-padding bg-[#09090A]">
        <div className="content-max">
          <div className="reveal">
            <p className="section-label">{t.contact.getInTouch.sectionLabel}</p>
            <p className="font-body text-[#C8C8C8] max-w-[600px] mt-4 mb-8">
              {t.contact.getInTouch.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            {t.contact.getInTouch.cards.map((card, i) => (
              <div key={card.label} className={`glass-card text-center reveal reveal-delay-${Math.min(i, 5)}`}>
                <div className="flex justify-center mb-4">{getIcon(card.icon)}</div>
                <p className="font-micro text-[#D4A853] mb-2">{card.label}</p>
                <p className="font-body text-white mb-1">{card.primary}</p>
                {card.tertiary && <p className="font-body text-white mb-1">{card.tertiary}</p>}
                <p className="font-small text-[#C8C8C8]">{card.secondary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAF9]" style={{ padding: 'clamp(80px, 12vh, 140px) 0' }}>
        <div className="max-w-[700px] mx-auto px-6">
          <div className="reveal text-center">
            <h2 className="font-h1 text-[#09090A] mb-4">{t.contact.form.title}</h2>
            <p className="font-body text-[rgba(9,9,10,0.7)] mb-12">
              {t.contact.form.description}
            </p>
          </div>

          {formState === 'success' ? (
            <div ref={successRef} className="relative">
              <div className="form-success">
                <div className="success-icon">&#10003;</div>
                <p>{t.contact.form.successMessage}</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="reveal space-y-6">
              <input type="hidden" name="_subject" value="Jaiyeola Contact Form Submission" />
              <input type="hidden" name="formType" value="contact" />
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-small text-[#09090A] font-medium mb-1.5">Full Name *</label>
                  <input type="text" name="name" required placeholder="Your full name" className="form-input-light" />
                </div>
                <div>
                  <label className="block font-small text-[#09090A] font-medium mb-1.5">Email Address *</label>
                  <input type="email" name="email" required placeholder="your@email.com" className="form-input-light" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-small text-[#09090A] font-medium mb-1.5">Phone Number</label>
                  <input type="tel" name="phone" placeholder="+234-8026245050" className="form-input-light" />
                </div>
                <div>
                  <label className="block font-small text-[#09090A] font-medium mb-1.5">Subject</label>
                  <select name="subject" className="form-input-light">
                    <option value="">Select subject</option>
                    <option value="film-production">Film Production</option>
                    <option value="academy">Academy Registration</option>
                    <option value="consultancy">Film Consultancy</option>
                    <option value="partnership">Business Partnership</option>
                    <option value="talent">Talent & Casting</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block font-small text-[#09090A] font-medium mb-1.5">Message *</label>
                <textarea name="message" rows={5} required placeholder="Tell us how we can help you..." className="form-input-light resize-none" />
              </div>
              <div className="text-center">
                <button type="submit" disabled={formState === 'submitting'} className="btn-primary" style={{ background: '#D4A853', color: '#09090A' }}>
                  {formState === 'submitting' ? t.contact.form.submittingText : t.contact.form.submitText}
                </button>
              </div>
              {formState === 'error' && (
                <p className="form-error">
                  {t.contact.form.errorMessage}
                </p>
              )}
            </form>
          )}
        </div>
      </section>

      <section className="reveal">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.5!2d3.32!3d6.62!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzcnMTIuMCJOIDPCsDE5JzEyLjAiRQ!5e0!3m2!1sen!2sng!4v1"
          width="100%"
          height="400"
          style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Jaiyeola Movie Entertainment Office Location - Ile-Epo Bus-Stop, Lagos"
        />
      </section>
    </div>
  )
}
