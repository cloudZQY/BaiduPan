import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

function f1() {
  const arr = [];
  return function() {
    while(arr.length < 50000000) {
      arr.push(1);
    }
  }
}
var f2 = f1();
f2();

class App2 extends Component {
  componentDidMount() {
    console.log(this.props.history);
    console.log('App2 mount')
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="/">aaaaaaaaa</Link>
      </div>
    );
  }
}

export default App2;
