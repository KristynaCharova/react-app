import React from "react";

export default function WeatherTepmerature(props) {
  return (
    <div className="WeatherTepmerature">
      <span className="temperature">{Math.round(props.metric)}</span>
      <span className="unit">°C</span>
    </div>
  );
}
