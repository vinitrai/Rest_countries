import { useState } from "react"
import {useFetch } from "../hooks/useFetch"

import Searchbar from "../components/Searchbar"
import Dropdown from "../components/Dropdown"
import CountryCard from "../components/CountryCard"
const url = `https://restcountries.com/v3.1/all`

export default function AllCountries(){
   const [searchTerm,setSearchTerm] = useState('')
   const [region,setRegion] =useState('')
   const {data :countries,error,isPending} = useFetch(url)
   const countriesList = countries && countries.filter(country =>country.name.common.toLowerCase().includes(searchTerm.toLowerCase())).filter(country =>country.region.toLowerCase().includes(region.toLowerCase()))

   console.log(countriesList);

   function handleSearch(newTerm){
    setSearchTerm(newTerm)
   }
   function handleSelect(newSelect){
      setRegion(newSelect)
   }
   return(
    <section className="container">
         <div className="search--filter">
            <Searchbar handleSearch={handleSearch}/>
            <Dropdown handleSelect={handleSelect}/>
         </div>
      
        
       
       
        <section className="country--list">
        {
         countriesList && countriesList.length > 0 && countriesList.map(country =><CountryCard 
            key={country.name.common}
            country={country}/>)
        }
        {
         error && <p>{error}</p>
        }
        {
         isPending && <p>loading....</p>
        }
        </section>
        
        </section>   
       
    )
}