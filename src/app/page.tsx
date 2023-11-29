"use client";
import { SetStateAction, useState } from 'react';
import Countries from '@/components/Countries/Countries';
import Header from '@/components/Header/Header';
import Menu from '@/components/Menu/Menu';
import SearchBar from '@/components/searchBar/SearchBar';

export default function Home() {
  const [selectedOption, setSelectedOption] = useState(null); 

  const filterByRegion = (region: SetStateAction<null>) => {
    setSelectedOption(region); 
  };

  return (
    <>
      <Header />
      <div className="flex justify-between mx-16 mt-9">
        <SearchBar />
        <Menu filterByRegion={filterByRegion} selectedOption={selectedOption} />
      </div>

      <div className='flex justify-center items-center my-9 gap-22'>
          <Countries selectedOption={selectedOption} />
      </div>
    </>
  )
}
