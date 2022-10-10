import React, { useState } from 'react'
import Menu from './Menu'

// icons
import logo from '../assets/svg/logo.svg'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'

const Navbar = ({ top, services, pricing, catalogue, about }) => {
  const [isMenu, setIsMenu] = useState(false)
  const toggleMenu = () => setIsMenu((prev) => !prev)
  return (
    <div className='border-b border-lightGray fixed top-0 w-screen bg-bg z-40'>
      {/* content */}
      <div className='container flex items-center justify-between h-[60px] '>
        {/* logo */}
        <div
          className='flex items-center space-x-3 hover:cursor-pointer'
          onClick={top}
        >
          <img src={logo} alt='logo' />
          <p className='p2 font-medium text-dark'>modivel</p>
        </div>

        {/* menu */}
        <div className=' tablet:hidden z-50' onClick={toggleMenu}>
          <HiOutlineMenuAlt3 className='text-3xl text-dark' />
        </div>

        <Menu
          isMenu={isMenu}
          toggleMenu={toggleMenu}
          top={top}
          services={services}
          pricing={pricing}
          catalogue={catalogue}
          about={about}
        />

        {/* links */}
        <div className='hidden tablet:flex items-center '>
          <a className='nav-link hover:cursor-pointer' onClick={services}>
            Services
          </a>
          <a className='nav-link hover:cursor-pointer' onClick={pricing}>
            Pricing
          </a>
          <a className='nav-link hover:cursor-pointer' onClick={catalogue}>
            Catalogue
          </a>
          <a className='nav-link hover:cursor-pointer' onClick={about}>
            About
          </a>
          <button className='btn-sm ml-6'>Contact</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
