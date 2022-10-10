import React from 'react'

const Menu = ({ isMenu, toggleMenu, services, pricing, catalogue, about }) => {
  return (
    <div
      className={` fixed top-0 right-0 w-[50vw] h-screen bg-[#F2F5FF] z-30 flex flex-col items-right pr-[20px] justify-center shadow-sm ease-in-out duration-300 ${
        isMenu ? ' translate-x-0' : 'translate-x-full'
      } `}
    >
      <ul
        className=' text-xl font-bold text-right space-y-10 pb-20'
        onClick={toggleMenu}
      >
        <li className='text-gray' onClick={services}>
          Services |
        </li>
        <li className='text-lightGray' onClick={pricing}>
          Pricing
        </li>
        <li className='text-lightGray' onClick={catalogue}>
          Catalogue
        </li>
        <li className='text-lightGray' onClick={about}>
          About
        </li>
      </ul>
    </div>
  )
}

export default Menu
