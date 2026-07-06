import { useRef, useState } from 'react'
import { CourseIcon } from '../components/Icons'
import PageHero from '../components/PageHero'
import { submitToEmail } from '../lib/submitForm'
import { useLanguage } from '../contexts/LanguageContext'

const CURRICULUM_DOC = './documents/3-Month-Stage-Performance-Course-Outline.html'

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

export default function Academy() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const formRef = useRef<HTMLFormElement>(null)
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

  const curriculum = [
    { Icon: CourseIcon.Acting, name: t.home.academyPreview.whatWeTeach[0]?.title || 'Screen Acting Techniques', desc: t.home.academyPreview.whatWeTeach[0]?.desc || 'Learn how to translate emotions naturally from the script to the camera.' },
    { Icon: CourseIcon.Filmmaking, name: t.home.academyPreview.whatWeTeach[1]?.title || 'Character Development', desc: t.home.academyPreview.whatWeTeach[1]?.desc || 'Master the psychology of a character, understanding their motivations, voice, and physical traits.' },
    { Icon: CourseIcon.Editing, name: t.home.academyPreview.whatWeTeach[2]?.title || 'Audition Mastery', desc: t.home.academyPreview.whatWeTeach[2]?.desc || 'Get insider secrets on how to walk into an audition room with confidence, nail cold readings, and land the role.' },
    { Icon: CourseIcon.MediaProduction, name: t.home.academyPreview.whatWeTeach[3]?.title || 'The Business of Acting', desc: t.home.academyPreview.whatWeTeach[3]?.desc || 'Understand how the industry works, including branding yourself, working with directors, and managing contracts.' },
  ]

  const technicalTracks = [
    {
      Icon: CourseIcon.Filmmaking,
      name: t.academy.technicalTraining.whatWeTeach[0]?.title || 'Directing & Story Interpretation',
      desc: t.academy.technicalTraining.whatWeTeach[0]?.desc || 'Learn script breakdown, scene blocking, working with actors, and how to shape a story from rehearsal to final take.',
    },
    {
      Icon: CourseIcon.MediaProduction,
      name: t.academy.technicalTraining.whatWeTeach[1]?.title || 'Camera Handling & Shot Composition',
      desc: t.academy.technicalTraining.whatWeTeach[1]?.desc || 'Build confidence with camera setup, framing, movement, continuity, and the technical discipline needed on set.',
    },
    {
      Icon: CourseIcon.ContentCreation,
      name: t.academy.technicalTraining.whatWeTeach[2]?.title || 'Audio & Set Communication',
      desc: t.academy.technicalTraining.whatWeTeach[2]?.desc || 'Understand sound capture, boom and audio support roles, set coordination, and clean communication during production.',
    },
    {
      Icon: CourseIcon.Editing,
      name: t.academy.technicalTraining.whatWeTeach[3]?.title || 'Lighting & Technical Support',
      desc: t.academy.technicalTraining.whatWeTeach[3]?.desc || 'Explore lighting setup, mood creation, basic power and rig awareness, and the teamwork required behind the scenes.',
    },
  ]

  return (
    <div>
      <PageHero
        label={t.academy.pageHero.label}
        title={t.academy.pageHero.title}
        subtitle={t.academy.pageHero.subtitle}
        backgroundImage="./assets/academy-preview.jpg"
        height="55vh"
        align="end"
      />

      {/* ─── INTRO ─── */}
      <section className="section-padding content-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <p className="section-label">{t.academy.intro.sectionLabel}</p>
            <p className="font-body text-[#C8C8C8] mb-6">
              {t.academy.intro.description}
            </p>

            <h3 className="font-h3 text-[#D4A853] mb-4">{t.academy.intro.whyTrainTitle}</h3>
            <div className="space-y-4">
              {t.academy.intro.benefits.map((benefit, i) => (
                <div key={i}>
                  <p className="font-body text-white font-medium">{benefit.title}</p>
                  <p className="font-body text-[#C8C8C8]">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal reveal-delay-2">
            <img
              src="./assets/about-production.png"
              alt="On-set training at Jaiyeola Acting Academy"
              className="w-full rounded-xl object-cover"
              style={{ aspectRatio: '4/5', boxShadow: '0 0 40px rgba(212,168,83,0.15)' }}
            />
          </div>
        </div>
      </section>

      {/* ─── CURRICULUM ─── */}
      <section className="section-padding bg-[#09090A]">
        <div className="content-max">
          <div className="reveal">
            <p className="section-label">{t.academy.curriculum.sectionLabel}</p>
            <h2 className="font-h1 text-white mb-16">{t.academy.curriculum.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {curriculum.map((item, i) => (
              <div key={item.name} className={`glass-card reveal reveal-delay-${i}`}>
                <div className="mb-4"><item.Icon /></div>
                <h3 className="font-h3 text-white mb-3">{item.name}</h3>
                <p className="font-body text-[#C8C8C8]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── YORUBA LANGUAGE LEARNING ─── */}
      <section className="section-padding" style={{ background: 'linear-gradient(to bottom, rgba(212,168,83,0.05), #09090A)' }}>
        <div className="content-max">
          <div className="reveal text-center mb-12">
            <p className="section-label justify-center">{t.academy.yorubaLearning.sectionLabel}</p>
            <h2 className="font-h1 text-white mb-4">{t.academy.yorubaLearning.title}</h2>
            <p className="font-body text-[#C8C8C8] max-w-[640px] mx-auto">
              {t.academy.yorubaLearning.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.academy.yorubaLearning.whatYouLearn.map((item, i) => (
              <div key={item.title} className={`glass-card reveal reveal-delay-${i}`}>
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-full bg-[rgba(212,168,83,0.1)] flex items-center justify-center">
                    <CourseIcon.Acting />
                  </div>
                </div>
                <h3 className="font-h3 text-white mb-3">{item.title}</h3>
                <p className="font-body text-[#C8C8C8]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3-MONTH COURSE — DOWNLOAD ─── */}
      <section id="curriculum" className="section-padding bg-[#FAFAF9]">
        <div className="content-max">
          <div className="reveal text-center mb-12">
            <p className="section-label justify-center">{t.academy.courseOutline.sectionLabel}</p>
            <h2 className="font-h1 text-[#09090A] mb-4">{t.academy.courseOutline.title}</h2>
            <p className="font-body text-[rgba(9,9,10,0.7)] max-w-[640px] mx-auto">
              {t.academy.courseOutline.description}
            </p>
          </div>

          <div className="reveal glass-card-light max-w-[640px] mx-auto text-center" style={{ padding: '3rem' }}>
            <p className="font-h3 text-[#09090A] mb-4">{t.academy.courseOutline.cardTitle}</p>
            <p className="font-body text-[rgba(9,9,10,0.7)] mb-8">
              {t.academy.courseOutline.cardSubtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={CURRICULUM_DOC}
                download="3-Month-Stage-Performance-Course-Outline.html"
                className="btn-primary"
                style={{ background: '#D4A853', color: '#09090A' }}
              >
                {t.academy.courseOutline.downloadBtn}
              </a>
              <a
                href={CURRICULUM_DOC}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                style={{ borderColor: 'rgba(9,9,10,0.2)', color: '#09090A' }}
              >
                {t.academy.courseOutline.viewBtn}
              </a>
            </div>
            <p className="font-micro text-[rgba(9,9,10,0.5)] mt-6">
              {t.academy.courseOutline.note}
            </p>
            <a href="#register" className="inline-block mt-8 font-small text-[#D4A853] hover:underline">
              {t.academy.courseOutline.applyLink}
            </a>
          </div>
        </div>
      </section>

      {/* ─── REGISTRATION FORM ─── */}
      <section id="register" className="bg-[#FAFAF9]" style={{ padding: 'clamp(80px, 12vh, 140px) 0' }}>
        <div className="content-max px-4 sm:px-6">
          <div className="reveal mb-16">
            <div className="glass-card-light w-full" style={{ padding: 'clamp(1.5rem, 4vw, 3.5rem)' }}>
              <div className="text-center mb-10">
                <p className="section-label justify-center">{t.academy.technicalTraining.sectionLabel}</p>
                <h2 className="font-h1 text-[#09090A] mb-4">{t.academy.technicalTraining.title}</h2>
                <p className="font-body text-[rgba(9,9,10,0.7)] max-w-[760px] mx-auto">
                  {t.academy.technicalTraining.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
                {technicalTracks.map((track, i) => (
                  <div
                    key={track.name}
                    className={`rounded-2xl border border-[rgba(9,9,10,0.08)] bg-white min-h-[220px] reveal reveal-delay-${Math.min(i, 5)}`}
                    style={{ padding: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}
                  >
                    <div className="mb-4"><track.Icon /></div>
                    <h3 className="font-h3 text-[#09090A] mb-3">{track.name}</h3>
                    <p className="font-body text-[rgba(9,9,10,0.7)]">{track.desc}</p>
                  </div>
                ))}
              </div>

              <p className="font-small text-[rgba(9,9,10,0.6)] text-center mt-8">
                {t.academy.technicalTraining.note}
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-[800px] mx-auto px-6">
          <div className="reveal text-center">
            <h2 className="font-h1 text-[#09090A] mb-4">{t.academy.registrationForm.title}</h2>
            <p className="font-body text-[rgba(9,9,10,0.7)] max-w-[640px] mx-auto mb-12">
              {t.academy.registrationForm.description}
            </p>
          </div>

          {formState === 'success' ? (
            <div ref={successRef} className="relative">
              <div className="form-success">
                <div className="success-icon">&#10003;</div>
                <p>{t.academy.registrationForm.successMessage}</p>
              </div>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="reveal" encType="multipart/form-data">
              <input type="hidden" name="_subject" value="Jaiyeola Academy Registration & Audition" />
              <input type="hidden" name="formType" value="academy-registration" />
              {/* Section 1 */}
              <div className="mb-8">
                <h3 className="font-h3 text-[#09090A] mb-2">{t.academy.registrationForm.section1}</h3>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label className="block font-small text-[#09090A] font-medium mb-1.5">First Name *</label>
                    <input type="text" name="firstName" required className="form-input-light" />
                  </div>
                  <div>
                    <label className="block font-small text-[#09090A] font-medium mb-1.5">Last Name *</label>
                    <input type="text" name="lastName" required className="form-input-light" />
                  </div>
                  <div>
                    <label className="block font-small text-[#09090A] font-medium mb-1.5">Date of Birth *</label>
                    <input type="date" name="dob" required className="form-input-light" />
                    <p className="font-micro text-[rgba(9,9,10,0.5)] mt-1">Applicants under 18 require parental/guardian consent</p>
                  </div>
                  <div>
                    <label className="block font-small text-[#09090A] font-medium mb-1.5">Gender</label>
                    <select name="gender" className="form-input-light">
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="prefer-not">Prefer not to say</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block font-small text-[#09090A] font-medium mb-1.5">Current Address *</label>
                    <input type="text" name="address" required placeholder="Street Address, City, State, Country" className="form-input-light" />
                  </div>
                  <div>
                    <label className="block font-small text-[#09090A] font-medium mb-1.5">Phone Number *</label>
                    <input type="tel" name="phone" required placeholder="+Country Code - Phone Number" className="form-input-light" />
                  </div>
                  <div>
                    <label className="block font-small text-[#09090A] font-medium mb-1.5">Email Address *</label>
                    <input type="email" name="email" required placeholder="example@email.com" className="form-input-light" />
                  </div>
                </div>
              </div>

              <div className="divider-light mb-8" />

              {/* Section 2 */}
              <div className="mb-8">
                <h3 className="font-h3 text-[#09090A] mb-2">{t.academy.registrationForm.section2}</h3>
                <p className="font-small text-[rgba(9,9,10,0.5)] mb-6">Mandatory for applicants under 18 years of age</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-small text-[#09090A] font-medium mb-1.5">Guardian Full Name</label>
                    <input type="text" name="guardianName" className="form-input-light" />
                  </div>
                  <div>
                    <label className="block font-small text-[#09090A] font-medium mb-1.5">Relationship to Applicant</label>
                    <select name="guardianRelationship" className="form-input-light">
                      <option value="">Select relationship</option>
                      <option value="parent">Parent</option>
                      <option value="legal-guardian">Legal Guardian</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-small text-[#09090A] font-medium mb-1.5">Guardian Phone Number</label>
                    <input type="tel" name="guardianPhone" className="form-input-light" />
                  </div>
                </div>
              </div>

              <div className="divider-light mb-8" />

              {/* Section 3 */}
              <div className="mb-8">
                <h3 className="font-h3 text-[#09090A] mb-2">{t.academy.registrationForm.section3}</h3>
                <p className="font-small text-[rgba(9,9,10,0.5)] mb-6">Required for casting and character placement during on-camera training</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-small text-[#09090A] font-medium mb-1.5">Height</label>
                    <input type="text" name="height" placeholder="Feet/Inches or cm" className="form-input-light" />
                  </div>
                  <div>
                    <label className="block font-small text-[#09090A] font-medium mb-1.5">Eye Color</label>
                    <input type="text" name="eyeColor" className="form-input-light" />
                  </div>
                  <div>
                    <label className="block font-small text-[#09090A] font-medium mb-1.5">Hair Color</label>
                    <input type="text" name="hairColor" className="form-input-light" />
                  </div>
                  <div>
                    <label className="block font-small text-[#09090A] font-medium mb-1.5">Languages Spoken Fluently</label>
                    <input type="text" name="languages" className="form-input-light" />
                  </div>
                </div>
              </div>

              <div className="divider-light mb-8" />

              {/* Section 4 */}
              <div className="mb-8">
                <h3 className="font-h3 text-[#09090A] mb-2">{t.academy.registrationForm.section4}</h3>
                <p className="font-small text-[#09090A] font-medium mb-3">Which training path are you applying for? *</p>
                <div className="space-y-2 mb-6">
                  {[
                    { value: 'acting', label: 'Acting / Performance' },
                    { value: 'directing', label: 'Directing / Story Development' },
                    { value: 'technical', label: 'Technical Production (Audio, Camera, Lighting, Set Support)' },
                    { value: 'undecided', label: 'I am not sure yet and need guidance' },
                  ].map((track) => (
                    <label key={track.value} className="flex items-center gap-2 font-body text-[rgba(9,9,10,0.7)] cursor-pointer">
                      <input type="radio" name="trainingPath" value={track.value} required className="accent-[#D4A853]" />
                      {track.label}
                    </label>
                  ))}
                </div>
                <p className="font-small text-[#09090A] font-medium mb-3">Do you have any previous acting experience? *</p>
                <div className="space-y-2 mb-6">
                  {[
                    { value: 'beginner', label: 'No, I am a complete beginner.' },
                    { value: 'amateur', label: 'Yes, amateur/school theater.' },
                    { value: 'professional-theater', label: 'Yes, professional theater/stage.' },
                    { value: 'professional-screen', label: 'Yes, professional screen/film/TV.' },
                  ].map((opt) => (
                    <label key={opt.value} className="flex items-center gap-2 font-body text-[rgba(9,9,10,0.7)] cursor-pointer">
                      <input type="radio" name="experience" value={opt.value} required className="accent-[#D4A853]" />
                      {opt.label}
                    </label>
                  ))}
                </div>
                <div className="mb-6">
                  <label className="block font-small text-[#09090A] font-medium mb-1.5">Prior Experience Details</label>
                  <textarea name="experienceDetails" rows={3} placeholder="List notable projects or training institutes attended" className="form-input-light resize-none" />
                </div>
                <p className="font-small text-[#09090A] font-medium mb-3">Special Skills (Check all that apply)</p>
                <div className="grid sm:grid-cols-2 gap-3 mb-4">
                  {[
                    { name: 'skillSinging', label: 'Singing' },
                    { name: 'skillMartialArts', label: 'Martial Arts / Stunt Work' },
                    { name: 'skillVoiceover', label: 'Voiceover / Narration' },
                  ].map((skill) => (
                    <label key={skill.name} className="flex items-center gap-2 font-body text-[rgba(9,9,10,0.7)] cursor-pointer">
                      <input type="checkbox" name={skill.name} value="yes" className="accent-[#D4A853]" />
                      {skill.label}
                    </label>
                  ))}
                  <label className="flex items-center gap-2 font-body text-[rgba(9,9,10,0.7)] cursor-pointer">
                    <input type="checkbox" name="skillAccents" value="yes" className="accent-[#D4A853]" />
                    Accents / Dialects
                  </label>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-small text-[#09090A] font-medium mb-1.5">Dancing (Style)</label>
                    <input type="text" name="dancingStyle" placeholder="Style if applicable" className="form-input-light" />
                  </div>
                  <div>
                    <label className="block font-small text-[#09090A] font-medium mb-1.5">Other Special Skills</label>
                    <input type="text" name="otherSkills" className="form-input-light" />
                  </div>
                </div>
              </div>

              <div className="divider-light mb-8" />

              {/* Section 5 */}
              <div className="mb-8">
                <h3 className="font-h3 text-[#09090A] mb-2">{t.academy.registrationForm.section5}</h3>
                <p className="font-small text-[rgba(9,9,10,0.5)] mb-6">
                  To help our casting directors review your application, please provide the following files and links.
                </p>
                <div className="space-y-6">
                  <div>
                    <label className="block font-small text-[#09090A] font-medium mb-1.5">Profile Headshot</label>
                    <input type="file" name="headshot" accept="image/*" className="form-input-light file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-[#D4A853] file:text-[#09090A] file:font-medium" />
                    <p className="font-micro text-[rgba(9,9,10,0.5)] mt-1">A clear, well-lit photo of your face. No heavy filters, sunglasses, or hats.</p>
                  </div>
                  <div>
                    <label className="block font-small text-[#09090A] font-medium mb-1.5">Full-Length Photo</label>
                    <input type="file" name="fullLengthPhoto" accept="image/*" className="form-input-light file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-[#D4A853] file:text-[#09090A] file:font-medium" />
                    <p className="font-micro text-[rgba(9,9,10,0.5)] mt-1">A standing portrait showing full height.</p>
                  </div>
                  <div>
                    <label className="block font-small text-[#09090A] font-medium mb-1.5">Monologue Video Link (Optional but highly recommended)</label>
                    <input type="url" name="monologueUrl" placeholder="YouTube / Vimeo / Google Drive URL" className="form-input-light" />
                    <p className="font-micro text-[rgba(9,9,10,0.5)] mt-1">Record a 1-2 minute dramatic or comic monologue. Ensure your voice is loud, clear, and the camera is steady.</p>
                  </div>
                </div>
              </div>

              <div className="divider-light mb-8" />

              {/* Section 6 */}
              <div className="mb-8">
                <h3 className="font-h3 text-[#09090A] mb-2">{t.academy.registrationForm.section6}</h3>
                <p className="font-small text-[#09090A] font-medium mb-3">Which training path fits your schedule best? *</p>
                <div className="space-y-2">
                  {[
                    { value: 'full-time', label: 'Full-Time Cohort (Weekday Mornings)' },
                    { value: 'part-time', label: 'Part-Time/Executive Cohort (Weekend Intensives)' },
                    { value: 'evening', label: 'Evening Masterclasses' },
                  ].map((opt) => (
                    <label key={opt.value} className="flex items-center gap-2 font-body text-[rgba(9,9,10,0.7)] cursor-pointer">
                      <input type="radio" name="schedule" value={opt.value} required className="accent-[#D4A853]" />
                      {opt.label}
                    </label>
                  ))}
                </div>
              </div>

              <div className="divider-light mb-8" />

              {/* Section 7 */}
              <div className="mb-10">
                <h3 className="font-h3 text-[#09090A] mb-2">{t.academy.registrationForm.section7}</h3>
                <p className="font-body text-[rgba(9,9,10,0.7)] mb-6">
                  Declaration: By submitting this form, I certify that all information provided is true and accurate to the best of my knowledge. I understand that submission of this form registers my intent to join the academy and schedules my preliminary audition, but does not guarantee automatic admission into the advanced production tracks.
                </p>
                <label className="flex items-start gap-2 font-body text-[rgba(9,9,10,0.7)] cursor-pointer mb-6">
                  <input type="checkbox" name="termsAccepted" value="yes" required className="accent-[#D4A853] mt-1" />
                  I agree to the terms and conditions of Jaiyeola Acting Academy in conjunction with Fala Films Multimedia.
                </label>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-small text-[#09090A] font-medium mb-1.5">Applicant Signature (Type Full Name) *</label>
                    <input type="text" name="signature" required className="form-input-light" />
                  </div>
                  <div>
                    <label className="block font-small text-[#09090A] font-medium mb-1.5">Date *</label>
                    <input type="date" name="signatureDate" required className="form-input-light" />
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <button type="submit" disabled={formState === 'submitting'} className="btn-primary" style={{ background: '#D4A853', color: '#09090A' }}>
                  {formState === 'submitting' ? t.academy.registrationForm.submittingText : t.academy.registrationForm.submitText}
                </button>
                <button type="reset" className="btn-ghost" style={{ borderColor: 'rgba(9,9,10,0.2)', color: '#09090A' }} onClick={() => setFormState('idle')}>
                  {t.academy.registrationForm.resetText}
                </button>
              </div>

              {formState === 'error' && (
                <p className="form-error mt-4">
                  {t.academy.registrationForm.errorMessage}
                </p>
              )}
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
