"use client";
import { useContext, useState } from 'react';
import Countries from '@/components/Countries/Countries';
import Header from '@/components/Header/Header';
import Menu from '@/components/Menu/Menu';
import SearchBar from '@/components/searchBar/SearchBar';
import ThemeContext, { ThemeProvider } from '../context/ThemeContext';

export default function Home() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const { isDarkMode } = useContext(ThemeContext);

  const filterByRegion = (region: any) => {
    setSelectedOption(region);
  };

  const handleSearch = (searchValue: any) => {
    setSearchTerm(searchValue); 
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : ''}`}>
      <Header />
      <div>
        <div className="flex md:flex-row justify-between mx-10 md:mx-20 mt-9 flex-col gap-6">
          <SearchBar onSearch={handleSearch} />
          <Menu filterByRegion={filterByRegion} selectedOption={selectedOption} />
        </div>

        <div className='flex justify-center items-center my-9 gap-22'>
          <Countries selectedOption={selectedOption} searchTerm={searchTerm} /> 
        </div>
      </div>
    </div>
  );
}
