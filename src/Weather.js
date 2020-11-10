import React from "react";

import "./Weather.css";
import "./Form.css";


export default function Weather() {
  let weatherData = {
    city: "Tokyo",
    temperature: 19,
    date: "Saturday, 5 September, 02:00",
    description: "Cloudy",
    sunrise: "06:08",
    sunset: "18:37"
  };



  return (
    <div className="Weather">
      <div className="location">
        <h1>{weatherData.city}</h1>
        <div className="row date-time">
          <div className="col-6 timing">{weatherData.date}</div>
          <div className="col-3">
            Sunrise <strong>|</strong> Sunset
          </div>
          <div className="col-3">
            {" "}
            <span>{weatherData.sunrise}</span> <span class="divided">|</span>
            <span> {weatherData.sunset}</span>{" "}
          </div>
        </div>
      </div>
      <div className="weather">
        <div className="row current-weather">
          <div className="col-6">
            <span className="weather-icon">
              <i className="fas fa-cloud-sun"></i>
            </span>
          </div>
          <div className="col-3">
            <h2 className="current-temp">{weatherData.temperature}</h2>
            <p className="degree">
              <a href="/" className="active degree-reading">
                °C
              </a>{" "}
              |
              <a href="/" className="active degree-reading">
                °F
              </a>
            </p>
          </div>
        </div>
        <h3>{weatherData.description}</h3>
      </div>
    </div>
  );
}
