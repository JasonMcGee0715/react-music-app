import React from "react";
// import './App.css';
// import { Typography } from '@material-ui/core';
import Header from "./components/Header";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
