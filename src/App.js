import React from "react";
import "./App.css";
import Event from "./components/Event";

function App() {
  return (
    <div className="App">
      <h1 className="heading">Count down panel</h1>

      <div className="wrapper">
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
      </div>
    </div>
  );
}

export default App;
