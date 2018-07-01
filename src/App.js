import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "./actions/actionCreators";
import Cal from "./Cal"

const mapStateToProps = (state) => {
  return{
    calendarInfo: state.Calendar
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);

const App = connect(mapStateToProps, mapDispatchToProps)(Cal);

export default App;
