import React from 'react';
import PropTypes from 'prop-types';
import './Message.css';

function Message(props) {
  const classes = ['message'];

  switch(props.type) {
    case 'success':
      classes.push('message--success');    
      break;
    case 'warning':
      classes.push('message--warning');    
      break;
    case 'info':
      classes.push('message--info');    
      break;
    default:
      classes.push('message--error');
      break;
  }

  return (
    <div className={classes.join(' ')}>
      {props.text}
    </div>
  );
}

Message.displayName = 'Message';

Message.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'error', 'warning', 'info'])
};

Message.defaultProps = {
  type: 'error'
};

export default Message;
