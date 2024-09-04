import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import React from "react";
import Header from "../src/components/header/Header";
import Main from "../src/components/Main/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
