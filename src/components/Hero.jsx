import React from 'react'
import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <>
      <main className='container mt-[60px] h-[700px] flex justify-between items-center relative overflow-x-hidden'>
        <section className='space-y-10 tablet:min-w-[400px]'>
          <h1 className='heading-1'>
            Modivel <br />
            Design <br />
            Agency
          </h1>
          <p className='p1 max-w-[400px]'>
            Welcome, we design and develope your brand from the ground up to
            stand out among your competitors on the web.
          </p>
          <button className='btn-1'>Get Started</button>
        </section>
        <section className='grow h-full min-w-[678px] '>
          <Spline scene='https://prod.spline.design/vmts-7ab4A310efV/scene.splinecode' />
        </section>
      </main>
    </>
  )
}

export default Hero
