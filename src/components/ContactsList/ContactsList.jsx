import { useSelector, useDispatch } from 'react-redux';

import ContactsItem from './ContactItem/ContactItem';
import actions from '../../redux/contacts/contactsActions';
import { getFilteredContacts } from '../../redux/contacts/contactsSelectors';

import s from '../ContactsList/ContactsList.module.css';

const ContactsList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(actions.deleteContact(id));

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <ContactsItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteContact={() => onDeleteContact(id)}
        />
      ))}
    </ul>
  );
};

export default ContactsList;
