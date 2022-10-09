import React from 'react'
import Price from './Price'

const Prices = () => {
  return (
    <div className='flex flex-col items-center space-y-10 desktop:space-y-0 desktop:flex-row desktop:justify-between '>
      {/* basic */}
      <span className='desktop:scale-90'>
        <Price
          plan={'basic'}
          price={'$45'}
          description={
            'For those who just need the basic setup for their startup or hobby'
          }
          included={[
            'Up To 5 Revisions',
            '2D Custom Logo + files',
            '1-3 Page Website',
            '1 Social Media Setup',
          ]}
          notIncluded={[
            'Mobile App',
            '3D Web/Logo Assets',
            'Site Paid Transactions',
            'Product Design',
          ]}
        />
      </span>
      {/* kickstart */}
      <Price
        plan={'Kickstart'}
        price={'$65'}
        description={'Stand out among competitor without breaking the bank'}
        included={[
          'Unlimited Revisions',
          '2D Custom Logo + files',
          '1-8 Page Website',
          '1-3 Social Media Setup',
          '3D Web/Logo Assets',
        ]}
        notIncluded={['Mobile App', 'Site Paid Transactions', 'Product Design']}
      />

      {/* pro */}
      <span className='desktop:scale-90'>
        <Price
          plan={'Pro'}
          price={'$90'}
          description={
            'All you need to get your bisnuess started with momentum'
          }
          included={[
            'Unlimited Revisions',
            '2D Custom Logo + files',
            '10+ Page Website',
            '4+ Social Media Setup',
            'Mobile App',
            '3D Web/Logo Assets',
            'Site Paid Transactions',
            'Product Design',
          ]}
          notIncluded={[]}
        />
      </span>
    </div>
  )
}

export default Prices
