import { ContactsList } from 'components/ContactList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { Phonebook } from 'components/Phonebook/Phonebook';
import { Title } from 'components/Title/Title';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact, setFilter } from 'redux/phonebookReducer';

export const App = () => {
  const phonebookContacts = useSelector(state => state.phonebook.contacts);
  const phonebookFilter = useSelector(state => state.phonebook.filter);
  const dispatch = useDispatch();

  const handleAddContact = contactData => {
    if (phonebookContacts.some(contact => contact.name === contactData.name)) {
      alert(`${contactData.name} is already in contacts`);
      return;
    }

    dispatch(addContact(contactData));
  };

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  const handleDeleteContacts = contactName => {
    dispatch(deleteContact(contactName));
  };

  const filteredContacts = phonebookContacts.filter(contact =>
    contact.name.toLowerCase().includes(phonebookFilter.toLowerCase())
  );

  return (
    <div>
      <Title title={'Phonebook'} />
      <Phonebook handleAddContact={handleAddContact} />
      <Title title={'Contacts'} />
      <Filter filter={phonebookFilter} onFilterChange={handleFilterChange} />
      <ContactsList
        filteredContacts={filteredContacts}
        handleDeleteContacts={handleDeleteContacts}
      />
    </div>
  );
};
