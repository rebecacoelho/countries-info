"use client";
import Header from '@/components/Header/Header';
import { usePathname } from 'next/navigation';

const CountryDetailPage = () => {
  const pathname = usePathname()

  return (
    <div>
      <Header />
      <h1>Detalhes de {pathname}</h1>
      {/* Coloque aqui as informações do país com base no slug */}
    </div>
  );
};

export default CountryDetailPage;
