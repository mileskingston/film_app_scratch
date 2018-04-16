import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchProfile } from '../../actions/index';
import LazyLoadImage from '../LazyLoadImage/LazyLoadImage';
import Placeholder from '../Placeholder/Placeholder';
import constants from '../../utils/constants';
import './Profile.css';

class Profile extends PureComponent {
  constructor(props) {
    super(props);

    this.fetchProfile = this.fetchProfile.bind(this);
  }

  fetchProfile() {
    this.props.fetchProfile(this.props.data.id);
  }

  renderRole() {
    if (this.props.data.job) {
      return (
        <p className="profile__job">{this.props.data.job}</p>
      );
    } else if (this.props.data.character) {
      return (
        <p className="profile__character">{this.props.data.character}</p>
      );
    }
  }

  render() {
    const { props } = this;

    return (
      <div className="col profile" onClick={() => {props.fetchProfile()}}>
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
        { this.renderRole() }
      </div>
    );
  }
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

function mapStateToProps(state) {  
  return {
    profile: state.profile
  }
}

export default connect(mapStateToProps, {fetchProfile})(Profile);
