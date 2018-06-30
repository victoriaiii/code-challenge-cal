import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "./actions/createActions";
import Cal from "./Cal"

const mapStateToProps = (state) => {
  return{
    calendarInfo: state.Calendar
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
