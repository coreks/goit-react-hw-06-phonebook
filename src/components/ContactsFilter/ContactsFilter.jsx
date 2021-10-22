import { useSelector, useDispatch } from 'react-redux';

import { getFilter } from '../../redux/contacts/contactsSelectors';
import actions from '../../redux/contacts/contactsActions';

import s from '../ContactsFilter/ContactsFilter.module.css';

const ContactsFilter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = e => dispatch(actions.changeFilter(e.target.value));

  return (
    <label className={s.filter__label}>
      Find contacts by name
      <input
        type="text"
        value={value}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        onChange={onChange}
      />
    </label>
  );
};

export default ContactsFilter;
