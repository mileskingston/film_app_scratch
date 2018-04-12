import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';

import './SocialLink.css';

function SocialLink(props) {
  return (
    <a
      className="social__link"
      target="_blank"
      href={props.href}
    >
      <Icon name={props.icon} width={30} />
    </a>
  );
}

SocialLink.displayName = 'SocialLink';

SocialLink.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default SocialLink;