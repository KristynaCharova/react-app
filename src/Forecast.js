import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Forecast(props) {
  return (
    <div className="Forecast">
      <div className="col-sm-2">
        <div className="forecast-day">{props.day}</div>
        <div className="forecast-icon">{props.icon}</div>
        <div className="forecast-temp">{props.temp}°C</div>
      </div>
    </div>
  );
}
