import React from 'react'

// svgs
import branding from '../assets/svg/branding.svg'
import product from '../assets/svg/product.svg'
import web from '../assets/svg/web.svg'

const Services = () => {
  return (
    <main className=' mt-16 flex flex-col space-y-[35px] items-center justify-center desktop:flex-row desktop:space-y-0 desktop:space-x-[35px]'>
      {/* branding */}
      <div className='w-[315px] h-[219px] border-2 border-base rounded-xl flex flex-col items-center justify-center space-y-5'>
        <img src={branding} alt='branding' />
        <p className='services-txt'>Branding</p>
      </div>

      {/* product design  */}
      <div className='w-[315px] h-[219px] border-2 border-base rounded-xl flex flex-col items-center justify-center space-y-5'>
        <img src={product} alt='branding' />
        <p className='services-txt'>Product Design</p>
      </div>

      {/* web dev */}
      <div className='w-[315px] h-[219px] border-2 border-base rounded-xl flex flex-col items-center justify-center space-y-5'>
        <img src={web} alt='branding' />
        <p className='services-txt'>Web Development</p>
      </div>
    </main>
  )
}

export default Services
