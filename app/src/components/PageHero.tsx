interface PageHeroProps {
  label: string
  title: string
  subtitle?: string
  backgroundImage: string
  height?: string
  align?: 'center' | 'end'
}

export default function PageHero({
  label,
  title,
  subtitle,
  backgroundImage,
  height = '50vh',
  align = 'center',
}: PageHeroProps) {
  return (
    <section
      className={`relative w-full flex overflow-hidden pt-24 ${
        align === 'center' ? 'items-center justify-center' : 'items-end'
      }`}
      style={{ minHeight: height }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-[rgba(9,9,10,0.82)]" />
      <div className={`relative z-10 text-center px-6 py-12 ${align === 'end' ? 'w-full px-[8vw] pb-[10vh] max-w-[1400px]' : ''}`}>
        <p className="section-label justify-center">{label}</p>
        <h1 className="font-h1-sm text-white mb-4">{title}</h1>
        {subtitle && (
          <p className="font-body text-[#C8C8C8] max-w-[640px] mx-auto">{subtitle}</p>
        )}
      </div>
    </section>
  )
}
