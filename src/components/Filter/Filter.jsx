import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';
import { setFilter } from 'redux/phonebookReducer';

export const Filter = () => {
  const phonebookFilter = useSelector(state => state.phonebook.filter);

  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <label className={css.filterContainer}>
      <input
        type="text"
        className={css.filterInput}
        value={phonebookFilter}
        onChange={handleFilterChange}
        placeholder="Search contacts"
      />
    </label>
  );
};
