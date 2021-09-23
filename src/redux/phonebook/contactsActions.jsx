import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/add', (name, number) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));

export const deleteContacts = createAction('contacts/delete');

export const changeFilter = createAction('contacts/changeFilter');
