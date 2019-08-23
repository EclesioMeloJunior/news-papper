import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import news from "./news";
import auth from "./auth";

const REDUCERS = { auth, form, news };

export default combineReducers(REDUCERS);
