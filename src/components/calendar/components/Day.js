import React, {PropTypes} from "react";
import {connect} from "react-redux";

const selectDay = (day, dispatch) => {
  dispatch(setDay(day));
};

let Day = ({day, dispatch}) => {
  return (
    <a href="#" onClick={(event) => selectDay(day, dispatch)}>
      <span className="caldate">{`${day.format('DD')} ${day.format('dddd')}`}</span>
    </a>
  );
};

Day = connect()(Day);

Day.propTypes = {
  day: PropTypes.object,
}

export default Day;

