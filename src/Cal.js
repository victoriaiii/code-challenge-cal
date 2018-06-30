import React, { Component } from 'react';
import Calendar from "./components/calendar";
import './App.css';

class Cal extends Component {
  render() {
    const {calendarInfo} = this.props;
    return (
      <Calendar calendarInfo={calendarInfo} />
    );
  }
}

export default Cal;
