import React, {PropTypes} from 'react';
import {connect} from 'react-redux'
import moment from 'moment';

let Calendar = ({calendarInfo, dayInfo, dispatch}) => {
  const {month, year} = calendarInfo;
  const {selectDay} = dayInfo;
  const monthHeader = `${moment().month(month).format("MMMM")} ${year}`;

  return (
    <div className="header row flex-middle">
      <div className="col col-center">
        <span>{monthHeader}</span>
      </div>
    </div>
  );
};

Calendar.propTypes = {
  calendarInfo: PropTypes.shape({
    month: React.PropTypes.number,
    year: React.PropTypes.number
  }),
  selectedDay: PropTypes.object
}

Calendar = connect()(Calendar);

export default Calendar;
