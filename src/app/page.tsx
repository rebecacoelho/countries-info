"use client";
import { useState } from 'react';
import Countries from '@/components/Countries/Countries';
import Header from '@/components/Header/Header';
import Menu from '@/components/Menu/Menu';
import SearchBar from '@/components/searchBar/SearchBar';

export default function Home() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [searchTerm, setSearchTerm] = useState(''); // Novo estado para armazenar o termo de pesquisa

  const filterByRegion = (region: any) => {
    setSelectedOption(region);
  };

  const handleSearch = (searchValue: any) => {
    setSearchTerm(searchValue); 
  };

  return (
    <>
      <Header />
      <div className="flex justify-between mx-16 mt-9">
        <SearchBar onSearch={handleSearch} />
        <Menu filterByRegion={filterByRegion} selectedOption={selectedOption} />
      </div>

      <div className='flex justify-center items-center my-9 gap-22'>
        <Countries selectedOption={selectedOption} searchTerm={searchTerm} /> 
      </div>
    </>
  );
}

