import React from "react";

export default function Form() {
  return (
    <form className="Form">
      <div className="row">
        <div className="col-7">
          <input
            type="text"
            className="form-control"
            placeholder="Type a city"
            autoComplete="off"
            autoFocus
          />
        </div>
        <div className="col-2">
          <button className="btn btn-light" type="submit">
            Search
          </button>
        </div>
        <div className="col-1">
          <button className="btn btn-light">📌</button>
        </div>
      </div>
    </form>
  );
}
