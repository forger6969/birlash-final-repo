import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CompanyLogo from './components/CompanyLogo'
import PurposeSection from './components/PurposeSection'
import ScheduleSection from './components/ScheduleSection'
import MonitorSection from './components/MonitorSection'
import ServicesSection from './components/ServicesSection'
import TestimonialsSection from './components/TestimonialsSection'
import NewsletterSection from './components/NewsletterSection'
import Footer from './components/Footer'
import SwiperForger from './components/SwiperForger'
import BirlashBrain from './components/BirlashBrain'
import BusinessParticles from './components/BusinessParticles'
import { MorphingDialogBasicTwo } from './components/MorphingDialogBasicTwo'
import TimelineSection from './components/TimelineSection'
import { AppContext } from './AppContext'
import { useEffect, useState } from 'react'
import { Theater } from 'lucide-react'

function App() {
  const theme = JSON.parse(localStorage.getItem(`theme`))

  const [isDark, setTheme] = useState(theme || false)

  return (
    <AppContext.Provider value={{
      theme: {
        setTheme: setTheme,
        isDark: isDark
      }
    }}>

      <main className={`relative min-h-screen overflow-x-hidden ${isDark ? 'bg-[#232323]' : 'bg-[#E9ECEF]'}`}>
        <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10"></div>
        <div className="overflow-hidden">
          <BusinessParticles />
          <Navbar />
          <Hero />
          <CompanyLogo />
          <PurposeSection />
          <BirlashBrain />
          <SwiperForger />
          <TimelineSection />
          <div className={` ${isDark ? "bg-[#004D57]" : "bg-white"}`}>
            <ScheduleSection />

          </div>
          <MonitorSection />
          <ServicesSection />
          <TestimonialsSection />
          <NewsletterSection />
          <Footer />
        </div>
      </main>

    </AppContext.Provider>
  )
}

export default App
