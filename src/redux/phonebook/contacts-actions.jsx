import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/add', (name, number) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));

const deleteContacts = createAction('contacts/delete');

const changeFilter = createAction('contacts/changeFilter');

const contactsActions = { addContact, deleteContacts, changeFilter };

export default contactsActions;
