import React, { useState } from "react";

export default function UnitConversion(props) {
  const [unit, setUnit] = useState("metric");

  function showImperial(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("metric");
  }

  function toImperial() {
    return (props.metric * 9) / 5 + 32;
  }

  if (unit === "metric") {
    return (
      <div className="UnitConversion">
        <span className="temperature">{Math.round(props.metric)}</span>
        <span className="unit">
          °C |
          <a href="/" onClick={showImperial}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="UnitConversion">
        <span className="temperature">{Math.round(toImperial())}</span>
        <span className="unit">
          <a href="/" onClick={showCelsius}>
            °C{" "}
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
