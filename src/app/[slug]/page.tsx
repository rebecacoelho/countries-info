"use client";
import BackButton from '@/components/BackButton/BackButton';
import CountryDetail from '@/components/CountryDetail/CountryDetail';
import Header from '@/components/Header/Header';
import { usePathname } from 'next/navigation';
import { ThemeProvider } from '../../context/ThemeContext';

const CountryDetailPage = () => {
  const pathname = usePathname()

  return (
    <ThemeProvider>
      <div>
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
