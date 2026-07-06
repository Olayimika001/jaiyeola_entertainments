import type { ReactNode } from 'react'
import PageHero from '../components/PageHero'
import { filmsProducedByFala, filmsDirectedByFala, monsuruJourney } from '../data/about-data'
import { useLanguage } from '../contexts/LanguageContext'

function ProfileBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mb-8">
      <h3 className="font-h3 text-[#D4A853] mb-3">{title}</h3>
      <div className="font-body text-[#C8C8C8] space-y-4">{children}</div>
    </div>
  )
}

function ProfileBlockLight({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mb-8">
      <h3 className="font-h3 text-[#D4A853] mb-3">{title}</h3>
      <div className="font-body text-[rgba(9,9,10,0.7)] space-y-4">{children}</div>
    </div>
  )
}

export default function About() {
  const { t } = useLanguage()

  return (
    <div>
      <PageHero
        label={t.about.pageHero.label}
        title={t.about.pageHero.title}
        subtitle={t.about.pageHero.subtitle}
        backgroundImage="./assets/founder-tawakalitu.png"
      />

      {/* ─── COMPANY ─── */}
      <section className="section-padding content-max">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="section-label reveal">{t.about.company.sectionLabel}</p>
            <h2 className="font-h1 text-white mb-8 reveal">{t.about.company.title}</h2>
            <div className="space-y-6 mb-10">
              <p className="reveal font-body text-[#C8C8C8]">
                {t.about.company.description1}
              </p>
              <p className="reveal font-body text-[#C8C8C8]">
                {t.about.company.description2}
              </p>
            </div>
            <ProfileBlock title={t.about.company.visionTitle}>
              <p>{t.about.company.visionDesc}</p>
            </ProfileBlock>
            <ProfileBlock title={t.about.company.missionTitle}>
              <p>{t.about.company.missionDesc}</p>
            </ProfileBlock>
          </div>
          <div className="reveal">
            <img
              src="./assets/about-production.png"
              alt="Film production at Jaiyeola Movie Entertainment"
              className="w-full rounded-xl object-cover"
              style={{ aspectRatio: '3/4', boxShadow: '0 20px 60px rgba(0,0,0,0.4)' }}
            />
          </div>
        </div>
      </section>

      {/* ─── TAWAKALITU FULL PROFILE ─── */}
      <section className="section-padding bg-[#FAFAF9]">
        <div className="content-max">
          <p className="section-label reveal">{t.about.tawakalitu.sectionLabel}</p>
          <div className="grid lg:grid-cols-[280px_1fr] gap-12 items-start reveal">
            <img
              src="./assets/founder-tawakalitu.png"
              alt="Tawakalitu Aina Adeola Stephen"
              className="w-full rounded-xl object-cover sticky top-28"
              style={{ aspectRatio: '3/4' }}
            />
            <div>
              <h2 className="font-h1 text-[#09090A] mb-2">{t.about.tawakalitu.name}</h2>
              <p className="font-micro text-[#D4A853] mb-6">{t.about.tawakalitu.role}</p>
              <p className="font-body text-[rgba(9,9,10,0.7)] mb-8">
                {t.about.tawakalitu.bio}
              </p>

              <ProfileBlockLight title={t.about.tawakalitu.coreExpertise}>
                <p><strong>{t.about.tawakalitu.expertise1.split(':')[0]}:</strong> {t.about.tawakalitu.expertise1.split(':')[1]}</p>
                <p><strong>{t.about.tawakalitu.expertise2.split(':')[0]}:</strong> {t.about.tawakalitu.expertise2.split(':')[1]}</p>
                <p><strong>{t.about.tawakalitu.expertise3.split(':')[0]}:</strong> {t.about.tawakalitu.expertise3.split(':')[1]}</p>
              </ProfileBlockLight>

              <ProfileBlockLight title={t.about.tawakalitu.professionalExperience}>
                <div>
                  <p className="font-h3 text-[#09090A] mb-2">{t.about.tawakalitu.jaiyeolaRole}</p>
                  <p className="mb-2">{t.about.tawakalitu.jaiyeolaDesc}</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>{t.about.tawakalitu.jaiyeolaBullet1}</li>
                    <li>{t.about.tawakalitu.jaiyeolaBullet2}</li>
                  </ul>
                </div>
                <div>
                  <p className="font-h3 text-[#09090A] mb-2">{t.about.tawakalitu.aniksRole}</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>{t.about.tawakalitu.aniksBullet1}</li>
                    <li>{t.about.tawakalitu.aniksBullet2}</li>
                    <li>{t.about.tawakalitu.aniksBullet3}</li>
                  </ul>
                </div>
              </ProfileBlockLight>

              <ProfileBlockLight title={t.about.tawakalitu.education}>
                <p><strong>{t.about.tawakalitu.education1.split('\n')[0]}</strong><br />{t.about.tawakalitu.education1.split('\n')[1]}</p>
                <p><strong>{t.about.tawakalitu.education2.split('\n')[0]}</strong><br />{t.about.tawakalitu.education2.split('\n')[1]}</p>
              </ProfileBlockLight>

              <ProfileBlockLight title={t.about.tawakalitu.creativeStatement}>
                <p className="italic">"{t.about.tawakalitu.statement}"</p>
              </ProfileBlockLight>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MONSURU FULL PROFILE ─── */}
      <section className="section-padding bg-[#09090A]">
        <div className="content-max">
          <p className="section-label reveal">{t.about.monsuru.sectionLabel}</p>
          <div className="grid lg:grid-cols-[280px_1fr] gap-12 items-start reveal">
            <img
              src="./assets/founder-fala.png"
              alt="Monsuru Obadina, popularly known as FALA"
              className="w-full rounded-xl object-cover sticky top-28"
              style={{ aspectRatio: '3/4' }}
            />
            <div>
              <h2 className="font-h1 text-white mb-2">{t.about.monsuru.name}</h2>
              <p className="font-body text-[#C8C8C8] mb-8">
                {t.about.monsuru.bio}
              </p>

              <ProfileBlock title={t.about.monsuru.journeyTitle}>
                <p>{t.about.monsuru.journeyDesc}</p>
              </ProfileBlock>

              <ProfileBlock title={t.about.monsuru.stageTitle}>
                <p>{t.about.monsuru.stageDesc}</p>
              </ProfileBlock>

              <ProfileBlock title={t.about.monsuru.achievementsTitle}>
                <p>{t.about.monsuru.achievementsDesc}</p>
              </ProfileBlock>

              <ProfileBlock title={t.about.monsuru.industryRoleTitle}>
                <p>{t.about.monsuru.industryRoleDesc}</p>
              </ProfileBlock>

              <ProfileBlock title={t.about.monsuru.brandTitle}>
                <p>{t.about.monsuru.brandDesc}</p>
              </ProfileBlock>

              <ProfileBlock title={t.about.monsuru.consultancyTitle}>
                <p>{t.about.monsuru.consultancyDesc1}</p>
                <p>{t.about.monsuru.consultancyDesc2}</p>
              </ProfileBlock>

              <ProfileBlock title={t.about.monsuru.filmsTitle}>
                <p>{t.about.monsuru.filmsDesc}</p>
                <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-1 list-none pl-0">
                  {filmsProducedByFala.map((film) => (
                    <li key={film}>{film}</li>
                  ))}
                </ul>
              </ProfileBlock>

              <ProfileBlock title={t.about.monsuru.directedTitle}>
                <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-1 list-none pl-0">
                  {filmsDirectedByFala.map((film) => (
                    <li key={film}>{film}</li>
                  ))}
                </ul>
              </ProfileBlock>

              <ProfileBlock title={t.about.monsuru.crewTitle}>
                <p>{t.about.monsuru.crewDesc}</p>
              </ProfileBlock>

              <ProfileBlock title={t.about.monsuru.marketersTitle}>
                <p>{t.about.monsuru.marketersDesc}</p>
              </ProfileBlock>

              <ProfileBlock title={t.about.monsuru.futureTitle}>
                <p>{t.about.monsuru.futureDesc}</p>
              </ProfileBlock>

              <ProfileBlock title={t.about.monsuru.youtubeTitle}>
                <p>{t.about.monsuru.youtubeDesc}</p>
              </ProfileBlock>

              <ProfileBlock title={t.about.monsuru.officeTitle}>
                <p>{t.about.monsuru.officeAddress.replace('\\n', '\n')}</p>
              </ProfileBlock>

              <ProfileBlock title={t.about.monsuru.contactTitle}>
                <p>{t.about.monsuru.contactPhone1}</p>
                <p>{t.about.monsuru.contactPhone2}</p>
                <p>{t.about.monsuru.contactEmail}</p>
              </ProfileBlock>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MONSURU'S JOURNEY ─── */}
      <section className="section-padding bg-[#FAFAF9]">
        <div className="content-max">
          <div className="reveal text-center mb-12">
            <p className="section-label justify-center">{t.about.journey.sectionLabel}</p>
            <h2 className="font-h1 text-[#09090A]">{t.about.journey.title}</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {monsuruJourney.map((item) => (
              <div key={item.image} className="reveal glass-card-light overflow-hidden" style={{ padding: 0 }}>
                <img src={item.image} alt={item.alt} className="w-full object-cover" style={{ maxHeight: '420px' }} />
                <p className="font-body text-[rgba(9,9,10,0.7)] p-6">{item.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
