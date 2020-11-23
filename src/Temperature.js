import React from "react";
import "./Temperature.css";

export default function Temperature(props) {
  return (
    <div className="Temperature">
      <div className="row">
        <div className="col-6">
          <div className="row">
            <div className="col-12">
              <section className="reading">
                <i className="fas fa-temperature-high"></i>
                <h4 className="Hightemp">
                  <strong>{props.high}</strong>
                </h4>
                <p>
                  <small>Temperature High</small>
                </p>
              </section>
            </div>
            <div className="col-12 temp-low">
              <section className="reading">
                <i className="fas fa-temperature-low"></i>
                <h4 className="Lowtemp">
                  <strong>{props.low}</strong>
                </h4>
                <p>
                  <small>Temperature Low</small>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
