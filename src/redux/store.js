// import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from "./contacts/contacts-reducer";
import logger from "redux-logger";

// const rootReduser = combineReducers({
//   contacts: contactsReducer,
// });
const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

// const store = createStore(rootReduser, composeWithDevTools());

export default store;
