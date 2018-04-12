import React from 'react';
import PropTypes from 'prop-types';
import SocialLink from './SocialLink';

function SocialLinks(props) {
  
  function renderLink(key, href, icon) {
    return (
      <SocialLink 
        key={key}
        href={href}
        icon={icon}
      />
    );
  }

  const renderedLinks = Object.keys(props.links).map((key) => {
    const value = props.links[key];

    if (value !== null || isNaN(value)) {
      switch(key) {
        case 'imdb_id':
          return (
            renderLink(key, `http://www.imdb.com/title/${value}`, 'imdb')
          );
        case 'twitter_id':
          return (
            renderLink(key, `https://www.twitter.com/${value}`, 'twitter')
          );
        case 'facebook_id':
          return (
            renderLink(key, `https://www.facebook.com/${value}`, 'facebook')
          );
        case 'instagram_id':
          return (
            renderLink(key, `https://www.instagram.com/${value}`, 'instagram')
          );
        default:
          return;
      }
    }
  });

  return (
    <div className="social">
      {renderedLinks}
    </div>
  );    
}

SocialLinks.displayName = 'SocialLinks';

SocialLinks.propTypes = {
  links: PropTypes.shape({}).isRequired
};

export default SocialLinks;