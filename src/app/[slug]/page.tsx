"use client";
import BackButton from '@/components/BackButton/BackButton';
import Header from '@/components/Header/Header';
import { usePathname } from 'next/navigation';

const CountryDetailPage = () => {
  const pathname = usePathname()

  return (
    <div>
      <Header />
      <div>
        <BackButton />
      </div>
      <h1>Detalhes de {pathname}</h1>
      {/* Coloque aqui as informações do país com base no slug */}
    </div>
  );
};

export default CountryDetailPage;
