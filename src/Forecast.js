import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row five-days">
        <div className="col forecast-five">
          <h6>Sunday</h6>
          <span className="five-icon">
            <i className="fas fa-cloud-sun"></i>
          </span>
          <p>32° 26°</p>
        </div>
        <div className="col forecast-five">
          <h6>Monday</h6>
          <span className="five-icon">
            <i className="fas fa-cloud-sun"></i>
          </span>
          <p>32° 27°</p>
        </div>
        <div className="col forecast-five">
          <h6>Tuesday</h6>
          <span className="five-icon">
            <i className="fas fa-cloud-showers-heavy"></i>
          </span>
          <p>32° 27°</p>
        </div>
        <div className="col forecast-five">
          <h6>Wednesday</h6>
          <span className="five-icon">
            <i className="fas fa-cloud-showers-heavy"></i>
          </span>
          <p>31° 26°</p>
        </div>
        <div className="col forecast-five">
          <h6>Thursday</h6>
          <span className="five-icon">
            <i className="fas fa-cloud-rain"></i>
          </span>
          <p>31° 26°</p>
        </div>
        <div className="col forecast-five">
          <h6>Friday</h6>
          <span className="five-icon">
            <i className="fas fa-cloud-rain"></i>
          </span>
          <p>21° 26°</p>
        </div>
      </div>
    </div>
  );
}
