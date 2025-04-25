import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import chatReducer from "../reducers/chatReducer";
import messageReducer from "../reducers/messageReducer";
import userReducer from "../reducers/userReducer";

const combinedReducer = combineReducers({
  userReducer,
  chatReducer,
  messageReducer,
});

var store = legacy_createStore(combinedReducer, applyMiddleware(logger));

export default store;
