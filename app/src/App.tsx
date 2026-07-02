import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import GrainOverlay from './components/GrainOverlay'
import BackToTop from './components/BackToTop'
import { ScrollRevealProvider } from './components/ScrollReveal'
import { useScrollToTop } from './hooks/useScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Academy from './pages/Academy'
import Contact from './pages/Contact'

function AppContent() {
  useScrollToTop()

  return (
    <>
      <Header />
      <main>
        <ScrollRevealProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/academy" element={<Academy />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </ScrollRevealProvider>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

function App() {
  return (
    <div className="relative min-h-screen bg-[#09090A]">
      <GrainOverlay />
      <AppContent />
    </div>
  )
}

export default App
