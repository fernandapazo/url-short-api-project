import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import React from "react";
import Header from "../src/components/header/Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">Hello world </header>
      <Header />
    </div>
  );
}

export default App;
