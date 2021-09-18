import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from '../../redux/phonebook/contacts-selectors';
import contactsActions from '../../redux/phonebook/contacts-actions';
import Title from '../../components/Title';
import Filter from '../../components/Filter';
import NotificatiomMessage from '../../components/NotificatiomMessage';
import { FaUser, FaPhone } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import IconButton from '../IconButton';
import { ReactComponent as AddIcon } from '../../icons/delete.svg';
import '../ContactsList/ContactsList.scss';

const ContactsList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const onDeleteContact = (id) => dispatch(contactsActions.deleteContacts(id));

  return (
    <>
      {contacts.length <= 0 ? (
        <NotificatiomMessage message={'no contacts yet ...'} />
      ) : (
        <>
          <Title title="Contacts" type="h1" />
          <Filter />
          <ul className="contacts__list">
            {contacts.map(({ id, name, number }) => (
              <li className="contacts__item" key={id}>
                <a className="contacts__link" href={`tel:${number}`}>
                  <p className="contacts__name">
                    <IconContext.Provider
                      value={{ className: 'react__icons--user' }}
                    >
                      <FaUser />
                    </IconContext.Provider>
                    {name}
                  </p>

                  <p className="contacts__number">
                    <IconContext.Provider
                      value={{ className: 'react__icons--phone' }}
                    >
                      <FaPhone />
                    </IconContext.Provider>
                    {number}
                  </p>
                </a>

                <IconButton
                  onClick={() => onDeleteContact(id)}
                  aria-label="delete contact"
                >
                  <AddIcon width="20" height="20" fill="red" />
                </IconButton>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default ContactsList;
