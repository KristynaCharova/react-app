import React, { useState } from "react";
import axios from "axios";
import Form from "./Form";

import "./Weather.css";
import Loader from "react-loader-spinner";

import ReactAnimatedWeather from "react-animated-weather";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      date: "Saturday 18:35",
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <Form />
        <div className="row">
          <div className="col-6">
            <h1>{weatherData.city}</h1>
            <ul>
              <li>{weatherData.date}</li>
              <li className="text-capitalize">{weatherData.description}</li>
            </ul>
            <ul>
              <li>
                Wind: <span>{weatherData.wind}</span> m/h
              </li>
              <li>
                Humidity: <span>{weatherData.humidity}</span>%
              </li>
            </ul>
          </div>
          <div className="col-6 main-icon">
            <ReactAnimatedWeather
              icon="RAIN"
              color="#000"
              size={120}
              animate={true}
            />
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <strong>°C</strong>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "087811ad20c5b942f2408cdd748d2b31";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return (
      <Loader
        type="Hearts"
        color="#E27B83"
        height={100}
        width={100}
        timeout={3000}
      />
    );
  }
}
