import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Preloader from './components/Preloader'


export default function Home() {
  return (
    <>
      <Preloader />
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Portfolio />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
