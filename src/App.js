import "./App.css";
import Forecast from "./Forecast";
import Weather from "./Weather";
import ReactAnimatedWeather from "react-animated-weather";

function App() {
  return (
    <div className="App">
      <Weather />
      <div className="row">
        <div className="col-sm-2">
          <Forecast
            temp={17}
            icon={
              <ReactAnimatedWeather
                icon="CLEAR_DAY"
                color="black"
                size="45"
                animate={true}
              />
            }
            day="Sunday"
          />
        </div>
        <div className="col-sm-2">
          <Forecast
            temp={12}
            icon={
              <ReactAnimatedWeather
                icon="PARTLY_CLOUDY_DAY"
                color="black"
                size="45"
                animate={true}
              />
            }
            day="Monday"
          />
        </div>
        <div className="col-sm-2">
          <Forecast
            temp={15}
            icon={
              <ReactAnimatedWeather
                icon="WIND"
                color="black"
                size="45"
                animate={true}
              />
            }
            day="Tuesday"
          />
        </div>
        <div className="col-sm-2">
          <Forecast
            temp={10}
            icon={
              <ReactAnimatedWeather
                icon="SLEET"
                color="black"
                size="45"
                animate={true}
              />
            }
            day="Wednesday"
          />
        </div>
        <div className="col-sm-2">
          <Forecast
            temp={8}
            icon={
              <ReactAnimatedWeather
                icon="FOG"
                color="black"
                size="45"
                animate={true}
              />
            }
            day="Thursday"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
