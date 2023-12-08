import Image from 'next/image';
import { useEffect, useState } from 'react';
import BorderCountries from '../BorderCountries/BorderCountries';

interface CountryDetailProps {
  slug: string;
}

interface Country {
  name: {
    common: string;
    official: string;
  };
  population: number;
  region: string;
  subregion: string;
  currencies: any
  capital: string;
  flags: {
    svg: string;
  };
  tld: string[]; // domains
  languages: any
  borders: string[];
}

const CountryDetail: React.FC<CountryDetailProps> = ({ slug }) => {
  const [country, setCountry] = useState<Country | null>(null);
  const [languages, setLanguages] = useState<string[]>([]);
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${slug}`);
        const data = await response.json();
  
        if (Array.isArray(data) && data.length > 0) {
          const countryData = data[0];
          setCountry(countryData);
  
          const updatedLanguages: string[] = [];
          const languagesByCountry = countryData.languages;
  
          for (const countryCode in languagesByCountry) {
            if (Object.prototype.hasOwnProperty.call(languagesByCountry, countryCode)) {
              const language = languagesByCountry[countryCode];
              updatedLanguages.push(language);
            }
          }
  
          setLanguages(updatedLanguages);
        }
      } catch (error) {
        console.error('Error fetching country data:', error);
      }
    }
  
    fetchData();
  }, [slug]);

  if (!country) {
    return <div>Loading...</div>;
  }

  function getFirstKeyValue(obj: any): { key: string, value: any } | null {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        return { key, value: obj[key] };
      }
    }
    return null;
  }

  const currencyCountry: any = getFirstKeyValue(country.currencies);
  const formattedPopulation = country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div className='flex flex-col lg:flex-row mx-20 gap-20 lg:gap-40 items-center h-1/2'>
        <div className='max-w-lg max-h-96'>
            <Image className='max-h-96' width={555} height={400} src={country.flags.svg} alt={`Flag of ${country.name.common}`} />
        </div>
        <div>
            <div>
                <h1 className='text-3xl	font-extrabold mb-8 text-center lg:text-left'>{country.name.common}</h1>
            </div>
            <div className='flex flex-col gap-5 lg:flex-row lg:gap-28 pb-5'>
                <div className='flex flex-col capitalize'>
                    <span className='mb-3'><strong>Native Name: &nbsp;</strong>{country.name.official}</span>
                    <span className='mb-3'><strong>Population: &nbsp;</strong>{formattedPopulation}</span>
                    <span className='mb-3'><strong>Region: &nbsp;</strong>{country.region}</span>
                    <span className='mb-3'><strong>Sub Region: &nbsp;</strong>{country.subregion}</span>
                    <span className='mb-3'><strong>Capital: &nbsp;</strong>{country.capital}</span>
                </div>
                <div className='flex flex-col capitalize'>
                    <span className='mb-3'><strong>Top Level Domain: &nbsp;</strong><span className='lowercase'>{country.tld}</span></span>
                    <span className='mb-3'><strong>Currencies: &nbsp;</strong>{currencyCountry.value.name}</span>
                    <span className='mb-3'><strong>Languages: &nbsp;</strong>{languages.join(', ')}</span>
                </div>
            </div>
            {country.borders && country.borders.length > 0 && (
              <div className='flex pb-4 lg:mt-16 items-center'>
                <strong className='w-40'>Border Countries:</strong>
                <div className='flex flex-wrap gap-6 justify-center items-center shadow-md'>
                  {country.borders.map((border: string, index: number) => (
                    <BorderCountries key={index} border={border} />
                  ))}
                </div>
              </div>
            )}
        </div>
    </div>
  );
};

export default CountryDetail;
