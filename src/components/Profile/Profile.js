import React from 'react';
import PropTypes from 'prop-types';
import LazyLoadImage from '../LazyLoadImage/LazyLoadImage';
import Placeholder from '../Placeholder/Placeholder';
import constants from '../../utils/constants';
import './Profile.css';

function Profile(props) {

  function renderRole() {
    if (props.data.job) {
      return (
        <p className="profile__job">{props.data.job}</p>
      );
    } else if (props.data.character) {
      return (
        <p className="profile__character">{props.data.character}</p>
      );
    }
  }

  return (
    <div className="col profile">

      {props.data.profile_path ? (
        <LazyLoadImage
          src={`${constants.IMG_BASE}w138_and_h175_face${props.data.profile_path}`}
          alt={props.data.name}
          width="138"
          height="175"
        />) : (
          <Placeholder width="138" height="175" fixedWidth={true} />
        )
      }

      <h4>{props.data.name}</h4>
      { renderRole() }
    </div>
  );
} 

Profile.displayName = 'Profile';

Profile.propTypes = {
  data: PropTypes.shape({
    profile_path: PropTypes.string,
    name: PropTypes.string,
    character: PropTypes.string,
    job: PropTypes.string
  }).isRequired
};

export default Profile;
