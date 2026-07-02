import { Link } from 'react-router-dom'
import { SocialIcon } from './Icons'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Academy', path: '/academy' },
  { label: 'Contact', path: '/contact' },
]

const serviceLinks = [
  'Film & Movie Production',
  'Documentaries & Digital Content',
  'Artist Development',
  'Talent Discovery',
  'Film Consultancy',
]

const socialLinks = [
  { name: 'YouTube', Icon: SocialIcon.YouTube, href: 'https://www.youtube.com' },
  { name: 'Instagram', Icon: SocialIcon.Instagram, href: '#' },
  { name: 'Facebook', Icon: SocialIcon.Facebook, href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-[#09090A] border-t border-[rgba(255,255,255,0.1)]">
      <div className="content-max pt-20 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div>
            <img
              src="./assets/logo.png"
              alt="Jaiyeola Movie Entertainment"
              className="h-16 w-auto object-contain mb-4"
            />
            <p className="font-micro text-[#D4A853] mb-4">IN CONJUNCTION WITH FALA FILMS MULTIMEDIA</p>
            <p className="font-small text-[#C8C8C8] max-w-[280px]">
              Bringing stories to life. Shaping the stars of tomorrow. Creating unforgettable moments.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-micro text-[#D4A853] mb-4">NAVIGATION</p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="font-small text-[#C8C8C8] hover:text-white transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="font-micro text-[#D4A853] mb-4">OUR SERVICES</p>
            <ul className="space-y-2.5">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <Link to="/services" className="font-small text-[#C8C8C8] hover:text-white transition-colors duration-300">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-micro text-[#D4A853] mb-4">GET IN TOUCH</p>
            <p className="font-small text-[#C8C8C8] mb-1">
              <a href="tel:+2348026245050" className="hover:text-white transition-colors">+234-8026245050</a>
            </p>
            <p className="font-small text-[#C8C8C8] mb-1">
              <a href="mailto:monsuruobadinafala@gmail.com" className="hover:text-white transition-colors">monsuruobadinafala@gmail.com</a>
            </p>
            <p className="font-small text-[#C8C8C8] mb-4">
              312 Lagos-Abeokuta Expressway, Ile-Epo Bus-Stop, Lagos, Nigeria
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map(({ name, Icon, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C8C8C8] hover:text-[#D4A853] transition-colors duration-300"
                  aria-label={name}
                >
                  <Icon />
                </a>
              ))}
            </div>
            <p className="font-micro text-[rgba(255,255,255,0.4)] mt-4">MONUMENTAL TV on YouTube</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[rgba(255,255,255,0.1)] mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-micro text-[rgba(255,255,255,0.4)]">
            &copy; 2026 Jaiyeola Movie Entertainment Productions & Fala Films Multimedia. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span className="font-micro text-[rgba(255,255,255,0.4)] hover:text-white transition-colors duration-300 cursor-pointer">
              Privacy Policy
            </span>
            <span className="font-micro text-[rgba(255,255,255,0.4)]">&middot;</span>
            <span className="font-micro text-[rgba(255,255,255,0.4)] hover:text-white transition-colors duration-300 cursor-pointer">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
