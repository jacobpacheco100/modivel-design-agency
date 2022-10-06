import React from 'react'
import Spline from '@splinetool/react-spline'

const MobileApp = () => {
  return (
    <main className='flex flex-col desktop:flex-row-reverse desktop:items-center desktop:justify-between'>
      {/* 3D IPHONE ( SPLINE ) */}
      <section className='w-full h-[50vw] desktop:max-w-[650px] desktop:h-[1000px] '>
        <Spline scene='https://prod.spline.design/hgrD3xetoGQ58QCj/scene.splinecode' />
      </section>
      {/* text */}
      <section className='desktop:text-right mt-10'>
        <h2 className='heading-2'>Mobile App</h2>
        <p className='p1 mt-5 max-w-[470px]'>
          Additionaly we offer mobile app developement. Complexity of mobile
          applications can range from a simple blog to an online store.
        </p>
        {/* plus's */}
        <ul className='plus-group'>
          <li>
            <span className='plus desktop:hidden'>+</span>2D / 3D Designs
            <span className='plus-r'>+</span>
          </li>

          <li>
            <span className='plus desktop:hidden'>+</span> Ai, PNG, and SVG
            files<span className='plus-r'>+</span>
          </li>

          <li>
            <span className='plus desktop:hidden'>+</span>Unlimited Edits
            <span className='plus-r'>+</span>
          </li>

          <li>
            <span className='plus desktop:hidden'>+</span>Social Media Graphics
            <span className='plus-r'>+</span>
          </li>

          <li>
            <span className='plus desktop:hidden'>+</span>Product Design Example
            <span className='plus-r'>+</span>
          </li>
          <li>
            <span className='plus desktop:hidden'>+</span>3-5 logo Variations
            <span className='plus-r'>+</span>
          </li>
        </ul>
        <button className='btn-1 mt-10'>Our Mobile Apps</button>
      </section>
    </main>
  )
}

export default MobileApp
