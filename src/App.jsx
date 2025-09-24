// src/App.jsx
import React from "react";
import { events } from "./data";
import CardGrid from "./components/CardGrid";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Community Events Board</h1>
        <p>Discover events and resources happening around SDSU!</p>
      </header>
      <CardGrid events={events} />
    </div>
  );
}

export default App;
