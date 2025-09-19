import React, { use } from 'react'
import Country from './Countries/Country'

const Header = ({countriespromise}) => {
 const countriesData =use(countriespromise)
//  console.log(countriesData);
const countries =countriesData.countries
// console.log(countries);

  return (
    <div>
        <div className="navbar bg-neutral text-neutral-content">
  <button className="btn btn-ghost text-xl">daisyUI</button>
</div>

<h2 className='mt-10'>In the Country : {countries.length}</h2>

{
countries.map(country => <Country key={country.cca3} country={country}></Country>)
}
    </div>
  )
}

export default Header