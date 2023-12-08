"use client";
import BackButton from '@/components/BackButton/BackButton';
import CountryDetail from '@/components/CountryDetail/CountryDetail';
import Header from '@/components/Header/Header';
import { usePathname } from 'next/navigation';
import ThemeContext, { ThemeProvider } from '../../context/ThemeContext';
import { useContext } from 'react';

const CountryDetailPage = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const pathname = usePathname()

  return (
    <ThemeProvider>
      <div className={`h-screen ${isDarkMode ? 'bg-gray-900 text-white' : ''}`}>
        <Header />
        <div>
          <BackButton />
        </div>
        <CountryDetail slug={pathname as string} />
      </div>
    </ThemeProvider>
  );
};

export default CountryDetailPage;
