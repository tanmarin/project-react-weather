import React from "react";
import "./Prediction.css";

export default function Prediction() {
  return (
    <div className="Prediction">
      <div className="predict">
        <div className="row">
          <div className="col-3">
            <p>
              <span className="wind"></span>10 m/s <br />
              <span className="description">Wind</span>
            </p>
          </div>
          <div className="col-3">
            <p>
              <span className="humidity"></span>78% <br />
              <span className="description">Humidity</span>
            </p>
          </div>
          <div className="col-3">
            <p>
              <span className="clouds"></span>60% <br />
              <span className="description">Cloudiness</span>
            </p>
          </div>
          <div className="col-3">
            <p>
              <span className="feeling-temp"></span>25° <br />
              <span className="description">Feels Like</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
