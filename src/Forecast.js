import React from "react";
import ForecastIcon from "./ForecastIcon";

import "./Forecast.css";

export default function Forecast(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  function temperature() {
    let temperature = Math.round(props.data.main.temp);

    return `${temperature} °C`;
  }

  return ( 
  <div className="col-2 forecast-five">
            <h6>{hours()}</h6>
            <span className="five-icon">
            <ForecastIcon code={props.data.weather[0].icon} />
          </span>
            <p >
            {temperature()}
            </p>
          </div>
  );
}
