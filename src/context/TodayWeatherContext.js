import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import cities from '../cities.json'

const TodayWeatherContext = createContext();

export const TodayWeatherContextProvider = ({ children }) => {
  const [weatherTwo, setWeatherTwo] = useState();
  const [cityTwo, setCityTwo] = useState({
    "id": 1,
    "name": "Adana",
    "latitude": "37.0000",
    "longitude": "35.3213",
    "population": 2183167,
    "region": "Akdeniz"
  });
  const [currentTwo, setCurrentTwo] = useState();

  useEffect(() => {
    const api = `11ad6ff7c9841b0807df6c0bdc0d915c`;
    const lat = cityTwo.latitude;
    const lon = cityTwo.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}`;

    axios
      .get(url)
      .then((response) => {
        setCurrentTwo(response.data.main);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [cityTwo]);

  const values = { weatherTwo, setWeatherTwo, cityTwo, setCityTwo, currentTwo };

  return (
    <TodayWeatherContext.Provider value={values}>
      {children}
    </TodayWeatherContext.Provider>
  );
};

export const useTodayWeather = () => useContext(TodayWeatherContext);
