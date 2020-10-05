import React from "react";
import "./App.css";
// import { Typography } from '@material-ui/core';
import Header from "./components/Header";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Login">
        <Login />
      </div>
    </div>
  );
}

export default App;
