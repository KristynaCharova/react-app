import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import UnitConversion from "./UnitConversion";

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      <div className="row">
        <div className="col-6">
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
          <ul>
            <li>
              Wind: <span>{props.data.wind}</span> km/h
            </li>
            <li>
              Humidity: <span>{props.data.humidity}</span>%
            </li>
          </ul>
          <div className=" current-weather-info">
            <ul>
              <li>Feels Like: {Math.round(props.data.feelsLike)} °C</li>
              <li>Max: {Math.round(props.data.tempMax)} °C</li>{" "}
              <li>Min: {Math.round(props.data.tempMin)} °C</li>
            </ul>
          </div>
        </div>
        <div className="col-6">
          <div className="current-weather">
            <WeatherIcon code={props.data.icon} size={75} />
            <UnitConversion metric={props.data.temperature} />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
