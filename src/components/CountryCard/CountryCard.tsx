import Image from 'next/image'
import React from 'react'
import germany from '../../../public/germany.svg'

const CountryCard = () => {
  return (
    <div className='bg-white shadow-md w-80'>
        <div>
            <Image className='w-80' src={germany} alt='germany flag'/>
        </div>
        <div className='flex flex-col px-7'>
            <div className='mt-8'>
                <strong className='text-2xl'>Germany</strong>
            </div>
            <div className='flex flex-col mt-4 mb-8'>
                <span><strong>Population: </strong><span className='text-gray-600'>81,770,900</span></span>
                <span><strong>Region: </strong><span className='text-gray-600'>Europe</span></span>
                <span><strong>Capital: </strong><span className='text-gray-600'>Berlin</span></span>
            </div>
        </div>
    </div>
  )
}

export default CountryCard