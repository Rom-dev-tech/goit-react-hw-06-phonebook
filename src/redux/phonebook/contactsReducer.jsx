import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as contactsActions from './contactsActions';

const items = createReducer([], {
  [contactsActions.addContact]: (state, { payload }) => [...state, payload],

  [contactsActions.deleteContacts]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [contactsActions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
