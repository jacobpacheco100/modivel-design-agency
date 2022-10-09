import React from 'react'
import logo from '../assets/svg/logo-footer.svg'

// media icons
import { BsTwitter } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsSlack } from 'react-icons/bs'

const Footer = () => {
  return (
    <main className=' mt-40 bg-dark py-28'>
      <div className='flex flex-col items-center space-y-14'>
        <div className='flex flex-col items-center'>
          <img src={logo} alt='logo' />
          <p className='text-[14px] text-[#646284] font-medium text-center max-w-[225px] mt-7'>
            Are you a designer, developer, or software developer? If your
            looking for a hiring opportuity, click the link.
          </p>
        </div>
        <div className='text-blueGray text-3xl flex justify-between w-[190px]'>
          <BsTwitter />
          <BsFacebook />
          <BsLinkedin />
          <BsSlack />
        </div>
        <div className='flex flex-col items-center'>
          <p className='p font-medium text-darkGray text-[14px]'>
            813 - 989 -7853
          </p>
          <p className='p font-medium text-darkGray text-[14px]'>
            reachmodivel@gmail.com
          </p>
        </div>
      </div>
    </main>
  )
}

export default Footer
