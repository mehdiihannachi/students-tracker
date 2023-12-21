import { combineReducers } from "redux";
import studentsReducer from "./studentsReducer";

const rootReducer = combineReducers({
  studentsReducer,
});

export default rootReducer;
