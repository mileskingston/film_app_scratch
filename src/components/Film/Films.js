import React from 'react';
import PropTypes from 'prop-types';
import Film from '../Film/Film';

import './Films.css';

function Films(props) {
  let renderFilm;

  if (props.results) {
    renderFilm = props.results.map((film, i) =>
      <Film key={film.id} film={film} />
    )
  }

  return (
    <div className="films">
      {renderFilm}
    </div>
  );
}

Films.displayName = 'Films';

Films.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Films;