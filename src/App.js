import React, { useState, useEffect } from 'react';

import Container from './Component/Container';
import ContactList from './Component/ContactList';
import Filter from './Component/Filter';
import ContactForm from './Component/ContactForm';

const INITIAL_CONTACTS = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function App() {
  const [contacts, setContacts] = useState([...INITIAL_CONTACTS]);

  const handleSubmitForm = contact => {
    const includedInContacts = contacts.find(
      item => item.name === contact.name,
    );

    if (includedInContacts !== undefined) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    setContacts(prevState => [contact, ...prevState]);
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const [filter, setFilter] = useState('');

  const handleChange = e => setFilter(e.currentTarget.value);

  const getfilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) setContacts(parsedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmitForm={handleSubmitForm} />
      <h2>Contacts</h2>
      <Filter value={filter} onHandleChange={handleChange} />
      <ContactList
        filteredContacts={getfilteredContacts()}
        onDeleteContact={deleteContact}
      />
    </Container>
  );
}

export default App;
