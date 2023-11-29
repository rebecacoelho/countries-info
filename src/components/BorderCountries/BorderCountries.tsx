import React, { useEffect, useState } from 'react';

interface Country {
  name: {
    common: string;
  };
  cca3: string;
}

interface InfoBorder {
  border: string;
}

const BorderCountries = (props: InfoBorder) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [borders, setBorders] = useState<string[]>([]);

  const findCountryNameByAbv = (abv: string) => {
    const foundCountry = countries.find((country) => country.cca3 === abv);
    return foundCountry ? foundCountry.name.common : null;
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    const infoBorders: string[] = props.border.split(';');

    const borderCountries: string[] = infoBorders.map((border: string) => {
      const countryName = findCountryNameByAbv(border.trim()); 
      return countryName || '';
    });

    setBorders(borderCountries);
  }, [props.border, countries]);

  return (
    <div>
      {borders.map((border: string, index: number) => (
        <div className='flex justify-center items-center shadow-md gray h-4 py-3.5 px-5' key={index}>
          {border}
        </div>
      ))}
    </div>
  );
};

export default BorderCountries;
