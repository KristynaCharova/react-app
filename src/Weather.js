import React from "react";
import Form from "./Form";
import ReactAnimatedWeather from "react-animated-weather";

export default function Weather() {
  let weatherData = {
    city: "Prague",
    temperature: 12,
    date: "Saturday 18:35",
    description: "Rain",
    wind: 5,
    humidity: 85,
  };

  return (
    <div className="Weather">
      <Form />
      <div className="row">
        <div className="col-6">
          <h1>{weatherData.city}</h1>
          <ul>
            <li>{weatherData.date}</li>
            <li>{weatherData.description}</li>
          </ul>
          <ul>
            <li>
              Wind: <span>{weatherData.wind}</span> m/h
            </li>
            <li>
              Humidity:<span>{weatherData.humidity}</span>%
            </li>
          </ul>
        </div>
        <div className="col-6">
          <ReactAnimatedWeather
            icon="RAIN"
            color="#000"
            size={75}
            animate={true}
          />
          <span className="temperature">{weatherData.temperature}</span> °C
        </div>
      </div>
    </div>
  );
}
