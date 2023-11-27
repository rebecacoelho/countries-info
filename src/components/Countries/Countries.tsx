"use client";

import { useEffect, useState } from "react";
import CountryCard from "../CountryCard/CountryCard";
import Link from "next/link";

interface Country {
    name: {
      common: string;
    };
    population: number;
    region: string;
    capital: string;
    flags: {
        svg: string;
    }
}

interface InfoCountry {
    name: string
    population: number;
    region: string;
    capital: string;
    flag: string;
}

function Countries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all')
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

    const infoCountries = countries.map((country: Country) => {
        const countryName = country.name.common;
        const countryPopulation = country.population;
        const countryCapital = country.capital?.[0];
        const countryRegion = country.region
        const countryFlag = country.flags.svg

        return { name: countryName, population: countryPopulation, region: countryRegion, capital: countryCapital, flag: countryFlag };
    });

  const countriesData: InfoCountry[] = infoCountries
  console.log(infoCountries)

  return (
    <div className='grid grid-cols-4 gap-22'>
        {countriesData.map((country: InfoCountry, index: number) => (
            <Link href={`${encodeURIComponent(country.name.replace(/\s/g, '').toLowerCase())}`} key={index}>
              <CountryCard name={country.name} population={country.population} capital={country.capital} region={country.region} flag={country.flag}/>
          </Link>
        ))}
    </div>
  );
}

export default Countries;
