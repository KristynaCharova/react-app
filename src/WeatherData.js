import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

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
              Wind: <span>{props.data.wind}</span> m/h
            </li>
            <li>
              Humidity: <span>{props.data.humidity}</span>%
            </li>
          </ul>
        </div>
        <div className="col-6">
          <WeatherIcon code={props.data.icon} />
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <strong>°C</strong>
        </div>
      </div>
    </div>
  );
}
