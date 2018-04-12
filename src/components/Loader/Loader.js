import React from 'react';
import PropTypes from 'prop-types';

import loaderIcon from '../../images/spinner.svg';
import './Loader.css';

function Loader() {
  return (
    <div className="loader">
      <img className="loader__icon" src={loaderIcon} alt="loading icon" />
    </div>
  );
}

export default Loader;
