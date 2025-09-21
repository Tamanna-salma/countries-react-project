import React, { useState } from 'react'

const Country = ({ country,handleVisitedCountry ,visitflag ,resetHandler}) => {
  const [visited,setVisited]=useState(false);

  // console.log(country.name.common);
  // console.log(handleVisitedCountry);
  const click = () => {

    console.log("clicked");
// basic system
    // if(visited){
    //   setVisited(false)
    // }else{
    //   setVisited(true)
    // }
    // or second system
    // setVisited(visited?false: true);

    // third system
  setVisited(!visited)
    handleVisitedCountry(country) 
  }

 
  return (
    <div >
      <div className='rounded-lg shadow-lg border-2 p-4 h-2/2'>
        <div  >
          <img src={country.flags.flags.png} alt={country.flags.flags.png} />
        </div>

        <div>
          <h2>Name :    {country.name.common}</h2>
          <h1>continents : {country.continents.continents}</h1>
          <p>population :  {country.population.population}</p>
          <p>Area :{country.area.area} {country.area.area > 300000 ? "Big country" : "Small country"} </p>
          <div className='flex gap-2'>
            <button onClick={click}className='bg-amber-500 sm:text-sm md:tex-xl font-bold sm:rounded-sm md:rounded p-2 mt-2 hover:bg-amber-300'>{visited?'visited': 'Not visited'}
             
              
            </button>

          <button onClick={()=>{visitflag(country.flags.flags.png)}}  className='bg-amber-500 tex-sm font-bold rounded p-2 mt-2 hover:bg-amber-200'> Add visited Flags</button>

          <button onClick={resetHandler}  className='bg-red-500 tex-sm font-bold rounded p-2 mt-2 hover:bg-amber-200'>reset</button>
          </div>
          

        </div>

      </div>
    </div>
  )
}

export default Country