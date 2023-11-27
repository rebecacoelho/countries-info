import Link from 'next/link'
import React from 'react'

const BackButton = () => {
  return (
    <div>
        <Link href='/'>
            <div className='flex shadow-md gap-2 px-8 py-2.5 max-w-fit my-20 ml-20'>
               <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21 12L3 12" stroke="#121214" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8 17L3 12L8 7" stroke="#121214" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
               </div>
               <div>Back</div>
            </div>
        </Link>
    </div>
  )
}

export default BackButton