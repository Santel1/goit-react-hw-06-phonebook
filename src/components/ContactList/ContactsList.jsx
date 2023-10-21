import { ContactItem } from '../ContactItem/ContactItem';
import { nanoid } from 'nanoid';

import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/phonebookReducer';
import { Title } from 'components/Title/Title';
import { Filter } from 'components/Filter/Filter';

export const ContactsList = () => {
  const phonebookContacts = useSelector(state => state.phonebook.contacts);
  const phonebookFilter = useSelector(state => state.phonebook.filter);
  const dispatch = useDispatch();

  const filteredContacts = phonebookContacts.filter(contact =>
    contact.name.toLowerCase().includes(phonebookFilter.toLowerCase())
  );
  const handleDeleteContacts = contactName => {
    dispatch(deleteContact(contactName));
  };
  return (
    <div className={css.contactsListContainer}>
      <Title title={'Contacts'} />
      <Filter />
      <ul className={css.contactsList}>
        {filteredContacts.map(contact => {
          return (
            <ContactItem
              key={nanoid()}
              name={contact.name}
              number={contact.number}
              handleDeleteContacts={handleDeleteContacts}
            />
          );
        })}
      </ul>
    </div>
  );
};
