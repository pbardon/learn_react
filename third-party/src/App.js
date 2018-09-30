import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import historicDatesForSkiing from './data/dates.js'
import Timeline from './components/Timeline'
import CountryDropDown from './components/CountryDropDown'
import HiddenMessage from './components/HiddenMessage'
import MenuButton from './components/MenuButton'
import Expandable from './components/Expandable'


class App extends Component {
  render() {
    const PopUpButton = Expandable(MenuButton)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Timeline name="History of Skiing"
              data={historicDatesForSkiing} />

        <CountryDropDown selected="United States"/>

        <HiddenMessage>hello,world</HiddenMessage>

        <PopUpButton hidden={false} txt="x">
            <h1>Hidden Content</h1>
            <p>This content will start off hidden</p>
        </PopUpButton>
      </div>
    );
  }
}

export default App;
