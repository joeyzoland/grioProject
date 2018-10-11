import React, { Component } from 'react';
import './counter.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      next: 1,
    }
  }
  updateCounters() {
    if (window.confirm(`Current: ${this.state.current} \n Next: ${this.state.next}`)){
      fetch(`/api/update/${this.state.next}`)
        .then(res => res.json())
        .then(data => {
          if (typeof(data) === "number"){
            this.setState({
            current: this.state.next,
            next: data
          })}
          else{
            alert("An error occurred.")
            this.props.logout()
          }
        })
    }
  }
  render() {
    return (
      <div className = "counterContainer">
        <button id = "logoutButton" className = "counterButton" onClick = {this.props.logout}>Logout</button>
        <div className = "counterDisplay">
          <h1>Count: {this.state.current}</h1>
        </div>
        <button id = "incrementButton" className = "counterButton" onClick = {() => this.updateCounters()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
