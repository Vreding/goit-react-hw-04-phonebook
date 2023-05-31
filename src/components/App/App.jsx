// import React, { Component } from 'react';
// import { nanoid } from 'nanoid';
// import ContactForm from '../ContactForm/ContactForm';
// import ContactList from '../ContactList/ContactList';
// import Filter from '../Filter/Filter';

// class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   componentDidMount() {
//     const savedContacts = localStorage.getItem('newContacts');
//     if (savedContacts !== null) {
//       this.setState({ contacts: JSON.parse(savedContacts) });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.contatcs !== localStorage.getItem('contacts')) {
//       localStorage.setItem('newContacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   handleSubmit = (name, number) => {
//     const { contacts } = this.state;

//     if (contacts.find(contact => contact.name === name)) {
//       alert(`${name} is already in contacts`);
//       return;
//     }

//     const newContact = { name, number, id: nanoid() };

//     this.setState(prevState => ({
//       contacts: [...prevState.contacts, newContact],
//     }));
//   };

//   handleDeleteContact = id => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== id),
//     }));
//   };

//   handleFilterChange = event => {
//     this.setState({ filter: event.target.value });
//   };

//   render() {
//     const { filter, contacts } = this.state;

//     const filteredContacts = contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );

//     return (
//       <div
//         style={{
//           height: '100vh',
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'center',
//           alignItems: 'center',
//           fontSize: 15,
//           color: '#010101',
//         }}
//       >
//         <h1>Phonebook</h1>
//         <ContactForm name="" number="" onSubmit={this.handleSubmit} />

//         <h2>Contacts</h2>
//         <Filter filter={filter} onChange={this.handleFilterChange} />
//         <ContactList
//           contacts={filteredContacts}
//           onDeleteContact={this.handleDeleteContact}
//         />
//       </div>
//     );
//   }
// }

// export default App;

import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('newContacts');
    return savedContacts !== null
      ? JSON.parse(savedContacts)
      : [
          { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
          { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
          { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
          { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ];
  });

  useEffect(() => {
    localStorage.setItem('newContacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = (name, number) => {
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = { name, number, id: nanoid() };

    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const handleDeleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 15,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm name="" number="" onSubmit={handleSubmit} />

      <h2>Contacts</h2>
      <Filter filter={filter} onChange={handleFilterChange} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

export default App;
