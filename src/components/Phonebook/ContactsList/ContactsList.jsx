import styles from './contactsList.module.css';
import PropTypes from 'prop-types';

function ContactsList({ contacts, onDelete }) {
  const element = contacts.map(contact => (
    <li className={styles.item} key={contact.id}>
      <p className={styles.info}>
        {contact.name}: {contact.number}
      </p>
      <button
        onClick={() => onDelete(contact.id)}
        className={styles.btn}
        type="button"
      >
        Delete
      </button>
    </li>
  ));
  return <ul className={styles.list}>{element}</ul>;
}

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
