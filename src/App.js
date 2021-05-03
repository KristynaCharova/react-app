import "./App.css";

import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Prague" />
      </div>
      <footer>
        Open-sourced{" "}
        <a
          href="https://github.com/KristynaCharova/react-app"
          target="noreferrer"
        >
          Github
        </a>
      </footer>
    </div>
  );
}
