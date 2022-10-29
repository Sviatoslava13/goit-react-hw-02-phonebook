import s from './App.module.css';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };
  addContact = newContact => {
    this.state.contacts.some(contact => contact.name === newContact.name) ||
    this.state.contacts.some(contact => contact.number === newContact.number)
      ? alert(`Is already in contacts `)
      : this.setState(prev => ({ contacts: [...prev.contacts, newContact] }));
  };
  removeContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(el => el.id !== id),
    }));
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value, id: nanoid() });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.addContact({ ...this.state });
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };
  filterContact = () => {
    const { filter, contacts } = this.state;
    const filtere = filter.trim().toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filtere)
    );
  }

  render() {
    return (
      <>
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm
          name={this.state.name}
          number={this.state.number}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <h2 className={s.title}>Contacts</h2>
        <Filter handleChange={this.handleChange} filter={this.state.filter} />
        <ContactList
          contacts={this.filterContact()}
          removeContact={this.removeContact}
        />
      </>
    );
  }
}
