import ThemeContext from '@/context/ThemeContext';
import Link from 'next/link'
import React, { useContext } from 'react'

const BackButton = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div>
        <Link href='/'>
        <div className={`flex shadow-md gap-2 px-8 py-2.5 max-w-fit my-20 ml-20 ${isDarkMode ? 'bg-gray-800 text-white shadow-lg' : 'bg-white'}`}>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={isDarkMode ? 'text-white' : 'text-black'}>
              <path d="M21 12L3 12" stroke={isDarkMode ? '#fff' : '#121214'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8 17L3 12L8 7" stroke={isDarkMode ? '#fff' : '#121214'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>Back</div>
        </div>
        </Link>
    </div>
  )
}

export default BackButton