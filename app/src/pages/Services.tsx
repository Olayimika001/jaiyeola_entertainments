import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { useLanguage } from '../contexts/LanguageContext'

export default function Services() {
  const { t } = useLanguage()

  return (
    <div>
      <PageHero
        label={t.services.pageHero.label}
        title={t.services.pageHero.title}
        subtitle={t.services.pageHero.subtitle}
        backgroundImage="./assets/service-movie.jpg"
      />

      {t.services.list.map((service, i) => {
        const isDark = i % 2 === 0
        const isReversed = i % 2 !== 0

        // Find the corresponding image for each service
        const images = [
          './assets/service-movie.jpg',
          './assets/service-media.jpg',
          './assets/academy-preview.jpg',
          './assets/service-talent.jpg',
          './assets/founder-fala.png',
          './assets/service-multimedia.jpg'
        ]
        const image = images[i] || './assets/service-movie.jpg'

        return (
          <section
            key={service.number}
            className={`section-padding ${isDark ? 'bg-[#09090A]' : 'bg-[#FAFAF9]'}`}
          >
            <div className="content-max">
              <div className={`grid lg:grid-cols-2 gap-16 items-center ${isReversed ? 'lg:[direction:rtl]' : ''}`}>
                <div className={`${isReversed ? 'lg:[direction:ltr]' : ''} reveal`}>
                  <p
                    className="font-light text-[#D4A853] mb-4"
                    style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(4rem, 6vw, 6rem)' }}
                  >
                    {service.number}
                  </p>
                  <h2 className={`font-h1 mb-6 ${isDark ? 'text-white' : 'text-[#09090A]'}`}>
                    {service.title}
                  </h2>
                  <p className={`font-body mb-8 ${isDark ? 'text-[#C8C8C8]' : 'text-[rgba(9,9,10,0.7)]'}`}>
                    {service.description}
                  </p>

                  <h3 className="font-h3 text-[#D4A853] mb-4">{service.benefitsTitle}</h3>
                  <div className="space-y-2.5 mb-8">
                    {service.benefits.map((benefit) => (
                      <div
                        key={benefit}
                        className={`flex items-start gap-2 font-body ${isDark ? 'text-[#C8C8C8]' : 'text-[rgba(9,9,10,0.7)]'}`}
                      >
                        <span className="text-[#D4A853] text-xs mt-1.5 flex-shrink-0">&#9670;</span>
                        {benefit}
                      </div>
                    ))}
                  </div>

                  <h3 className="font-h3 text-[#D4A853] mb-4">{service.processTitle}</h3>
                  <div className="flex flex-wrap items-center gap-2 mb-8">
                    {service.process.map((step, j) => (
                      <div key={step} className="flex items-center gap-2">
                        <div className="text-center">
                          <p className="font-micro text-[#D4A853]">{String(j + 1).padStart(2, '0')}</p>
                          <p className={`font-small ${isDark ? 'text-white' : 'text-[#09090A]'}`}>{step}</p>
                        </div>
                        {j < service.process.length - 1 && (
                          <div className="w-6 h-px bg-[#D4A853] mx-1 opacity-50" />
                        )}
                      </div>
                    ))}
                  </div>

                  <Link to="/contact" className="btn-primary">{t.services.getStarted}</Link>
                </div>

                <div className={`${isReversed ? 'lg:[direction:ltr]' : ''} reveal reveal-delay-1`}>
                  <img
                    src={image}
                    alt={service.title}
                    className="w-full rounded-xl object-cover"
                    style={{ aspectRatio: '16/10', boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}
                  />
                </div>
              </div>
            </div>
          </section>
        )
      })}
    </div>
  )
}
