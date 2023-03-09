import { combineReducers } from "redux";
import counterReducer from "./counter";
import loginReducer from "./login";
const allReducers = combineReducers({
  counter: counterReducer,
  loginDetails: loginReducer,
});
export default allReducers;
