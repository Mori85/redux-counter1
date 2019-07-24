import { combineReducers } from "redux";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";
import counterReducer from "./counter";
export default combineReducers({
  todos,
  visibilityFilter,
  counter: counterReducer
});
