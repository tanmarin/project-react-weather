import React, { useState } from "react";


export default function UnitChange(props){
    const [unit, setUnit] = useState("celsius");
  
    function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit==="celsius") {
    return(
        <div>
            <h2 className="current-temp">
              {props.celsius}
              </h2>
            <p className="degree">
              <a href="/" className="active degree-reading">
                °C
              </a>{" "}
              |
              <a href="/" className="active degree-reading" onClick={showFahrenheit}>
                °F
              </a>
            </p>
        </div>
    );  
  } else {
      let fahrenheit= (props.celsius * 9) / 5 + 32;

       return(
        <div>
            <h2 className="current-temp">
              {Math.round(fahrenheit)}
              </h2>
            <p className="degree">
              <a href="/" className="active degree-reading" onClick={showCelsius}>
                °C
              </a>{" "}
              |
              <a href="/" className="active degree-reading">
                °F
              </a>
            </p>
        </div>
    );
  }
    

}