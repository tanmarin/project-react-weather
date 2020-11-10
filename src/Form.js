import React from "react";

import "./Form.css";

export default function Form(){
    return(
        <div className="Form">
      <form>
        <div className="row">
          <div className="col-6">
            <input
              type="text"
              placeholder="Enter Location"
              className="form-control"
              autoFocus={true}
              autoComplete={false}
            />
          </div>
          <div className="col">
            <button type="submit">
              <i className="fas fa-search-location"></i>
            </button>
            <div className="col">
              <button type="submit" className="geolocation">
                <i className="fas fa-location-arrow"></i>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
    );
}