import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";


const WeatherContext = createContext();
export const WeatherProvider = ({children})=> {
    const [weather, setWeather] = useState();
    const [city, setCity] = useState("Adana");
    const [current, setCurrent] = useState();

    useEffect (()=>{
        const api= `11ad6ff7c9841b0807df6c0bdc0d915c`
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api}&units=metric&lang=tr&cnt=7`
        axios.get(url).then((response)=>{
            setWeather(response.data.list);
            response.data.list.map((item)=>{
                setCurrent(item.main)
            
        })
    })}, [city])
const values = {weather, setWeather, city, setCity, current}


return (
    <WeatherContext.Provider value={values} >{children}</WeatherContext.Provider>
)
}
export const useWeather = ()=> useContext(WeatherContext);

