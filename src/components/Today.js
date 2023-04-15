import React, { useState, useEffect } from "react";
import { useTodayWeather } from "../context/TodayWeatherContext";
import "./styles.css";

function Today() {
  const { weatherTwo, currentTwo } = useTodayWeather();
  const [day, setDay] = useState("");
  const icon = `http://openweathermap.org/img/w/`;

  useEffect(() => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date().getDay();
    setDay(days[today]);
  }, []);

  return (
    <div>
      <div className="weather-container">
        {currentTwo && weatherTwo && weatherTwo.length > 0 && (
          <div>
            <h1>{day}</h1>
            <img src={icon + weatherTwo[0].weather[0].icon + ".png"} alt="" />
            <br />
            <h3>{weatherTwo[0].weather[0].description}</h3>
            <h3>Ortalama: {weatherTwo[0].main.temp} °C</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default Today;
