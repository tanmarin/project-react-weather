import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Form from "./Form";


import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Form defaultCity="Tokyo" />
      </div>
      <p className="opencode">
      <a
        href="https://github.com/tanmarin/project-react-weather"
        >Open-Source Code </a
      >by Tanmarin
    </p>
    </div>
  );
}


