import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/add', data => {
  return {
    payload: {
      id: shortid.generate(),
      ...data,
    },
  };
});
const deleteContact = createAction('contacts/delete');
const changeFilter = createAction('contacts/change_filter');

const actions = { addContact, deleteContact, changeFilter };

export default actions;
