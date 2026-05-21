import { LangProvider } from './i18n/LangContext'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Solutions from './components/Solutions'
import About from './components/About'
import Leadership from './components/Leadership'
import Technology from './components/Technology'
import CaseStudies from './components/CaseStudies'
import Certifications from './components/Certifications'
import News from './components/News'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Toast from './components/Toast'

export default function App() {
  return (
    <LangProvider>
      <div className="min-h-screen bg-white text-ink-900 antialiased">
        <Header />
        <main>
          <Hero />
          <Stats />
          <Solutions />
          <About />
          <Leadership />
          <Technology />
          <CaseStudies />
          <Certifications />
          <News />
          <Contact />
        </main>
        <Footer />
        <Toast />
      </div>
    </LangProvider>
  )
}
