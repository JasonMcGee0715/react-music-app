import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dashboard from "./Dashboard";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
    };
  }

  handleClick = (evt) => {
    console.log("clicked");
    this.setState({
      loggedIn: true,
    });
  };

  render() {
    if (this.state.loggedIn === true) {
      return <Dashboard />;
    }
    return (
      <div>
        <h3>Username*</h3>
        <TextField id="outlined-basic" label="Username" variant="outlined" />
        <h3>Password*</h3>
        <TextField id="outlined-basic" label="Password" variant="outlined" />
        <br />
        <br />
        <br />
        <Button onClick={this.handleClick} variant="contained" color="primary">
          Login
        </Button>
      </div>
    );
  }
}

export default Login;
