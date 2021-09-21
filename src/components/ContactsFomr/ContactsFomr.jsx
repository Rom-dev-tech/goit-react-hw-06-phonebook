import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import contactsActions from '../../redux/phonebook/contacts-actions';
import { getContacts } from '../../redux/phonebook/contacts-selectors';
import toastr from 'toastr';
import toastrOptions from '../../components/Notification';
import useInput from '../../Hooks/useInput';
import '../ContactsFomr/ContactsFomr.scss';

const ContactsFomr = ({ onClose }) => {
  const inputName = useInput('');
  const inputNumber = useInput('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const checkValidatitonOfNewContact = (value) => {
    if (typeof value === 'string') {
      return contacts.find(
        ({ name }) => name.toLowerCase() === value.toLowerCase()
      );
    } else {
      return contacts.find(({ number }) => number === value);
    }
  };

  const toastrMessage = (message) => {
    toastr.error(`Contact ${message} is already in contacts`);
    toastrOptions();
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const name = inputName.value;
    const number = Number(inputNumber.value);

    if (checkValidatitonOfNewContact(name)) {
      toastrMessage(name);
      return;
    }

    if (checkValidatitonOfNewContact(number)) {
      toastrMessage(number);
      return;
    }

    dispatch(contactsActions.addContact(name, number));
    onClose();
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <label className="form__label">
        <span className="form__name">Name</span>
        <input
          {...inputName.bind}
          className="form__input"
          autoComplete="off"
          type="text"
          name="name"
          placeholder="Nikoly Mosalov"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="The name can only consist of letters, apostrophes, dashes and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan, etc."
          required
        />
      </label>

      <label className="form__label">
        <span className="form__name">Number</span>
        <input
          className="form__input"
          {...inputNumber.bind}
          autoComplete="off"
          type="tel"
          name="number"
          placeholder="+380677777777"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="The phone number must be digits and can contain spaces, dashes, parentheses and can start with + "
          required
        />
      </label>
      <button className="form__button" type="submit">
        Add contact
      </button>
    </form>
  );
};

ContactsFomr.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ContactsFomr;
