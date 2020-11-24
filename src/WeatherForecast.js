import React, { useState } from "react";
import axios from "axios";
import Forecast from "./Forecast";



export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function dispalyForecast(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="Forecast row">
          <Forecast data={forecast.list[0]} />
          <Forecast data={forecast.list[1]} />
          <Forecast data={forecast.list[2]} />
          <Forecast data={forecast.list[3]} />
          <Forecast data={forecast.list[4]} />
          <Forecast data={forecast.list[5]} />
      </div>
    );
  } else {
    let apiKey = "65b9beaa8544369015325811bb427882";
    let apiFiveEndPoint = "https://api.openweathermap.org/data/2.5/forecast";
    let apiUrl = `${apiFiveEndPoint}?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(dispalyForecast);


    return null;
  }
}