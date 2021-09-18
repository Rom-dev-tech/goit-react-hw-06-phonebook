import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/phonebook/contacts-selectors';

const Сounter = ({ title }) => {
  const totalContactsCount = useSelector(getContacts);

  return (
    <div style={{ fontSize: '2rem' }}>
      {title} {totalContactsCount.length}
    </div>
  );
};

Сounter.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Сounter;
