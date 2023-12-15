import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = evt => {
    this.setState({ name: evt.currentTarget.value });
  };

  handleNumberChange = evt => {
    this.setState({ number: evt.currentTarget.value });
  };

  onSubmitForm = evt => {
    evt.preventDefault();
    const id = nanoid();
    this.props.onSubmitForm({
      id,
      name: this.state.name,
      number: this.state.number,
    });

    evt.target.reset();
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onSubmitForm}>
          <label>
            <span>Name</span>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Tel{' '}
            <input
              type="tel"
              name="number"
              pattern="\d{3}[\-]\d{2}[\-]\d{2}"
              title="Number may contain only numbers and dushes. For example 123-45-67"
              required
              onChange={this.handleNumberChange}
            />
          </label>
          <button>Add contact</button>
        </form>
      </div>
    );
  }
}
