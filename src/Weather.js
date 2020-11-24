import React from "react";

import Temperature from "./Temperature";
import FormattedDate from "./FormattedDate";
import SunTime from "./SunTime";
import "./Weather.css";


export default function Weather(props) {
 
  return (
    <div className="Weather">
      <div className="location">
        <h1>{props.data.city}</h1>
        <div className="row date-time">
          <div className="col-6 timing"> 
          <FormattedDate date={props.data.time} /> 
          </div>
          <div className="col-3">
            Sunrise <strong>|</strong> Sunset
          </div>
          <div className="col-3">
            {" "}
            <span><SunTime sunrise={props.data.sunrise} /></span> <span class="divided">|</span>
            <span> <SunTime sunrise={props.data.sunset} /></span>{" "}
          </div>
        </div>
      </div>
      <div className="weather">
        <div className="row current-weather">
          <div className="col-6">
            <span className="weather-icon">
             <img src={props.data.icon} alt={props.data.description} />
            </span>
          </div>
          <div className="col-3">
            <h2 className="current-temp">{props.data.temperature}</h2>
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
        <h3>{props.data.description}</h3>
      </div>
      <Temperature high={props.data.hightemp} low={props.data.lowtemp} />
    </div>
  );
}
