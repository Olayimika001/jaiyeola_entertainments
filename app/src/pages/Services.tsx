import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

interface ServiceData {
  number: string
  title: string
  description: string
  benefits: string[]
  process: string[]
  image: string
  imageAlt: string
}

const services: ServiceData[] = [
  {
    number: '01',
    title: 'Film & Movie Production',
    description: 'From captivating scripts to final post-production, Jaiyeola Movie Entertainment Productions delivers high-quality, culturally rich cinematic experiences. We produce compelling feature films, short films, and series — including the acclaimed feature film "CEO" — managing every phase from development and budgeting to casting and principal photography.',
    benefits: [
      'End-to-end production management',
      'Script development and creative writing',
      'Professional casting and crew coordination',
      'Principal photography and direction',
      'Post-production and final delivery',
    ],
    process: ['Concept', 'Development', 'Production', 'Post-Production'],
    image: './assets/service-movie.jpg',
    imageAlt: 'Professional film production on set',
  },
  {
    number: '02',
    title: 'Documentaries & Digital Content',
    description: 'We produce compelling documentaries and digital content that change perspectives, connect cultures, and inspire generations. Our team blends creative vision with cutting-edge production techniques to deliver world-class entertainment across television and digital platforms.',
    benefits: [
      'Documentary film production',
      'Television and streaming content',
      'Digital media campaigns',
      'Cultural and educational storytelling',
      'Multi-platform distribution support',
    ],
    process: ['Research', 'Scripting', 'Filming', 'Editing', 'Distribution'],
    image: './assets/service-media.jpg',
    imageAlt: 'Media production studio with professional equipment',
  },
  {
    number: '03',
    title: 'Artist Development & Academy',
    description: 'Through the Jaiyeola Acting Academy in conjunction with Fala Films Multimedia, we discover, nurture, and launch fresh talent into the global spotlight. Our hands-on curriculum covers screen acting, character development, audition mastery, and the business of acting.',
    benefits: [
      'Industry-active mentors and directors',
      'On-set experience in Jaiyeola productions',
      'Professional showreel upon graduation',
      'Audition preparation and cold reading',
      'Career guidance and industry networking',
    ],
    process: ['Register', 'Audition', 'Train', 'Perform', 'Launch'],
    image: './assets/academy-preview.jpg',
    imageAlt: 'Artist development and acting academy training',
  },
  {
    number: '04',
    title: 'Talent Discovery & Management',
    description: 'We actively invest in the creative ecosystem by identifying and developing exceptional talent. Our best academy performers receive direct opportunities to audition for and star in upcoming Jaiyeola Movie Entertainment feature films and projects.',
    benefits: [
      'Talent scouting and discovery',
      'Personalized career development',
      'Casting for Jaiyeola productions',
      'Mentorship from industry veterans',
      'Platform for emerging artists',
    ],
    process: ['Discovery', 'Assessment', 'Development', 'Placement'],
    image: './assets/service-talent.jpg',
    imageAlt: 'Talent development and casting session',
  },
  {
    number: '05',
    title: 'Film Consultancy & Advisory',
    description: 'With over 48 years in the industry, Fala Films Multimedia provides expert consultancy services to filmmakers and movie producers. Monsuru Obadina (FALA) offers advisory roles in directing, producing, and ensuring that projects achieve their creative and commercial goals.',
    benefits: [
      'Directing and production consultancy',
      'Script and story development advice',
      'Industry navigation and strategy',
      'Marketer and distribution guidance',
      'Veteran mentorship for filmmakers',
    ],
    process: ['Consultation', 'Assessment', 'Guidance', 'Implementation'],
    image: './assets/founder-fala.png',
    imageAlt: 'Monsuru Obadina FALA providing film consultancy',
  },
  {
    number: '06',
    title: 'Post-Production & Distribution',
    description: 'Complete post-production services to deliver polished, world-class entertainment. Our films reach wide market coverage at home and abroad through vibrant and notable industry marketers — maintaining the global standards we strive for.',
    benefits: [
      'Editing and color grading',
      'Sound design and mixing',
      'Visual effects and finishing',
      'Domestic and international distribution',
      'Marketing and promotional support',
    ],
    process: ['Edit', 'Grade', 'Mix', 'Deliver', 'Distribute'],
    image: './assets/service-multimedia.jpg',
    imageAlt: 'Post-production and multimedia services',
  },
]

export default function Services() {
  return (
    <div>
      <PageHero
        label="OUR SERVICES"
        title="What We Offer"
        subtitle="From captivating scripts to final post-production — creating magic on screen"
        backgroundImage="./assets/service-movie.jpg"
      />

      {services.map((service, i) => {
        const isDark = i % 2 === 0
        const isReversed = i % 2 !== 0

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

                  <h3 className="font-h3 text-[#D4A853] mb-4">What You Get</h3>
                  <div className="space-y-2.5 mb-8">
                    {service.benefits.map((b) => (
                      <div
                        key={b}
                        className={`flex items-start gap-2 font-body ${
                          isDark ? 'text-[#C8C8C8]' : 'text-[rgba(9,9,10,0.7)]'
                        }`}
                      >
                        <span className="text-[#D4A853] text-xs mt-1.5 flex-shrink-0">&#9670;</span>
                        {b}
                      </div>
                    ))}
                  </div>

                  <h3 className="font-h3 text-[#D4A853] mb-4">Our Process</h3>
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

                  <Link to="/contact" className="btn-primary">Get Started</Link>
                </div>

                <div className={`${isReversed ? 'lg:[direction:ltr]' : ''} reveal reveal-delay-1`}>
                  <img
                    src={service.image}
                    alt={service.imageAlt}
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
