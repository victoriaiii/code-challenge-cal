import React, { Component } from 'react';
import Calendar from "./components/calendar";
import './App.css';

class App extends Component {
  render() {
    const {calendarInfo} = this.props;
    return (
      <Calendar calendarInfo={calendarInfo} />
    );
  }
}

export default App;
