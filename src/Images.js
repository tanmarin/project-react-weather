import React from "react";
import "./Images.css";

export default function Images(props) {
  let celsiusTemperature= props.temp;

  if (celsiusTemperature <= 5) {
    return (
    <div className="Images">
      <div className="col-6">
        <div className="clearfix">
          <img src="/images/snowing.svg" className="float-left" alt="snowing" />
        </div>
      </div>
    </div>
  );
  } else {
    if (celsiusTemperature >= 28) {
    return (
    <div className="Images">
      <div className="col-6">
        <div className="clearfix">
          <img src="/images/sunnyday.svg" alt="sunnyday" className="float-left" />
        </div>
      </div>
    </div>
  );
    } else {
      if (celsiusTemperature > 5 && celsiusTemperature < 20) {
     return (
    <div className="Images">
      <div className="col-6">
        <div className="clearfix">
          <img src="/images/reading.svg" alt="enjoyment" className="float-left" />
        </div>
      </div>
    </div>
  );
      } else {
    return (
    <div className="Images">
      <div className="col-6">
        <div className="clearfix">
          <img src="/images/sunset.svg" alt="sunset" className="float-left" />
        </div>
      </div>
    </div>
  );
      }
    }
  }



  
}
