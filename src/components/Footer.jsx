import React from 'react'
import logo from '../assets/svg/logo-footer.svg'

// backToTop
import { MdArrowUpward } from 'react-icons/md'

// media icons
import { BsTwitter } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsSlack } from 'react-icons/bs'

const Footer = ({ top }) => {
  return (
    <main className=' mt-40 bg-darker py-28 desktop:py-10'>
      {/* footer content */}
      <div className='container flex flex-col items-center space-y-14 desktop:space-y-0 desktop:flex-row desktop:space-x-20 desktop:justify-start relative'>
        {/* logo and about */}
        <div className='flex flex-col items-center desktop:flex-row desktop:space-x-10'>
          <img
            src={logo}
            alt='logo'
            className='hover:cursor-pointer'
            onClick={top}
          />
          <p className='text-[14px] text-[#646284] font-medium text-center max-w-[225px] mt-7 desktop:max-w-[300px] desktop:mt-0 desktop:text-left'>
            We are a proud startup design agency focused on making beutifull and
            intelligent design desicions for our clients
          </p>
        </div>
        {/* media links */}
        <div className='text-blueGray text-3xl desktop:text-xl flex justify-between w-[190px]'>
          <BsTwitter className='hover:cursor-pointer' />
          <BsFacebook className='hover:cursor-pointer' />
          <BsLinkedin className='hover:cursor-pointer' />
          <BsSlack className='hover:cursor-pointer' />
        </div>
        {/* contact */}
        <div className='flex flex-col items-center'>
          <p className=' font-medium text-darkGray text-[14px]'>
            813 - 989 -7853
          </p>
          <p className=' font-medium text-darkGray text-[14px]'>
            reachmodivel@gmail.com
          </p>
        </div>
        {/* back to top */}
        <button className='back-to-top ' onClick={top}>
          <MdArrowUpward />
        </button>
      </div>
    </main>
  )
}

export default Footer
