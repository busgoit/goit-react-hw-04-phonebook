import { Component } from 'react';
import { nanoid } from 'nanoid';
import Section from './Section';
import Form from './Form';
import Filter from './Filter';
import Contacts from './Contacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    ],
    filter: '',
  };

  addContactOnFormSubmit = data => {
    const { contacts } = this.state;
    const { name, number } = data;

    const isInContacts = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isInContacts) return alert(`${name} is already in your contacts!`);

    this.setState(({ contacts }) => ({
      contacts: [...contacts, { id: nanoid(), name, number }].sort((a, b) =>
        a.name.localeCompare(b.name)
      ),
    }));
  };

  onFilterChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalisedFilter = filter.toLowerCase();

    return [...contacts].filter(contact =>
      contact.name.toLowerCase().includes(normalisedFilter)
    );
  };

  deleteContact = deleteID => {
    this.setState(({ contacts }) => ({
      contacts: [...contacts].filter(contact => contact.id !== deleteID),
    }));
  };

  render() {
    const { filter } = this.state;

    const filteredContacts = this.getFilteredContacts();

    return (
      <>
        <Section title="Phonebook">
          <Form onSubmit={this.addContactOnFormSubmit} />
        </Section>
        <Section title="Contacts">
          <Filter value={filter} onChange={this.onFilterChange} />
          <Contacts contacts={filteredContacts} onDelete={this.deleteContact} />
        </Section>
      </>
    );
  }
}
