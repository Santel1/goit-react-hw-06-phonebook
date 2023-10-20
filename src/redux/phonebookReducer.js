import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  name: '',
  number: '',
  error: false,
  contacts: [],
  filter: '',
};

const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: INITIAL_STATE,
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
    setNumber(state, action) {
      state.number = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.name !== action.payload
      );
    },
  },
});

export const {
  setName,
  setNumber,
  setError,
  addContact,
  deleteContact,
  setFilter,
} = phonebookSlice.actions;

export const phonebookReducer = phonebookSlice.reducer;
