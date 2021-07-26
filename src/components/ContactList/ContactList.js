import React from "react";
import C from "./contactList.module.css";
import { connect } from "react-redux";
import contactsAction from "../../redux/contacts/contacts-actions";

const ContactList = ({ contacts, onDeleteList }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        <span>{name}</span>
        <span>{number}</span>
        <button className={C.button} onClick={() => onDeleteList(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);
const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteList: (id) => dispatch(contactsAction.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
