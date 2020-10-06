import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
    };
    this.handleClick = this.handleClick.bind(this);
    //this.enterDash = this.enterDash.bind(this);
  }

  //status = this.state.loggedIn;

  handleClick() {
    this.setState({
      loggedIn: true,
    });
    console.log(this.state.loggedIn);
  }

  /*enterDash(status) {
    if (status === true) {
      <**Render Dashboard here**>
      <Dashboard />
    }*/

  render() {
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
