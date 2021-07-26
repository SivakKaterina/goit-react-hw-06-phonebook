import React from "react";
import F from "./filter.module.css";
import { connect } from "react-redux";
import contactsAction from "../../redux/contacts/contacts-actions";

const Filter = ({ filter, onChange }) => (
  <label className={F.label}>
    Find contacts by name
    <input
      className={F.input}
      type="text"
      value={filter}
      onChange={onChange}
    ></input>
  </label>
);

const mapStateToProps = (state) => ({
  filter: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(contactsAction.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
