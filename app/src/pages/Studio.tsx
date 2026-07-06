import { useLanguage } from '../contexts/LanguageContext';

export default function Studio() {
  const { t } = useLanguage();

  return (
    <div>
      <section className="section-padding content-max">
        <div className="reveal">
          <p className="section-label">{t.studio.sectionLabel}</p>
          <h1 className="font-h1 text-white mb-6">{t.studio.title}</h1>
          <p className="font-body text-[#C8C8C8] max-w-[600px] mb-12">
            {t.studio.description}
          </p>
        </div>

        <div className="reveal reveal-delay-1">
          <div className="glass-card">
            <h3 className="font-h3 text-white mb-4">{t.studio.theCEO.title}</h3>
            <p className="font-body text-[#C8C8C8] mb-6">
              {t.studio.theCEO.description}
            </p>
            <div className="rounded-xl overflow-hidden bg-black aspect-video flex items-center justify-center">
              <video
                className="w-full h-full object-cover"
                controls
                playsInline
              >
                <source src="./assets/the_ceo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
