import PropTypes from 'prop-types';
import React from 'react';

import './Placeholder.css';

function Placeholder(props) {

  function renderWidth() {
    if (props.fixedWidth) {
      return {
        maxWidth: props.width + 'px'
      };
    }
  }

  return (
    <span className="placeholder" style={renderWidth()}>
      <svg className={props.classes} viewBox={`0 0 ${props.width} ${props.height}`}>
        <rect x="0" y="0" width={props.width} height={props.height} />
      </svg>
    </span>
  );
}

Placeholder.propTypes = {
  classes: PropTypes.string,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  fixedWidth: PropTypes.bool
};

Placeholder.defaultProps = {
  classes: '',
  fixedWidth: false
};

export default Placeholder;
