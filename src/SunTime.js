import React from "react";

export default function SunTime(props) {
    
  let hour = props.sunrise.getHours();
  let mins = props.sunrise.getMinutes();
 
  if (hour < 10) {
    hour = `0${hour}`;
  }

  if (mins < 10) {
    mins = `0${mins}`;
  }
    return(
        <span>
            {hour}:{mins}
        </span>
    );
}