import React, {PropTypes} from 'react';
import {connect} from 'react-redux'

let Calendar = ({calendarInfo}) => {
  const monthHeader = `${moment().month(month).format("MMMM")} ${year}`;

  return (

    <div className="header row flex-middle">
      <div className="col col-center">
        <span>{monthHeader}</span>
      </div>
    </div>
  );
};
