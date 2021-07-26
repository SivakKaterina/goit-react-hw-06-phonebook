// import types from './contacts-types';
import shortid from "shortid";
import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("contacts/add", ({ name, number }) => {
  return {
    payload: {
      id: shortid.generate(),
      name,
      number,
    },
  };
});
const deleteContact = createAction("contacts/delete");

const changeFilter = createAction("contacts/changeFilter");

// const addContact = ({ name, number })=>({
//   type: types.ADD,
//   payload: {
//     id: shortid.generate(),
//     name,
//     number,
//   }
// });

// const deleteContact = listId => ({
//   type: types.DELETE,
//   payload: listId,
// });

// const changeFilter = value => ({
// type: types.CHANGE_FILTER,
//   payload: value,
// });

export default { addContact, deleteContact, changeFilter };
