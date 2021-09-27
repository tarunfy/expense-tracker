import { authReducer } from "../reducers/authReducer";
import { databaseReducer } from "../reducers/databaseReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  database: databaseReducer,
  auth: authReducer,
});

export default rootReducer;
