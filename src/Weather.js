import React, { useState } from "react";
import axios from "axios";
import WeatherData from "./WeatherData";
import DailyForecast from "./DailyForecast";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      tempMax: response.data.main.temp_max,
      tempMin: response.data.main.temp_min,
      feelsLike: response.data.main.feels_like,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "087811ad20c5b942f2408cdd748d2b31";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="text"
                className="form-control"
                placeholder="Type a city"
                autoComplete="off"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                className="btn btn-light w-450"
                type="submit"
                value="Search"
              />
            </div>
          </div>
        </form>
        <WeatherData data={weatherData} />
        <DailyForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading....";
  }
}
