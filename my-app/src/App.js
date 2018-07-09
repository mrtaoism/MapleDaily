import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
      var timeNow = Date();
      var hoursTN = Math.floor((timeNow % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutesTN = Math.floor((timeNow % (1000 * 60 * 60)) / (1000 * 60));
      var secondsTN = Math.floor((timeNow % (1000 * 60)) / 1000);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Maple Daily</h1>
        </header>

        <p className="App-intro">
            Daily Reset is at Midnight GMT! <br/>
            Time Now:
            <br/>
            {timeNow}
            {/*
             {hoursTN}:{minutesTN}:{secondsTN}
             */}
        </p>
      </div>
    );
  }
}

export default App;
