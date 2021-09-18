import { useState } from 'react';
import ContactsFomr from '../components/ContactsFomr';
import ContactsList from '../components/ContactsList';
import Clock from '../components/Clock';
import MainTitle from '../components/MainTitle';
import Сounter from '../components/Сounter';
import Modal from '../components/Modal';
import IconButton from '../components/IconButton';
import { ReactComponent as AddIcon } from '../icons/add.svg';
import FlexWrapper from '../components/FlexWrapper';

const PhoneBookView = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Clock direction="end" size={30} />
      <MainTitle title="Phonebook" size={5} direction="center" />

      <FlexWrapper>
        <Сounter title="Total contacts:" />

        <IconButton onClick={toggleModal} aria-label="add contact">
          <AddIcon width="20" height="20" fill="#03a9f4" />
        </IconButton>
      </FlexWrapper>

      {showModal && (
        <Modal onClose={toggleModal}>
          <ContactsFomr onClose={toggleModal} />
        </Modal>
      )}

      <ContactsList />
    </>
  );
};

export default PhoneBookView;
