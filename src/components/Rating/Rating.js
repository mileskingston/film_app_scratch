import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import './Rating.css';

function Rating(props) {
  function renderStars() {
    const MAX_COUNT = 5;
    const hasHalfItem = props.rating % 2 !== 0;
    const value = Math.round((hasHalfItem ? props.rating - 1 : props.rating) / 2);
    const items = [];

    for (let i = 1; i <= MAX_COUNT; i++) {
      if (i <= value) {
        pushImage('starFull');   
      }

      if (hasHalfItem && (i - 1 === value)) {
        pushImage('starHalf');
      }

      function pushImage(iconName) {
        items.push(
          <Icon
            key={i}
            name={iconName}
            width={iconName === 'starFull' ? 22 : 11}
            fill="#FFCD00"
            stroke="#FFCD00"
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
