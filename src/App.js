import "./App.css";

import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Prague" />
      </div>
      <footer>
        Open-sourced project{" "}
        <a
          href="https://github.com/KristynaCharova/react-app"
          target="noreferrer"
        >
          on Github
        </a>{" "}
        hosted on
        <a href="https://elastic-raman-61331b.netlify.app/" target="noreferrer">
          {" "}
          Netlify
        </a>
      </footer>
    </div>
  );
}
