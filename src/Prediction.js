import React from "react";
import "./Prediction.css";

export default function Prediction(props) {
  return (
    <div className="Prediction">
      <div className="predict">
        <div className="row">
          <div className="col-3">
            <p>
              <span className="wind"></span>{props.info.wind} m/s <br />
              <span className="description">Wind</span>
            </p>
          </div>
          <div className="col-3">
            <p>
              <span className="humidity"></span>{props.info.humidity}% <br />
              <span className="description">Humidity</span>
            </p>
          </div>
          <div className="col-3">
            <p>
              <span className="clouds"></span>{props.info.cloud}% <br />
              <span className="description">Cloudiness</span>
            </p>
          </div>
          <div className="col-3">
            <p>
              <span className="feeling-temp"></span>{props.info.feeltemp}° <br />
              <span className="description">Feels Like</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
