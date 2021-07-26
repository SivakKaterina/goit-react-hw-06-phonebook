import React, { Component } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import Section from "./components/Section";

// import contacts from './data/contacts.json'

class App extends Component {
  //  componentDidMount() {
  //   console.log('Монтирование')
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);
  //   if (parsedContacts) {
  //     this.setState({contacts:parsedContacts})
  //   }
  // };

  // componentDidUpdate(prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
  //   }
  // }

  render() {
    // const {filter } = this.state;
    // const normalizedFilter = this.state.filter.toLowerCase();
    // const visibleContacts = this.state.contacts.filter(contact =>
    //   contact.name.toLowerCase().includes(normalizedFilter));

    return (
      <div className="container">
        <Section title={"Phonebook"}>
          <ContactForm onSubmit={this.formSubmitHandler} />
        </Section>

        <Section title={"Contacts"}>
          <Filter />
          <ContactList />
        </Section>
      </div>
    );
  }
}

export default App;
