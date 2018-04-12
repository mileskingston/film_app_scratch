import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

function Button(props) {
  let classes = ['btn'];

  if (props.classes) {
    classes = classes.concat(props.classes.split(' '));
  }

  return (
    <button
      type={props.type}
      className={classes.join(' ')}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

Button.displayName = 'Button';

Button.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string
};

Button.defaultProps = {
  classes: '',
  disabled: false,
  onClick: () => {},
  type: 'button'
};

export default Button;
