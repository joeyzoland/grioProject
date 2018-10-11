import React, { Component } from 'react';
import './App.css';
import Counter from "./components/counter/counter"
import Login from "./components/login/login"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: null
    }
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }
  login(userName, password) {
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName: userName,
        password: password
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data){
          window.alert("Login successful!")
          this.setState({loggedIn: data})
        }
        else{
          window.alert("Your login is invalid. Please try again.")
        }
      })
  }
  logout(){
    fetch('/api/logout')
      .then(res => res.json())
      .then(data => {
        if (data){
          alert("You have been logged out.")
          this.setState({loggedIn: false})
        }
        else{
          alert("Logout failed.")
        }
      })
  }
  componentDidMount() {
    fetch('/api/verify')
      .then(res => res.json())
      .then(loggedIn => this.setState({loggedIn}))
  }
  render() {
    if (this.state.loggedIn === true){
      return (
        <div className = "container">
          <Counter logout = {this.logout}/>
        </div>
      );
    }else if(this.state.loggedIn === false){
      return (
        <div className = "container">
          <Login login = {this.login}/>
        </div>
      );
    }
    else{
      return null;
    }
  }
}

export default App;
