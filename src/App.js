import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Form from "./Form";
import Weather from "./Weather";
import Temperature from "./Temperature";
import Images from "./Images";
import Prediction from "./Prediction";
import Forecast from "./Forecast";



import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Form />
        <Weather />
        <Temperature />
        <Images />
       <Prediction />
       <h5>Forecast</h5>
       <Forecast />
      </div>
      <p class="open-code">
      <a
        href="https://github.com/tanmarin/project-react-weather"
        target="_blank"
        >Open-Source Code </a
      >by Tanmarin
    </p>
    </div>
  );
}


