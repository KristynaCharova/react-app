import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature.js";

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      <div className="row mt-3">
        <div className="col-6">
          <h1>{props.data.city}</h1>
          <span className="date">
            <FormattedDate date={props.data.date} />
          </span>
          <span className="text-capitalize description">
            {props.data.description}
          </span>
          <div className="clearfix current-weather">
            <div className="float-left">
              <WeatherTemperature metric={props.data.temperature} />{" "}
            </div>
            <div className="float-left">
              <WeatherIcon code={props.data.icon} size={85} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul className=" current-weather-info">
            <li>
              Wind: <span>{props.data.wind}</span> km/h
            </li>
            <li>
              Humidity: <span>{props.data.humidity}</span>%
            </li>
          </ul>
          <ul className=" current-weather-info">
            <li>Feels Like {Math.round(props.data.feelsLike)}°C</li>
            <li>
              Max {Math.round(props.data.tempMax)}°C Min{" "}
              {Math.round(props.data.tempMin)}
              °C
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
