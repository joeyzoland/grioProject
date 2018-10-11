import React, { Component } from 'react';
import './login.css';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: ""
    }
    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
  }
  handleUsernameChange(e) {
   this.setState({username: e.target.value});
  }
  handlePasswordChange(e) {
   this.setState({password: e.target.value});
  }
  render() {
    return (
      <div className = "loginContainer">
        <form onSubmit={e => {e.preventDefault()}}>
          <label htmlFor="username">Username</label>
          <input name = "username" type = "text" onChange = {this.handleUsernameChange}></input>
          <br></br>
          <label htmlFor="password">Password</label>
          <input name = "password" type = "text" onChange = {this.handlePasswordChange}></input>
          <br></br>
          <button className = "loginButton" onClick = {() => this.props.login(this.state.username, this.state.password)}>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
