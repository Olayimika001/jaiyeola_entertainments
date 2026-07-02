import type { ReactNode } from 'react'
import PageHero from '../components/PageHero'
import { filmsProducedByFala, filmsDirectedByFala, monsuruJourney } from '../data/about-data'

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
  return (
    <div>
      <PageHero
        label="ABOUT US"
        title="About Our Company"
        subtitle="Independent media and film production — in conjunction with Fala Films Multimedia"
        backgroundImage="./assets/founder-tawakalitu.png"
      />

      {/* ─── COMPANY ─── */}
      <section className="section-padding content-max">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="section-label reveal">ABOUT OUR COMPANY</p>
            <h2 className="font-h1 text-white mb-8 reveal">About Our Company</h2>
            <div className="space-y-6 mb-10">
              <p className="reveal font-body text-[#C8C8C8]">
                Jaiyeola Movie Entertainment Productions is an independent media and film production company. Founded on the belief that storytelling has the power to change perspectives, connect cultures, and inspire generations, we produce compelling movies, documentaries, and digital content.
              </p>
              <p className="reveal font-body text-[#C8C8C8]">
                We blend creative vision with cutting-edge production techniques to deliver world-class entertainment. But we don&apos;t just stop at making movies—we believe in opening doors. We actively invest in the creative ecosystem by discovering, nurturing, and launching fresh talent into the global spotlight.
              </p>
            </div>
            <ProfileBlock title="Our Vision">
              <p>To be a leading global voice in innovative storytelling and the premier incubator for cinematic talent.</p>
            </ProfileBlock>
            <ProfileBlock title="Our Mission">
              <p>To produce thought-provoking content that entertains and inspires, while providing aspiring artists with the skills, mentorship, and platform they need to thrive.</p>
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
          <p className="section-label reveal">LEADERSHIP PROFILE</p>
          <div className="grid lg:grid-cols-[280px_1fr] gap-12 items-start reveal">
            <img
              src="./assets/founder-tawakalitu.png"
              alt="Tawakalitu Aina Adeola Stephen"
              className="w-full rounded-xl object-cover sticky top-28"
              style={{ aspectRatio: '3/4' }}
            />
            <div>
              <h2 className="font-h1 text-[#09090A] mb-2">Tawakalitu Aina Adeola Stephen</h2>
              <p className="font-micro text-[#D4A853] mb-6">Filmmaker, Creative Director, &amp; Entrepreneur</p>
              <p className="font-body text-[rgba(9,9,10,0.7)] mb-8">
                Highly creative and multi-talented professional with formal training spanning the realms of cinematic storytelling and contemporary fashion design. A visionary entrepreneur who successfully bridges the gap between visual media and style as the driving force behind two distinct creative enterprises. Proven track record in executive production, creative leadership, and brand management, demonstrated through the successful execution of independent film projects and the growth of a distinct fashion brand.
              </p>

              <ProfileBlockLight title="Core Expertise">
                <p><strong>Filmmaking &amp; Media Production:</strong> Trained at the prestigious Fala Film Multimedia. Skilled in directing, creative writing, and end-to-end project management from script to screen.</p>
                <p><strong>Fashion Design &amp; Creative Styling:</strong> Expert in garment construction, trend conceptualization, and textile styling, blending functional design with aesthetic storytelling.</p>
                <p><strong>Executive Leadership:</strong> Experienced Chief Executive Officer overseeing project budgets, cross-functional teams, brand strategies, and business development across the entertainment and fashion sectors.</p>
              </ProfileBlockLight>

              <ProfileBlockLight title="Professional Experience">
                <div>
                  <p className="font-h3 text-[#09090A] mb-2">CEO / Executive Producer | Jaiyeola Movie Entertainment Productions</p>
                  <p className="mb-2">Found and lead an independent multimedia production house dedicated to crafting compelling visual narratives.</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Produced the feature film &quot;CEO&quot;, managing all phases of production including development, budgeting, casting, and principal photography.</li>
                    <li>Oversee a collaborative team of writers, technicians, and actors to bring impactful stories to diverse audiences.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-h3 text-[#09090A] mb-2">CEO / Creative Director | Aniks Fashion</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Established and manage a contemporary fashion brand specializing in custom designs and trend-setting apparel.</li>
                    <li>Direct the seasonal creative direction, fabric selection, and production workflows for diverse fashion collections.</li>
                    <li>Synthesize a unique artistic vision that infuses elements of visual storytelling directly into wearable art.</li>
                  </ul>
                </div>
              </ProfileBlockLight>

              <ProfileBlockLight title="Education &amp; Professional Training">
                <p><strong>Professional Certification in Filmmaking</strong><br />Fala Film Multimedia</p>
                <p><strong>Professional Certification / Apprenticeship in Fashion Design</strong><br />Specialized training focusing on garment construction, styling, and design theory.</p>
              </ProfileBlockLight>

              <ProfileBlockLight title="Creative Statement">
                <p className="italic">&quot;Whether through the lens of a camera or the silhouette of a garment, my goal is to capture and express authentic human experiences. Film and fashion are powerful mediums of identity, and through Jaiyeola Movie Entertainment and Aniks Fashion, I aim to continuously push the boundaries of storytelling and style.&quot;</p>
              </ProfileBlockLight>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MONSURU FULL PROFILE ─── */}
      <section className="section-padding bg-[#09090A]">
        <div className="content-max">
          <p className="section-label reveal">PERSONAL PROFILE</p>
          <div className="grid lg:grid-cols-[280px_1fr] gap-12 items-start reveal">
            <img
              src="./assets/founder-fala.png"
              alt="Monsuru Obadina, popularly known as FALA"
              className="w-full rounded-xl object-cover sticky top-28"
              style={{ aspectRatio: '3/4' }}
            />
            <div>
              <h2 className="font-h1 text-white mb-2">MONSURU OBADINA (Popularly Known as FALA)</h2>
              <p className="font-body text-[#C8C8C8] mb-8">
                born on Nov 17th, 1957 in Abeokuta to Late Mr. &amp; Mrs. A. Salami Obadina. He is a native of Ogun State, Nigeria. He is happily married and blessed with children and Grandchildren.
              </p>

              <ProfileBlock title="The Journey so far...">
                <p>He started acting as far as forty eight years ago . His group then was called &quot;Igi Nla Theatre Group&quot; which later became &quot;Fala Films&quot; and now known as &quot;Fala Films Multimedia&quot;.</p>
                <p>He has done so many soap operas and TV dramas for some Television stations, like Lagos State Television Station (LTV/LWT), Clapper Board, Nigeria Television Authority, Tejuosho (NTA 7),and NTA 10.</p>
              </ProfileBlock>

              <ProfileBlock title="Stage play/ Traveling Theatre">
                <p>He has a strong foundation in stage play and traveling theatre across south western Nigeria. He toured extensively with live stage plays before transitioning to Television productions, home videos and ultimate to the modern Nigerian film industry</p>
              </ProfileBlock>

              <ProfileBlock title="Achievements">
                <p>An actor, Director, Producer, Screen writer and film consultant, he has received so many awards of excellent home and abroad for his outstanding performances.</p>
                <p>He is a veteran actor and a prolific producer cum director in the Yoruba movie industry. He has proved over the years his mastery and artistic skills as a director and producer.</p>
              </ProfileBlock>

              <ProfileBlock title="Role in industry.">
                <p>He is one of the few actors who remained consistent, focused, and committed to the progress and advancement of the movie industry despite its numerous challenges. He is also one of the pioneer advocates in the advent of home videos as well as one of the key players in the birth of the film industry in Nigeria. He has also been very supportive of many upcoming actors, producers, and directors which has earned him great respect and mentorship. He was an active member of the Association of Nigeria Theatre, Art Practitioners (ANTP) then. Now a member of (TAMPAN) Theatre Arts and Motion Pictures and Practitioners Association of Nigeria.</p>
              </ProfileBlock>

              <ProfileBlock title="Brand /Image">
                <p>Monsuru Obadina (a.k.a FALA) is a consistent actor, one of the rarest qualities in the movie industry. He is also a dynamic actor, director, producer who embraces new ideas and innovations from the new generation, which has helped so far in rebranding and creating a better image for his work.</p>
              </ProfileBlock>

              <ProfileBlock title="Consultancy">
                <p>Many star actors, directors, and producers were trained under his tutelage.</p>
                <p>He provides consultancy services to filmmakers and movie producers as well as plays advisory roles in ensuring that marketers achieve their goals.</p>
              </ProfileBlock>

              <ProfileBlock title="Film/Movies">
                <p>His films/movies over the years have been a pacesetter for other films and movies in the Yoruba film industry. The various films produced and directed by Monsuru Obadina (FALA) include:</p>
                <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-1 list-none pl-0">
                  {filmsProducedByFala.map((film) => (
                    <li key={film}>{film}</li>
                  ))}
                </ul>
              </ProfileBlock>

              <ProfileBlock title="Film directed by FALA">
                <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-1 list-none pl-0">
                  {filmsDirectedByFala.map((film) => (
                    <li key={film}>{film}</li>
                  ))}
                </ul>
              </ProfileBlock>

              <ProfileBlock title="Crew">
                <p>He has a well-experienced and versatile crew manager and staff who work as a team with a good welfare package.</p>
              </ProfileBlock>

              <ProfileBlock title="Marketers">
                <p>He is a household name, and his movies have a wide market coverage at home and abroad. His films are marketed by vibrant and notable marketers who have curved away in the industry.</p>
              </ProfileBlock>

              <ProfileBlock title="The future">
                <p>We are aiming for a self-orientated and goal-getting movie environment that will ensure and maintain a global standard in the movie industry.</p>
              </ProfileBlock>

              <ProfileBlock title="YouTube Channel">
                <p>He also has a YouTube channel - MONUMENTAL TV</p>
              </ProfileBlock>

              <ProfileBlock title="Office Address">
                <p>312 Lagos-Abeokuta Expressway, Ile-Epo Bus-Stop<br />Lagos Nigeria</p>
              </ProfileBlock>

              <ProfileBlock title="Contact">
                <p>+234-8026245050</p>
                <p>E-mail: monsuruobadinafala@gmail.com</p>
              </ProfileBlock>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MONSURU'S JOURNEY ─── */}
      <section className="section-padding bg-[#FAFAF9]">
        <div className="content-max">
          <div className="reveal text-center mb-12">
            <p className="section-label justify-center">THE JOURNEY IN PICTURES</p>
            <h2 className="font-h1 text-[#09090A]">Monsuru Obadina — A Life in Film</h2>
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
