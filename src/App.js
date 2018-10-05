import React, { Component } from 'react';
import './App.css';
import WeatherWrapper from './components/WeatherWrapper'

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherWrapper/>
      </div>
    );
  }
}

export default App;
