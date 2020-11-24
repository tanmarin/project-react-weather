import React from "react";

export default function FormattedDate(props) {
    let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "Novemeber",
    "December",
  ];
  let hour = props.date.getHours();
  let mins = props.date.getMinutes();
 
  let day = days[props.date.getDay()];
  let month = months[props.date.getMonth()];
  let dates = props.date.getDate(); 
  
  if (hour < 10) {
    hour = `0${hour}`;
  }

  if (mins < 10) {
    mins = `0${mins}`;
  }
    return(
        <div>
           {day}, {dates} {month}, {hour}:{mins}
        </div>
    );
}