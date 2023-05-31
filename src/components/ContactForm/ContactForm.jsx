// import React, { Component } from 'react';

// import PropTypes from 'prop-types';
// import s from './ContactForm.module.css';

// class ContactForm extends Component {
//   static propTypes = {
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//   };

//   state = {
//     name: '',
//     number: '',
//   };

//   handleInputChange = event => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     const { name, number } = this.state;
//     this.props.onSubmit(name, number);
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     const { name, number } = this.state;

//     return (
//       <form className={s.Form} onSubmit={this.handleSubmit}>
//         <label className={s.Label}>
//           Name
//           <input
//             className={s.Input}
//             type="text"
//             placeholder="Count of Monte Cristo"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             value={name}
//             onChange={this.handleInputChange}
//             required
//           />
//         </label>
//         <label className={s.Label}>
//           Phone number
//           <input
//             className={s.Input}
//             type="tel"
//             placeholder="+77052301585"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             value={number}
//             onChange={this.handleInputChange}
//             required
//           />
//         </label>
//         <button className={s.Button} type="submit">
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }

// export default ContactForm;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(name, number);
    setName('');
    setNumber('');
  };

  return (
    <form className={s.Form} onSubmit={handleSubmit}>
      <label className={s.Label}>
        Name
        <input
          className={s.Input}
          type="text"
          placeholder="Count of Monte Cristo"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={handleInputChange}
          required
        />
      </label>
      <label className={s.Label}>
        Phone number
        <input
          className={s.Input}
          type="tel"
          placeholder="+77052301585"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={handleInputChange}
          required
        />
      </label>
      <button className={s.Button} type="submit">
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
