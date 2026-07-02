# Gioia Entertainment & Academy — Technical Specification

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^19.0.0 | UI framework |
| react-dom | ^19.0.0 | DOM rendering |
| react-router-dom | ^7.1.0 | Client-side routing (5 pages) |
| typescript | ^5.7.0 | Type safety |
| vite | ^6.0.0 | Build tool & dev server |
| @vitejs/plugin-react | ^4.3.0 | Vite React integration |
| tailwindcss | ^4.0.0 | Utility-first CSS |
| @tailwindcss/vite | ^4.0.0 | Tailwind Vite plugin |
| clsx | ^2.1.0 | Conditional class merging |
| tailwind-merge | ^2.6.0 | Tailwind class deduplication |
| lucide-react | ^0.468.0 | Icon library (social, UI, service icons) |
| class-variance-authority | ^0.7.0 | Component variant management (shadcn dep) |

### Fonts (loaded via Google Fonts CDN in index.html)
- Cormorant Garamond (400, 500, 600, 700) — display & headings
- Inter (300, 400, 500, 600, 700) — body, UI, navigation

### DevDependencies
- @types/react, @types/react-dom
- postcss, autoprefixer

---

## Component Inventory

### Layout Components (shared across all pages)

| Component | Source | Notes |
|-----------|--------|-------|
| **Header** | Custom | Fixed navigation with scroll-aware background blur, mobile hamburger overlay |
| **Footer** | Custom | 4-column grid with brand, nav links, services, contact info |
| **GrainOverlay** | Custom | Fixed full-screen SVG noise texture, z-index 5 |
| **BackToTop** | Custom | Fixed circular button, appears after 500px scroll |
| **PageTransitionOverlay** | Custom | Dark fade overlay for page transitions (currently simple fade) |
| **MobileMenu** | Custom | Full-screen overlay menu, staggered link entrance |

### Section Components (page-specific)

**Home Page:**
| Component | Notes |
|-----------|-------|
| HeroSection | Full-viewport video background, choreographed text entrance |
| PartnershipSection | Two agency cards + partnership statement |
| ServicesOverviewSection | 6-card grid with glassmorphism hover |
| AcademyPreviewSection | Two-column: text + image |
| WhyChooseUsSection | 5 numbered differentiators |
| TestimonialsSection | Carousel with auto-advance, pause on hover |
| FinalCTASection | Centered dual CTA with radial glow |

**About Page:**
| Component | Notes |
|-----------|-------|
| AboutHeroSection | Compact 50vh hero |
| CompanyStorySection | Mission statement + goals list |
| CollaborationSection | Light-background section, 3 pillars |
| FoundersSection | 2 glassmorphism founder profile cards |

**Services Page:**
| Component | Notes |
|-----------|-------|
| ServicesHeroSection | Compact 50vh hero |
| ServiceDetailSection | Reusable section rendered 6x, alternating dark/light & image position |

**Academy Page:**
| Component | Notes |
|-----------|-------|
| AcademyHeroSection | 60vh hero with stat counters |
| CourseOverviewSection | 6-course card grid |
| EnrollmentFormSection | Light-background form, Formspree integration |
| FAQSection | Accordion with single-open behavior |

**Contact Page:**
| Component | Notes |
|-----------|-------|
| ContactHeroSection | Compact 45vh hero with gradient bg |
| ContactInfoSection | 4 glassmorphism info cards |
| ContactFormSection | Light-background form |
| MapSection | Google Maps iframe with dark styling |

### Reusable Components

| Component | Used By | Notes |
|-----------|---------|-------|
| **SectionLabel** | All sections | Gold diamond prefix + uppercase micro text |
| **GlassmorphismCard** | Multiple sections | Dark variant (services, testimonials, contact) + light variant (collaboration) |
| **CTAButton** | All CTA locations | Primary (gold pill) + Ghost (outlined) variants |
| **ServiceIcon** | Services grid, service detail pages | Lucide-based icons with gold tint |
| **CourseIcon** | Academy course cards | Lucide-based icons |
| **TestimonialCard** | Testimonials carousel | Quote + author + star rating |
| **FAQItem** | FAQ section | Accordion with expand/collapse animation |
| **StatCounter** | Academy hero | Animated number count-up |
| **FormInput** | All forms | Dark and light themed variants |
| **SocialIcon** | Footer, founder cards | Instagram, Twitter/X, Facebook, LinkedIn, YouTube |

### Hooks

| Hook | Purpose |
|------|---------|
| **useScrollReveal** | IntersectionObserver-based fade-in-up animation for all sections |
| **useScrollHeader** | Tracks scroll position for header background transition |
| **useCarousel** | Auto-advancing carousel with pause-on-hover for testimonials |
| **useCounter** | Animated number count-up triggered by intersection |

---

## Animation Implementation

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| **Hero entrance sequence** | CSS keyframes + JS | Staggered CSS transitions triggered by JS class toggle on mount. Video scale(1.1→1) + opacity, then text elements stagger in with translateY + opacity | Medium |
| **Scroll-triggered reveals** | IntersectionObserver + CSS | Single shared hook (`useScrollReveal`) adds `.is-visible` class. CSS handles translateY(40px→0) + opacity(0→1) with 0.8s ease-out. Stagger via transition-delay classes | Low |
| **Testimonial carousel** | CSS transforms + JS state | translateX on flex track. Auto-advance interval, pause on hover. Navigation dots + arrows | Medium |
| **FAQ accordion** | CSS max-height transition | max-height: 0 ↔ scrollHeight with 0.4s ease. Plus icon rotation 0→45deg | Low |
| **Stat counter** | JS requestAnimationFrame | Count from 0 to target over 1.5s triggered by IntersectionObserver. Formatted with suffix | Low |
| **Header scroll effect** | JS scroll listener | Toggle class at 100px scroll threshold. CSS transitions background + backdrop-filter | Low |
| **Page transitions** | CSS opacity transition | Simple overlay fade between routes. Full implementation: capture navigation, fade overlay, swap route, fade out | Low |
| **Confetti burst** | CSS keyframes | 5-8 absolutely positioned dots with random drift via CSS custom properties, fade + translateY over 1.5s | Low |
| **Mobile menu** | CSS transitions | Overlay opacity + staggered link translateY with transition-delay | Low |
| **Glassmorphism card hover** | CSS transitions | Border brighten, background lighten, translateY(-4px) lift — all 0.4s ease | Low |
| **Image hover scale** | CSS transitions | Subtle scale(1.02) on image within card | Low |
| **Button hover** | CSS transitions | Scale(1.03) + background color shift | Low |

---

## State & Logic Plan

### Routing
- React Router with 5 routes: `/`, `/about`, `/services`, `/academy`, `/contact`
- HashRouter for static deployment compatibility
- Scroll-to-top on route change

### Form Handling
- Two forms (Academy enrollment + Contact) submit to Formspree endpoint
- Form states: idle → submitting → success/error
- Success: replace form with success message + confetti animation
- Error: display inline error message

### Testimonials Carousel
- State: currentSlide index
- Effect: 6s auto-advance interval, cleared on hover
- Navigation: dot click, arrow click, swipe (future)

### FAQ Accordion
- State: openIndex (number | null)
- Logic: clicking open item closes it; clicking closed item opens it and closes previous

### Header Scroll
- State: isScrolled boolean
- Listener: window scroll event, threshold 100px

### Mobile Menu
- State: isOpen boolean
- Effect: locks body scroll when open

---

## Other Key Decisions

### Asset Strategy
- All images generated via AI and stored in `public/assets/`
- Hero video: 10s loop, MP4 format, muted autoplay
- Grain overlay: Inline SVG data URI (no external file needed)
- Favicon: Inline SVG

### Formspree Setup
- Single endpoint: `https://formspree.io/f/xnnpqven`
- Both forms use same endpoint with different `subject` fields for differentiation
- Academy form uses `_subject` field value: "New Academy Enrollment"
- Contact form uses `_subject` field value: "New Contact Message"

### Responsive Strategy
- Mobile-first Tailwind breakpoints
- Primary breakpoint at 1024px (lg) for desktop layout
- Secondary at 768px (md) for tablet
- Single-column stacking below 768px

### Accessibility
- prefers-reduced-motion respected globally
- All interactive elements have focus-visible styles
- Form fields have proper labels
- Alt text on all images
- Semantic HTML structure
