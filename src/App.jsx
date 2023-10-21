import { ContactsList } from 'components/ContactList/ContactsList';
import { Phonebook } from 'components/Phonebook/Phonebook';

export const App = () => {
  return (
    <div>
      <Phonebook />
      <ContactsList />
    </div>
  );
};
