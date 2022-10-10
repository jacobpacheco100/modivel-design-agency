import React from 'react'
import img from '../assets/img/brand3.png'

const Branding = () => {
  return (
    <main className='flex flex-col justify-between desktop:flex-row-reverse desktop:items-center '>
      {/* image */}
      <img
        src={img}
        className='w-full  rounded-[30px] h-[400px] desktop:h-[537px] desktop:w-[50%] object-cover'
      />
      <section className='mt-10 desktop:mt-0'>
        <h2 className='heading-2'>Branding & Media</h2>
        <p className='p1 max-w-[570px] mt-5 pr-10'>
          One of the most fun parts of starting a business. We get to discover
          what kind of message your brand gives, what it represents! In this
          stage we will design your logo, and social media presence ( IE:
          Twitter profile ). Styles of logos can range fron flat and simple, to
          complex and 3d.
        </p>

        {/* plus's */}
        <ul className='plus-group'>
          <li>
            <span className='plus'>+</span>2D / 3D Designs
          </li>

          <li>
            <span className='plus'>+</span>Ai, PNG, and SVG files
          </li>

          <li>
            <span className='plus'>+</span>Unlimited Edits
          </li>

          <li>
            <span className='plus'>+</span>Social Media Graphics
          </li>

          <li>
            <span className='plus'>+</span>Product Design Example
          </li>
          <li>
            <span className='plus'>+</span>3-5 logo Variations
          </li>
        </ul>
      </section>
    </main>
  )
}

export default Branding
