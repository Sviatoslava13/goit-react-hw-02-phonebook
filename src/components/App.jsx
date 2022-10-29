import s from './App.module.css';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value, id: nanoid() });
  };

  addContact = newContact => {
    this.state.contacts.some(contact => contact.name === newContact.name) ||
    this.state.contacts.some(contact => contact.number === newContact.number)
      ? alert(`${newContact.name} Is already in contacts `)
      : this.setState(prev => ({ contacts: [...prev.contacts, newContact] }));
  };

  removeContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(el => el.id !== id),
    }));
  };

  filterContact = () => {
    const { filter, contacts } = this.state;
    const filtere = filter.trim().toLowerCase();
    return contacts.filter(({ name }) => name.toLowerCase().includes(filtere));
  };

  render() {
    const filterContact = this.filterContact();
    return (
      <>
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2 className={s.title}>Contacts</h2>
        <Filter handleChange={this.handleChange} filter={this.state.filter} />
        {filterContact.length > 0 && (
          <ContactList
            contacts={filterContact}
            removeContact={this.removeContact}
          />
        )}
      </>
    );
  }
}
