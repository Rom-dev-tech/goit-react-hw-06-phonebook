import PropTypes from 'prop-types';
import 'components/NotificatiomMessage/NotisicationMessage.scss';

const NotificatiomMessage = ({ message }) => {
  return <h2 className="message">{message}</h2>;
};

NotificatiomMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default NotificatiomMessage;
