import React, { Component } from 'react';
import Forma from './Forma';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
class ContactForm extends Component {
static defaultProps = {
    addContact: PropTypes.func.isRequired,
  };
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value, id: nanoid() });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addContact(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <>
        <Forma
          name={this.state.name}
          number={this.state.number}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </>
    );
  }
}

export default ContactForm;
