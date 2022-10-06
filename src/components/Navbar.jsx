import React from 'react'

// icons
import logo from '../assets/svg/logo.svg'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'

const Navbar = () => {
  return (
    <div className='border-b border-lightGray fixed top-0 w-screen bg-bg z-40'>
      {/* content */}
      <div className='container flex items-center justify-between h-[60px] '>
        {/* logo */}
        <div className='flex items-center space-x-3 hover:cursor-pointer'>
          <img src={logo} alt='logo' />
          <p className='p2 font-medium text-dark'>modivel</p>
        </div>

        {/* menu */}
        <div className=' tablet:hidden'>
          <HiOutlineMenuAlt3 className='text-3xl text-dark' />
        </div>

        {/* links */}
        <div className='hidden tablet:flex items-center '>
          <a className='nav-link' href='/'>
            Home
          </a>
          <a className='nav-link' href='/'>
            About
          </a>
          <a className='nav-link' href='/'>
            catalogue
          </a>
          <a className='nav-link' href='/'>
            Pricing
          </a>
          <button className='btn-sm ml-6'>Contact</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
