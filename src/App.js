import React, { Component } from "react";
import "./css/App.css";
import { v4 as uuidv4 } from "uuid";

import {ContactList} from "./components/ContactList/ContactList";
import {ContactForm} from "./components/ContactForm/ContactsForm";
import {Filter} from "./components/Filter/Filter";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;
    if (filter === "") return contacts;
    return contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  changeFilter = (filter) => {
    this.setState({ filter });
  };

  addHandler = (name, number) => {
    const { contacts } = this.state;
    let check = contacts.filter((contact) => contact.name === name);
    if (check.length > 0) {
      return alert(`${name} is already in contacts`);
    }
    this.setState({
      contacts: [...this.state.contacts, { id: uuidv4(), name, number }],
    });
  };

  deleteHandler = (id) => {
    const { contacts } = this.state;
    this.setState({
      contacts: contacts.filter((contact) => contact.id !== id),
    });
  };

  render() {
    return (
      <div>
        <ContactForm addContact={this.addHandler} />
        <Filter changeFilter={this.changeFilter} />
        <ContactList
          contacts={this.filteredContacts()}
          deleteContact={this.deleteHandler}
        />
      </div>
    );
  }
}

export default App;