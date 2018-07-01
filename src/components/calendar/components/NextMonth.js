import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {nextMonth} from "../../../action/actionCreators";

const gotoNextMonth = (dispatch, month) => dispatch(nextMonth(month));

let NextButton = ({month, dispatch}) => {
  return(
    <button onClick{() => gotoNextMonth(dispatch, month)}Meow</button>
  );
};

NextMonthButton.propTypes = {
  month: PropTypes.number
}

NextMonthButton = connect ()(NextMonthButton);

export default NextMonthButton;
