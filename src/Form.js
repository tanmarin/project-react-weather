import React, { useState } from "react";
import Loader from 'react-loader-spinner';
import axios from "axios";

import Weather from "./Weather";
import Images from "./Images";
import Prediction from "./Prediction";
import Forecast from "./Forecast";

import "./Form.css";

export default function Form(props){
   const [weatherData, setWeatherData] = useState({ready:false});

   function callData(response) {
     console.log(response);
    setWeatherData({
      ready:true,
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      cloud:Math.round(response.data.wind.speed),
      hightemp: Math.round(response.data.main.temp_max),
      feeltemp: Math.round(response.data.main.feels_like),
      lowtemp: Math.round(response.data.main.temp_min),
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }
   
    if (weatherData.ready) {
      return(
        <div className="Form">
      <form>
        <div className="row">
          <div className="col-6">
            <input
              type="text"
              placeholder="Enter Location"
              className="form-control"
              autoFocus="on"
              autoComplete="off"
            />
          </div>
          <div className="col">
            <button type="submit">
              <i className="fas fa-search-location"></i>
            </button>
            <div className="col">
              <button type="submit" className="geolocation">
                <i className="fas fa-location-arrow"></i>
              </button>
            </div>
          </div>
        </div>
      </form>
      <Weather />
      <Images />
      <Prediction />
      <h5>Forecast</h5>
      <Forecast />
    </div>
    );
    } else {
    let apiKey = "65b9beaa8544369015325811bb427882";
    let apiEndPoint = "https://api.openweathermap.org/data/2.5/weather";
    let apiUrl = `${apiEndPoint}?q=${props.defaultcity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(callData);

    return(
      <div className="loading">
        <p className="loaded">Loading....</p>
         <Loader
         type="Rings"
         color="#00BFFF"
         height={110}
         width={110}
         timeout={0}
      />
      </div>);
    }
    
}