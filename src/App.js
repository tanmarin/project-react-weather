import React from "react";

import Weather from "./Weather";
import Temperature from "./Temperature";
import Images from "./Images";
import Prediction from "./Prediction";
import Forecast from "./Forecast";



import './App.css';

export default function App() {
  return (
    <div className="App">
      <Weather />
      <Temperature />
      <Images />
      <Prediction />
      <h5>Forecast</h5>
      <Forecast />
    </div>
  );
}


