import React from "react";
import YearsBar from "./YearsBar";
import Sidebar from "./Sidebar";
import Launches from "./Launches";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <YearsBar/>
      </header>
      <main>
        <Sidebar/>
        <Launches/>
      </main>
    </div>
  );
}

export default App;
