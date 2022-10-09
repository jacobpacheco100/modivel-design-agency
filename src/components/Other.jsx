import React from 'react'
import { BiLinkExternal } from 'react-icons/bi'

const Other = () => {
  return (
    <main className='grid gap-10 laptop:grid-cols-2'>
      {/* catalogue */}
      <div className='bg-dark border-2 box laptop:col-span-2 group hover:bg-black'>
        <BiLinkExternal className='link-btn text-white' />
        <h2 className='font-bold text-h2sm tablet:text-h2 text-white'>
          View Our Catalogue
        </h2>
        <p className='text-[#A09EBA] group-hover:text-[#C2C2C2]'>
          We have loads of previous client work such as logos, website, and IOS
          Apps, you can take a look at to see if were the right fit for you.
        </p>
      </div>

      {/* Hiring */}
      <div className=' border-2 box group hover:bg-base2 hover:border-base'>
        <BiLinkExternal className='link-btn text-dark  group-hover:text-white' />
        <h2 className='font-bold text-h2sm tablet:text-h2 text-dark group-hover:text-white'>
          Hiring Now!
        </h2>
        <p className='p1 group-hover:text-lightGray'>
          Are you a designer, developer, or software developer? If your looking
          for a hiring opportuity.
        </p>
      </div>

      {/* Questions */}
      <div className='border-2 box group hover:bg-[#F87242] hover:border-[#F87242]'>
        <BiLinkExternal className='link-btn text-dark group-hover:text-white' />
        <h2 className='font-bold text-h2sm tablet:text-h2 text-dark group-hover:text-white'>
          Questions?
        </h2>
        <p className='p1 group-hover:text-[#E7D2C6]'>
          Need a little more info on our plans? reach out to our support team or
          email us directly via email.
        </p>
      </div>
    </main>
  )
}

export default Other
