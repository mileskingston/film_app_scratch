import React from 'react';
import PropTypes from 'prop-types';
import './Rating.css';
// import starFull from '../../images/starFull.svg';
// import starHalf from '../../images/starHalf.svg';

function Rating(props) {
  function renderStars() {
    const MAX_COUNT = 5;
    const hasHalfItem = props.rating % 2 !== 0;
    const value = Math.round((hasHalfItem ? props.rating - 1 : props.rating) / 2);
    const items = [];

    for (let i = 1; i <= MAX_COUNT; i++) {
      if (i <= value) {
        // pushImage(starFull);       
      }

      if (hasHalfItem && (i - 1 === value)) {
        // pushImage(starHalf, 'rating__star--half');
      }

      function pushImage(imgUrl, addClass) {
        items.push(
          <img 
            className={`rating__star ${addClass ? addClass : ''}`}
            key={i}
            src={imgUrl}
            alt="star icon"
          />
        );
      }
    }

    return items;
  }

  return (
    <div className="rating">
      {renderStars()}

      {props.showTotal &&
        <span className="rating__total">({props.count})</span>
      }
    </div>
  );
}

Rating.displayName = 'Rating';

Rating.propTypes = {
  rating: PropTypes.number,
  count: PropTypes.number,
  showTotal: PropTypes.bool
};

Rating.defaultProps = {
  showTotal: false,
  rating: 0,
  count: 0
};

export default Rating;
