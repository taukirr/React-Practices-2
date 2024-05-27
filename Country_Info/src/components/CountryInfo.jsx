import React from 'react'

function CountryInfo({data}) {

  function formatePopu(population){
    const corers = Math.floor(population/10000000)
    const lakh = Math.floor(population % 10000000 / 100000 )
    const k = Math.floor(population % 100000 / 1000)
    const hundred = Math.floor(population % 1000 / 100)
    const unit = Math.floor(population % 100 / 10)

    let formattedPopulation = '';

    if (corers > 0) {
      formattedPopulation += corers + " Corer "
    }
    if(lakh > 0) {
      formattedPopulation += lakh + " Lakh "
    }
    if(k > 0) {
      formattedPopulation += k + " Thousand "
    }
    if(hundred > 0) {
      formattedPopulation += hundred + " Hundred "
    }
    if(unit > 0) {
      formattedPopulation += unit
    }
    return formattedPopulation
  }
  const population = data.population
  const formattedPopulation = formatePopu(population)
  return (
    <>
    <div className='flex items-center justify-center pt-5'>
      <div className='max-w-3xl w-full px-5 py-10 rounded-xl  
                     shadow-md flex flex-col items-center'>
          <img className='w-96 h-56 object-cover' 
          src={data.flags.svg} alt={`Flag of ${data.name.common}`} />
          <h2 className='text-2xl text-black pt-5'>{data.name.common}</h2>
          <h3 className='text-xl text-black pt-5'>Capital - {data.capital}</h3>
          <h3 className='text-xl text-black pt-5'>Continent - {data.continents}</h3>
          <h3 className='text-xl text-black pt-5'>Sub-Continent - {data.subregion}</h3>
          <h3 className='text-xl text-black pt-5'>Time-zone - {Object.values(data.timezones).toString().split(',').join(', ')}</h3>
          <h3 className='text-xl text-black pt-5'>Population - {formattedPopulation}</h3>
          <h3 className='text-xl text-black pt-5'>Currency - {data.currencies[Object
            .keys(data.currencies)[0]].name}{' '} - {Object.keys(data.currencies)[0]}</h3>
          <h3 className='text-xl text-black pt-5'>Comman Languages - {Object.values(
            data.languages).toString().split(',').join(', ')}</h3>
          <h3 className='text-xl text-black pt-5'>Area - {`${data.area} km²`}</h3>
          { data.borders && data.borders.length > 0 && (
            <h3 className='text-xl text-black pt-5'>Neighbouring Countries - {Object.values(
              data.borders).toString().split(',').join(', ')}</h3>
            )}
          <h3 className='text-xl text-black pt-5'>Phone code - {data.idd.root}{data.idd.suffixes[0]}</h3>
          <h3 className='text-xl text-black pt-5'>Capital Latitudes and Longitudes - {data.capitalInfo.latlng[0]} , {data.capitalInfo.latlng[1]}</h3>

          <img src={data.coatOfArms.svg} className='w-16 h-16' alt="" />
      </div>
    </div>  
    </>
  )
}

export default CountryInfo