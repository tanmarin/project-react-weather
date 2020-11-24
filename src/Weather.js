import React from "react";

import Temperature from "./Temperature";
import FormattedDate from "./FormattedDate";
import SunTime from "./SunTime";
import WeatherIcon from "./WeatherIcon";
import UnitChange from "./UnitChange";

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
              <WeatherIcon code={props.data.icon} />
          </div>
          <div className="col-3">
            <UnitChange celsius={props.data.temperature} />
            
          </div>
        </div>
        <h3>{props.data.description}</h3>
      </div>
      <Temperature high={props.data.hightemp} low={props.data.lowtemp} />
    </div>
  );
}
