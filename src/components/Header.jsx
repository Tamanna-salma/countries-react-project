import React, { use, useState } from 'react'
import Country from './Countries/Country'

const Header = ({countriespromise}) => {
  const [visitedcountries,setvisitedcountries]=useState([]);
  const [visitedFlags,setvisitedFlags]=useState([])
  const [reset,setreset] =useState('');

const handleVisitedCountry =(country)=>{
  // console.log("visited country", country);
  const newvisitedCountries =[...visitedcountries, country];
  setvisitedcountries(newvisitedCountries);
}

const visitflag=(flag)=>{
  // console.log("added" ,flag);
  const newVisitedFlag=[...visitedFlags, flag]
  setvisitedFlags(newVisitedFlag);
} 

 const resetHandler =()=>{
  console.log("clicked");
  setvisitedcountries([]);
  setvisitedFlags([]);

 }

 const countriesData =use(countriespromise)
//  console.log(countriesData);
const countries =countriesData.countries
// console.log(countries);

  return (
    <div>
        <div className="navbar bg-neutral text-neutral-content">
  <button className="btn btn-ghost text-xl">Hello World</button>
</div>

<h2 className='mt-10 text-center text-3xl text-cyan-500 font-bold'>In the Country : {countries.length}</h2>


<div className='flex flex-col-reverse md:flex-row p-8 gap-5' >

    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:w-3/4  mt-10'>   
    {
countries.map(country => <Country key={country.cca3} country={country} handleVisitedCountry={handleVisitedCountry} visitflag={visitflag} resetHandler={resetHandler} ></Country>)

}

</div>

<div className=''>
<h3 className='mt-10 text-center sm:text-sm md:text-xl text-orange-500 font-bold px-3'>Total country visited: {visitedcountries.length}</h3>
<h4 className=' sm:text-sm md:text-xl text-center text-blue-500 font-bold px-4 mt-2'>visited flags : {visitedFlags.length}</h4>

<ol className='text-center mt-3 text-xl text-fuchsia-600 list-decimal list-inside '>
  {
    visitedcountries.map(country=><li key={country.cca3.cca3}>{country.name.common}</li>)
  }
</ol>

<div className='w-40 space-y-3 px-7 mt-3 mx-auto'>
  {
    visitedFlags.map((flag ,index) => <img className='p-2 shadow-md' src={flag} key={index}></img>)

  }
</div>
</div>

</div>
    </div>
  )
}

export default Header