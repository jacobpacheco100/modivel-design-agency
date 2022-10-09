import React, { useRef } from 'react'

// components
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Branding from '../components/Branding'
import WebDev from '../components/WebDev'
import MobileApp from '../components/MobileApp'
import ProductDesign from '../components/ProductDesign'
import Prices from '../components/Prices.jsx'
import Other from '../components/Other'
import Footer from '../components/Footer'

const Home = () => {
  const top = useRef(null)
  const services = useRef(null)
  const catalogue = useRef(null)
  const pricing = useRef(null)

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    })
  }
  return (
    <>
      <header ref={top}>
        <Navbar
          top={() => scrollToSection(top)}
          services={() => scrollToSection(services)}
          catalogue={() => scrollToSection(catalogue)}
          pricing={() => scrollToSection(pricing)}
        />
        <Hero />
      </header>
      <main className='container space'>
        <section ref={services} className='space'>
          <Services />
          <Branding />
          <WebDev />
          <MobileApp />
          <ProductDesign />
        </section>
        <section ref={pricing} className='space'>
          <Prices />
        </section>
        <section ref={catalogue} className='space'>
          <Other />
        </section>
      </main>
      <Footer top={() => scrollToSection(top)} />
    </>
  )
}

export default Home
