import React,{useState, useEffect} from 'react'
import { useWeather } from '../context/WeatherContext'
import './styles.css'

function Card() {
    const {weather, current} = useWeather();
    const [day, setDay] = useState();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    useEffect(() => {
        setDay(daysOfWeek);
        
      }, [weather]);
    
      const icon = `http://openweathermap.org/img/w/`;



  return (
    <div>
        <div className="weather-container">
        {weather &&
  weather.map((item, id) =>
    item.weather.map((weather) => (


      <div key={weather.id}>
        <h1>{day[id]}</h1>
        <img src={icon + weather.icon + ".png"} alt="" />
        <br />
        <h3>{weather.description}</h3>
        <h3>
          Ortalama: {item.main.temp} °C
        </h3>
        
      </div>
    ))
  )}
      </div>
    </div>
  )
}

export default Card