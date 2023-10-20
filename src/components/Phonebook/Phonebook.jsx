import { setError, setName, setNumber } from 'redux/phonebookReducer';
import css from './Phonebook.module.css';
import { useDispatch, useSelector } from 'react-redux';

export const Phonebook = ({ handleAddContact }) => {
  const phonebookName = useSelector(state => state.phonebook.name);
  const phonebookNumber = useSelector(state => state.phonebook.number);
  const phonebookError = useSelector(state => state.phonebook.error);
  const dispatch = useDispatch();

  const handleNumberChange = event => {
    dispatch(setNumber(event.target.value));
  };

  const handleNameChange = event => {
    dispatch(setName(event.target.value));
  };

  const handleSubmit = event => {
    event.preventDefault();
    const contactData = {
      name: phonebookName,
      number: Number.parseInt(phonebookNumber),
    };
    if (isNaN(contactData.number)) {
      return dispatch(setError('Please write number'));
    }
    handleAddContact(contactData);
    dispatch(setNumber(''));
    dispatch(setName(''));
    dispatch(setError(false));
  };

  return (
    <form onSubmit={handleSubmit} className={css.phonebookContainer}>
      <label className={css.phonebookLabel}>
        <span className={css.phonebookText}>Name</span>
        <input
          className={css.phonebookInput}
          onChange={handleNameChange}
          value={phonebookName}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.phonebookLabel}>
        <span className={css.phonebookText}>Number</span>
        {phonebookError && (
          <span className={css.phonebookTextError}>{phonebookError}</span>
        )}
        <input
          className={css.phonebookInput}
          onChange={handleNumberChange}
          value={phonebookNumber}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={css.phonebookBtn}>
        Add contact
      </button>
    </form>
  );
};
