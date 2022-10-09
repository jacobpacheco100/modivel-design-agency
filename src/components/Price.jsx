import React, { useState, useEffect } from 'react'
import { BiChevronDown } from 'react-icons/bi'
import { AiFillCheckSquare } from 'react-icons/ai'
import { AiFillMinusSquare } from 'react-icons/ai'

const Price = ({ plan, price, description, included, notIncluded }) => {
  const [isIncluded, setIsIncluded] = useState(false)
  // create an event listener
  useEffect(() => {
    if (window.innerWidth < 1280) {
      setIsIncluded(false)
    } else {
      setIsIncluded(true)
    }
  }, [window.length])

  const includedItems = included.map((item) => {
    return (
      <li className='included-item'>
        <AiFillCheckSquare className='checked' />
        <span className='item-txt'>{item}</span>
      </li>
    )
  })

  const notIncludedItems = notIncluded.map((item) => {
    return (
      <li className='included-item'>
        <AiFillMinusSquare className='unchecked' />
        <span className='item-txt'>{item}</span>
      </li>
    )
  })

  return (
    <div className='border-2 rounded-[30px] border-base w-full max-w-[350px] p-[30px]'>
      {/* plan name */}
      <span className='p text-base'>{plan}</span>
      {/* price / month */}
      <div>
        <h2 className='heading-2 inline-block'>{price}</h2>
        <span className='p1'>/ Hour</span>
      </div>
      {/* description */}
      <p className='p2 text-gray mt-5'>{description}</p>
      {/* more btn */}
      <div
        onClick={() => setIsIncluded((prev) => !prev)}
        className='flex items-center text-base hover:cursor-pointer mt-3 desktop:hidden'
      >
        <span className='p2 font-medium'>Whats Included</span>
        <BiChevronDown className='text-2xl' />
      </div>

      {/* included list */}
      {isIncluded && (
        <ul className='included-list'>
          {includedItems}
          {notIncludedItems}
        </ul>
      )}

      {/* Get Started btn */}
      <button className='btn-1 w-full mt-10'>Get Started</button>
    </div>
  )
}

export default Price
