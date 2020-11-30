import { combineReducers } from "redux";
import projectReducer from "./projectReducer";
import taskColumnReducer from "./taskColumnReducer";

export default combineReducers({
  projectReducer, taskColumnReducer
});
