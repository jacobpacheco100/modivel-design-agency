import React from 'react'
import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <>
      <main className='mt-[60px] h-[700px] flex justify-between items-center'>
        <section className='txt-group-1'>
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
        <section className='grow h-full hidden desktop:block'>
          <Spline scene='https://prod.spline.design/5YNozaAcQyWK21gO/scene.splinecode' />
        </section>
      </main>
    </>
  )
}

export default Hero
