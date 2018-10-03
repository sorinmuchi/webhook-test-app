import React, { Component } from 'react';
import fetch from 'node-fetch';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    fetch('/data')
      .then(response => response.json())
      .then(json => console.log(json));
    
    fetch('/data', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        sport: 'cycling',
        profession: 'software developer'
      })
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
