import ThemeContext from '@/context/ThemeContext';
import Image from 'next/image'
import React, { useContext } from 'react'

interface InfoCountry {
    name: string
    population: number;
    region: string;
    capital: string;
    flag: string;
}

const CountryCard = (props: InfoCountry) => {
    const { isDarkMode } = useContext(ThemeContext);
    const formattedPopulation = props.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div className={`shadow-md ${isDarkMode ? 'bg-[#2B3743] text-white' : 'bg-white'}`}>
        <div className='h-48'>
            <Image className='w-full h-full object-cover' width={320} height={192} src={props.flag} alt='germany flag'/>
        </div>
        <div className='flex flex-col px-7'>
            <div className='mt-8'>
                <strong className='text-2xl'>{props.name}</strong>
            </div>
            <div className='flex flex-col mt-4 mb-8'>
                <span><strong>Population: </strong><span className={`text-gray-600 ${isDarkMode ? ' text-white' : ''}`}>{formattedPopulation}</span></span>
                <span><strong>Region: </strong><span className={`text-gray-600 ${isDarkMode ? ' text-white' : ''}`}>{props.region}</span></span>
                <span><strong>Capital: </strong><span className={`text-gray-600 ${isDarkMode ? ' text-white' : ''}`}>{props.capital}</span></span>
            </div>
        </div>
    </div>
  )
}

export default CountryCard