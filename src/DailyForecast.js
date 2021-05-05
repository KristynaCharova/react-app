import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./DailyForecast.css";

export default function DailyForecast() {
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
