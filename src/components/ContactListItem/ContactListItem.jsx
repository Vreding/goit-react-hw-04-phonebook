import PropTypes from 'prop-types';
import s from './ContactListItem.module.css';

const ContactListItem = ({ contact, onDeleteContact }) => (
  <li className={s.Item}>
    <span>{contact.name}:</span>
    <span>{contact.number}</span>
    <button className={s.DeleteBtn} onClick={() => onDeleteContact(contact.id)}>
      Delete
    </button>
  </li>
);

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
