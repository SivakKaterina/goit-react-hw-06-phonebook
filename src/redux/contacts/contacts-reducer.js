import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./contacts-actions";
// import types from './contacts-types';

const items = createReducer(
  [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
  {
    [actions.addContact]: (state, { payload }) => [...state, payload],
    [actions.deleteContact]: (state, { payload }) =>
      state.filter((contact) => contact.id !== payload),
  }
);

const filter = createReducer("", {
  [actions.changeFilter]: (_, action) => action.payload,
});

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.CHANGE_FILTER:
//       return payload;
//      default:
//       return state;
//   }
// };

// const items = (state = [], { type, payload }) => {
//    switch (type) {
//     case types.ADD:
//       if (
//         state.some(
//           ({ name }) => name.toLowerCase() === payload.name.toLowerCase(),
//         )
//       ) {
//         alert(`${payload.name} is already in contacts`);
//         return [...state];
//       }
//       if (state.some(({ number }) => number === payload.number)) {
//         alert(`${payload.number} is already in contacts`);
//         return [...state];
//       }

//       return [payload, ...state];

//     case types.DELETE:
//       return state.filter(({ id }) => id !== payload);
//     default:
//       return state;
//   }
// };

export default combineReducers({ items, filter });
