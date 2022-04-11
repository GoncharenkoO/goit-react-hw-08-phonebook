import { useState, useEffect, useCallback } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import ContactsForm from './ContactsForm';
import ContactsList from './ContactsList';
import LoaderComponent from '../../components/Loader/Loader';
import Filter from './Filter';
import operations from '../../redux/contacts/contacts-operations';
import {
  getAllContacts,
  getContactsLoading,
} from '../../redux/contacts/contacts-selectors';
import { getFilteredContacts } from './getFilteredContacts';

import styles from './phonebook.module.css';

const Phonebook = () => {
  const contacts = useSelector(getAllContacts, shallowEqual);
  const loading = useSelector(getContactsLoading, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    const getContacts = () => dispatch(operations.fetchContacts());
    getContacts();
  }, [dispatch]);

  const [filter, setFilter] = useState('');

  const handleChange = useCallback(({ target }) => setFilter(target.value), []);

  const addContact = payload => {
    dispatch(operations.addContact(payload));
  };

  const removeContact = id => {
    dispatch(operations.removeContact(id));
  };

  const filteredContacts = getFilteredContacts(filter, contacts);

  return (
    <div className={styles.section}>
      <h2 className={styles.title}>Phonebook</h2>
      <ContactsForm onSubmit={addContact} />
      <h2 className={styles.title}>Contacts</h2>
      <Filter value={filter} handleChange={handleChange} />
      {loading && <LoaderComponent />}
      <ContactsList contacts={filteredContacts} onDelete={removeContact} />
    </div>
  );
};

export default Phonebook;
