import { useState} from 'react';
import CountryInfo from '../components/CountryInfo';

function UseCountry() {
    const [countryName, setCountryName] = useState('')
    const [data, setData] = useState(null);
    const [error, setError] = useState('');

    const handleSearch = () => {

        if(!countryName)
            {
                setError('The input field cannot be empty!')
                setData(null)
                return
            }

          const Api = fetch(`https://restcountries.com/v3.1/name/${countryName.trim()}?fullText=true`)
            .then((resp) => resp.json())
            .then((info) => {
                if (info.message === "Not Found") {

                    setError("Country is no available")
                    setData(null)
                }
                else if (info.length === 0){

                    setError('Please! Enter valid country name')
                    setData(null)
                }
                else{

                    setError(" ")
                    setData(info[0])
                }
            })
                .catch(() => {
                    setError("An error occurred while fetching data")
                    setData(null)
                })
    }    

    return (
        <>
        <div className='max-w-3xl mx-auto my-2 py-5 rounded-lg bg-neutral-100 shadow-md'>
            <div className='flex items-center justify-center'>
                <input 
                type="text"
                className='px-4 py-2 border border-gray-300 rounded outline-none text-base
                w-full sm:w-auto'
                placeholder='Enter Country to Search'
                value={countryName} 
                onChange={(e) => setCountryName(e.target.value)}/>
                <button
                className='px-4 py-2 ml-1 bg-blue-500 text-white rounded hover:bg-blue-600 
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50' 
                onClick={handleSearch}>
                Search
                </button>
            </div>
        </div>
        <div className='max-w-3xl mx-auto'>
            {error && <h2>{error}</h2>}
            {data && (<CountryInfo data={data}/>)}
        </div>
        </>
    )
}

export default UseCountry;
