import React from 'react'

// components
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <>
      <Navbar />

      <main className='container'>
        <Hero />
      </main>
    </>
  )
}

export default Home
