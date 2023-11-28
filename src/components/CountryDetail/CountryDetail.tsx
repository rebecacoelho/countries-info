import Image from 'next/image';
import { useEffect, useState } from 'react';

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
    <div className='flex mx-20 gap-40 items-center'>
        <div className='max-w-lg max-h-96'>
            <Image className='max-w-lg max-h-96' width={555} height={400} src={country.flags.svg} alt={`Flag of ${country.name.common}`} />
        </div>
        <div>
            <div>
                <h1 className='text-3xl	font-extrabold mb-8'>{country.name.common}</h1>
            </div>
            <div className='flex gap-28'>
                <div className='flex flex-col capitalize'>
                    <span className='mb-3'><strong>Native Name: &nbsp;</strong>{country.name.official}</span>
                    <span className='mb-3'><strong>Population: &nbsp;</strong>{formattedPopulation}</span>
                    <span className='mb-3'><strong>Region: &nbsp;</strong>{country.region}</span>
                    <span className='mb-3'><strong>Sub Region: &nbsp;</strong>{country.subregion}</span>
                    <span className='mb-3'><strong>Capital: &nbsp;</strong>{country.capital}</span>
                </div>
                <div className='flex flex-col capitalize'>
                    <span className='mb-3 lowercase'><strong>Top Level Domain: &nbsp;</strong>{country.tld}</span>
                    <span className='mb-3'><strong>Currencies: &nbsp;</strong>{currencyCountry.value.name}</span>
                    <span className='mb-3'><strong>Languages: &nbsp;</strong>{languages.join(', ')}</span>
                </div>
            </div>
            <div className='flex mt-16'>
                <div>
                    <strong>Border Countries: &nbsp; &nbsp;</strong>
                </div>
                <div className='flex gap-6 justify-center items-center'>
                    {country.borders.map(border => (
                        <div className='flex justify-center items-center shadow-md gray h-4 py-3 px-5' key={border}>{border}</div>
                    ))}
               </div>
            </div>
        </div>
    </div>
  );
};

export default CountryDetail;
