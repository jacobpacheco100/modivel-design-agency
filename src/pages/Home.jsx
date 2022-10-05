import React from 'react'

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
  return (
    <>
      <Navbar />

      <main className='container'>
        <Hero />
        <Services />
        <Branding />
        <WebDev />
        <MobileApp />
        <ProductDesign />
        <Prices />
        <Other />
        <Footer />
      </main>
    </>
  )
}

export default Home
