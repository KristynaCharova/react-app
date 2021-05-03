import React from "react";
import FormattedDate from "./FormattedDate";
import ReactAnimatedWeather from "react-animated-weather";

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
        <div className="col-6 main-icon">
          <ReactAnimatedWeather
            icon="RAIN"
            color="#000"
            size={120}
            animate={true}
          />
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <strong>°C</strong>
        </div>
      </div>
    </div>
  );
}
