import React, { useState } from "react";
import Loader from 'react-loader-spinner';
import axios from "axios";

import Weather from "./Weather";
import Images from "./Images";
import Prediction from "./Prediction";
import Forecast from "./Forecast";

import "./Form.css";

export default function Form(props){
  const [weatherData, setWeatherData] = useState({ ready: false});
  const [city, setCity] = useState(props.defaultCity);
  
  function callData(response) {
  
    setWeatherData({  
      ready: true, 
      time: new Date(response.data.dt*1000),
      sunrise: new Date(response.data.sys.sunrise*1000),
      sunset: new Date(response.data.sys.sunset*1000),
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: Math.round(response.data.main.humidity),
      cloud:Math.round(response.data.wind.speed),
      hightemp: Math.round(response.data.main.temp_max),
      feeltemp: Math.round(response.data.main.feels_like),
      lowtemp: Math.round(response.data.main.temp_min),
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      city: response.data.name
      
    });
  }

  function handleSearch(event) {
    event.preventDefault();
    search();
  }

  function updateData(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = "65b9beaa8544369015325811bb427882";
    let apiEndPoint = "https://api.openweathermap.org/data/2.5/weather";
    let apiUrl = `${apiEndPoint}?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(callData);
  }

  if (weatherData.ready) {
    return(
        <div className="Form">
      <form onSubmit={handleSearch}>
        <div className="row">
          <div className="col-6">
            <input
              type="text"
              placeholder="Enter Location"
              className="form-control"
              autoFocus="on"
              autoComplete="off"
              onChange={updateData}
            />
          </div>
          <div className="col">
            <button type="submit">
              <i className="fas fa-search-location"></i>
            </button>
          </div>
        </div>
      </form>
      <Weather data={weatherData} />
      <Images />
      <Prediction info={weatherData} />
      <h5>Forecast</h5>
      <Forecast />
    </div>
    );
  } else {
    search();
    return <Loader
         type="Rings"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={0} 
      />;
  }
  
    
  }  
