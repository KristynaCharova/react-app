import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

import "./DailyForecast.css";

export default function DailyForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "087811ad20c5b942f2408cdd748d2b31";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="DailyForecast">
      <div className="row">
        <div className="col">
          <div className="DailyForecast-day">Tue</div>
          <WeatherIcon code={"10d"} size={40} />
          <div className="DailyForecast-temperatures">
            <span className="DailyForecast-temp-max">12°</span>
            <span className="DailyForecast-temp-min">6°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
