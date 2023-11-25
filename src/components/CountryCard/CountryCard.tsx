import Image from 'next/image'
import React from 'react'
import germany from '../../../public/germany.svg'

interface InfoCountry {
    name: string
    population: number;
    region: string;
    capital: string;
    flag: string;
}

const CountryCard = (props: InfoCountry) => {
    const formattedPopulation = props.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div className='bg-white shadow-md w-80'>
        <div className='w-80 h-48'>
            <Image className='w-full h-full object-cover' width={320} height={192} src={props.flag} alt='germany flag'/>
        </div>
        <div className='flex flex-col px-7'>
            <div className='mt-8'>
                <strong className='text-2xl'>{props.name}</strong>
            </div>
            <div className='flex flex-col mt-4 mb-8'>
                <span><strong>Population: </strong><span className='text-gray-600'>{formattedPopulation}</span></span>
                <span><strong>Region: </strong><span className='text-gray-600'>{props.region}</span></span>
                <span><strong>Capital: </strong><span className='text-gray-600'>{props.capital}</span></span>
            </div>
        </div>
    </div>
  )
}

export default CountryCard