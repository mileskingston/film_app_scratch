import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import PlaceHolder from '../Placeholder/Placeholder';

import './LazyLoadImage.css';

class LazyLoadImage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    };
  }

  componentDidMount() {
    const newImage = document.createElement('img');

    newImage.src = this.props.src;

    newImage.onload = () => {
      this.setState({ loaded: true });
    };
  }

  render() {
    const { props, state } = this;

    return (
      <div className="lazy-load-image">
        <img
          src={props.src}
          alt={props.alt}
          className={`lazy-load-image__img ${state.loaded ? 'is--fade-in' : 'is--hidden'}`}
        />

        <div className={`lazy-load-image__img ${state.loaded ? 'is--fade-out' : ''}`}>
          <PlaceHolder
            width={props.width}
            height={props.height}
          />
        </div>
      </div>
    );
  }
}

LazyLoadImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired
};

LazyLoadImage.defaultProps = {
  alt: ''
};

export default LazyLoadImage;
