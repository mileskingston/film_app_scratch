import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllFilmInfo } from '../../actions/index';
import Rating from '../Rating/Rating';
import LazyLoadImage from '../LazyLoadImage/LazyLoadImage';
import Placeholder from '../Placeholder/Placeholder';
import constants from '../../utils/constants';
import './Film.css';

class Film extends PureComponent {
  constructor(props) {
    super(props);

    this.getFilm = this.getFilm.bind(this);
  }

  getFilm() {
    this.props.fetchAllFilmInfo(this.props.film.id);
  }

  render() {
    const { props } = this;
    const titleDecoded = props.film.title.toLowerCase().replace(/[^a-zA-Z0-9']+/g, '-').replace(/[']+/g, '');

    return (
      <div className="film">
        <Link to={`/film/${titleDecoded}`} onClick={this.getFilm}>
          {props.film.poster_path ? (
            <LazyLoadImage 
              src={`${constants.IMG_BASE}w300/${props.film.poster_path}`}
              alt={`${props.film.title} film poster`}
              width="300"
              height="450"
            /> ) : (
              <Placeholder width="300" height="450" />
            )
          }

          <div className="film__content">
            <h3>{props.film.title}</h3>
            {props.film.vote_average > 0 &&
               <Rating
                rating={props.film.vote_average}
                count={props.film.vote_count}
                showTotal={true} 
              /> 
            }
          </div>
        </Link>
      </div>
    );
  }
}

Film.displayName = 'Film';

Film.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number,
    adult: PropTypes.bool,
    backdrop_path: PropTypes.string,
    genre_id: PropTypes.arrayOf(
      PropTypes.string
    ),
    original_language: PropTypes.string,
    original_title: PropTypes.string,
    overview:  PropTypes.string,
    popularity: PropTypes.number,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    title: PropTypes.string,
    video: PropTypes.bool,
    vote_average: PropTypes.number,
    vote_count: PropTypes.number
  }).isRequired
};

function mapStateToProps(state) {
  
  return {
    filmDetail: state.film,
    filmIds: state.filmIds,
    filmCredits: state.filmCredits,
    fetchFilmRecommendations: state.fetchFilmRecommendations
  }
}

export default connect(mapStateToProps, {fetchAllFilmInfo})(Film);
