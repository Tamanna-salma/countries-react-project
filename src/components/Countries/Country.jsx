import React from 'react'

const Country = ({country}) => {
    console.log(country.name.common);
  return (
    <div>
        <img src={country.flags.flags.png} alt={country.flags.flags.png}/>
          <h2>Name :{country.name.common}</h2>
        <h1>continents : {country.continents.continents  }</h1>
        <p>population :{country.population.population}</p>
      
    </div>
  )
}

export default Country