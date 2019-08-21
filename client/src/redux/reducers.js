import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import news from "./news";

const REDUCERS = { form, news };

export default combineReducers(REDUCERS);
