import React from 'react'
import Spline from '@splinetool/react-spline'

const WebDev = () => {
  return (
    <div>
      {/* 3D Website ( SPLINE ) */}
      <section className='w-full h-[70vw] desktop:h-[800px]'>
        <Spline scene='https://prod.spline.design/3QzR-FmOd4CZDutQ/scene.splinecode' />
      </section>
      {/* text */}
      <section className='mt-10 flex flex-col desktop:flex-row desktop:justify-between items-start'>
        {/* desktop: left */}
        <div>
          <h2 className='heading-2'>We'll Build Your Website</h2>
          <p className='p1 mt-5 max-w-[720px]'>
            This is our glagship service, we’ll provide you a team of incredibly
            talented developers to make sure your website is built to attract
            your audience. Using the latest web technologies. Our main tools for
            bulding web applications are React Js and Material UI.
          </p>
          <button className='hidden desktop:block btn-1 mt-10'>
            Our Web Projects
          </button>
        </div>

        {/* plus's | desktop: right */}
        <div>
          <ul className='plus-group desktop:mt-0 desktop:text-right'>
            <li>
              <span className='plus desktop:hidden'>+</span>
              2D / 3D Designs
              <span className='plus-r'>+</span>
            </li>

            <li>
              <span className='plus desktop:hidden'>+</span>Ai, PNG, and SVG
              files
              <span className='plus-r'>+</span>
            </li>

            <li>
              <span className='plus desktop:hidden'>+</span>Unlimited Edits
              <span className='plus-r'>+</span>
            </li>

            <li>
              <span className='plus desktop:hidden'>+</span>Social Media
              Graphics<span className='plus-r'>+</span>
            </li>

            <li>
              <span className='plus desktop:hidden'>+</span>Product Design
              Example<span className='plus-r'>+</span>
            </li>
            <li>
              <span className='plus desktop:hidden'>+</span>3-5 logo Variations
              <span className='plus-r'>+</span>
            </li>
          </ul>
          <button className=' desktop:hidden btn-1 mt-10'>
            Our Web Projects
          </button>
        </div>
      </section>
    </div>
  )
}

export default WebDev
