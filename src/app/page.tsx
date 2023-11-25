import Countries from '@/components/Countries/Countries'
import CountryCard from '@/components/CountryCard/CountryCard'
import Header from '@/components/Header/Header'
import Menu from '@/components/Menu/Menu'
import SearchBar from '@/components/searchBar/SearchBar'

export default function Home() {
  return (
  <>
    <Header />
    <div className="flex justify-between mx-16 mt-9">
      <SearchBar />
      <Menu />
    </div>

    <div className='flex justify-center items-center my-9 gap-22'>
      <div className='grid grid-cols-4 gap-22'>
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
      </div>
    </div>
  </>
  )
}