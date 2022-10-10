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
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const scrollToService = () =>
    window.scrollTo({ top: 1150, behavior: 'smooth' })

  const scrollToCat = () => window.scrollTo({ top: 6000, behavior: 'smooth' })

  const scrollToPricing = () =>
    window.scrollTo({ top: 5000, behavior: 'smooth' })

  const scrollToAbout = () => window.scrollTo({ top: 7000, behavior: 'smooth' })

  return (
    <>
      <Navbar
        top={scrollToTop}
        services={scrollToService}
        catalogue={scrollToCat}
        pricing={scrollToPricing}
        about={scrollToAbout}
      />
      <Hero />
      <main className='container space'>
        <Services />
        <Branding />
        <WebDev />
        <MobileApp />
        <ProductDesign />
        <Prices />
        <Other />
      </main>
      <Footer top={scrollToTop} />
    </>
  )
}

export default Home
