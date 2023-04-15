import React from 'react'
import { useWeather } from '../context/WeatherContext'
import cities from '../cities.json'
import { useTodayWeather } from '../context/TodayWeatherContext';

function Header() {
    const {setCity} = useWeather();
    const {setCityTwo} = useTodayWeather();
    
    
    const handleChange = (e)=>{
        setCity(e.target.value)
        setCityTwo(e.target.value)
    
        
    }
    
   

  return (
    <div>
        <select onChange={handleChange}>
            {cities.map((city)=>(
                <option key={city.id}> {city.name}</option>
            ))}
        </select>
        



    </div>
  )
}

export default Header