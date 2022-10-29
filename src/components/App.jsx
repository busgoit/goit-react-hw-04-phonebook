import { useState } from 'react';
import { nanoid } from 'nanoid';
import Section from './Section';
import Form from './Form';
import Filter from './Filter';
import Contacts from './Contacts';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  ]);
  const [filter, setFilter] = useState('');

  const addContactOnFormSubmit = data => {
    const { name, number } = data;

    const isInContacts = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isInContacts) return alert(`${name} is already in your contacts!`);

    setContacts(prevState => [...prevState, { id: nanoid(), name, number }]);
  };

  const onFilterChange = e => {
    setFilter(e.currentTarget.value);
  };

  const getFilteredContacts = () => {
    const normalisedFilter = filter.toLowerCase().trim();

    return [...contacts].filter(contact =>
      contact.name.toLowerCase().includes(normalisedFilter)
    );
  };

  const deleteContact = deleteID => {
    setContacts([...contacts].filter(contact => contact.id !== deleteID));
  };

  const filteredContacts = getFilteredContacts();

  return (
    <>
      <Section title="Phonebook">
        <Form onSubmit={addContactOnFormSubmit} />
      </Section>
      <Section title="Contacts">
        <Filter value={filter} onChange={onFilterChange} />
        <Contacts contacts={filteredContacts} onDelete={deleteContact} />
      </Section>
    </>
  );
};
