import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import constants from '../../utils/constants';
import Rating from '../Rating/Rating';
import SocialLinks from '../Social/SocialLinks';
import Profile from '../Profile/Profile';
import Films from '../Film/Films';
import Placeholder from '../Placeholder/Placeholder';
import LazyLoadImage from '../LazyLoadImage/LazyLoadImage';

import './FilmDetail.css';

class FilmDetail extends Component {
  renderDate(part) {
    const filmDate = new Date(this.props.details.release_date);
    const monthNames = [
      'January', 'February', 'March',
      'April', 'May', 'June', 'July',
      'August', 'September', 'October',
      'November', 'December'
    ];
    const day = filmDate.getDate();
    const monthIndex = filmDate.getMonth();
    const year = filmDate.getFullYear();

    if (part === 'year') {
      return year;
    }
    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }

  renderPrice(number) {
    if (number) {
      return number.toLocaleString();
    }
  }

  renderProfile(data) {
    const items = data.map((item) =>
      <Profile key={item.credit_id} data={item} />
    );
    return ( 
      <Fragment>{items}</Fragment> 
    );
  }

  getStyle() {
    if (this.props.details.backdrop_path) {
      return {
        backgroundImage: `url(${constants.IMG_BASE}original/${this.props.details.backdrop_path})`
      };
    }
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    const {props} = this;

    return (
      <div className="film-detail">
        <section className="row row--no-margin film-detail__banner" style={this.getStyle()}>
          <div className="col col--flex-grow-3 film-detail__content">
            <h1>
              {props.details.title}&nbsp;
              {props.details.release_date &&
                <span>({this.renderDate('year')})</span>
              }
            </h1>
            {props.details.overview &&
              <div>
                <h3 className="hide-mobile">Overview</h3>
                <p>{props.details.overview}</p>
              </div>
            }

            {props.details.vote_count > 0 &&
              <Rating
                rating={props.details.vote_average}
                count={props.details.vote_count}
                showTotal={true} 
              />
            }
            <SocialLinks links={props.filmIds} />
          </div>  
          <div className="col film-detail__poster">
            {props.details.poster_path ? (
              <LazyLoadImage
                src={`${constants.IMG_BASE}w300/${props.details.poster_path}`}
                alt={`${props.details.title} poster`}
                width="300"
                height="450"
              />) : (
                <Placeholder width="300" height="450" fixedWidth={true} /> 
              )
            }
          </div>
        </section>

        <section className="film-detail__main-primary">
          {props.cast.length > 0 &&
            <div className="row film-detail__profile-cast">
              <h3 className="col film-detail__main-title">Cast</h3>
              {this.renderProfile(props.cast)}
            </div>
          }
                    
          {props.crew.length > 0 &&
            <div className="row film-detail__profile-crew">
              <h3 className="col film-detail__main-title">Crew</h3>
              {this.renderProfile(props.crew)}
            </div>
          }

          {props.trailer.length > 0 &&
            <div className="row film-detail_trailer">
              <h3 className="col film-detail__main-title">Trailer</h3>
              <div className="col film-detail__trailer">
                <iframe
                  title={`${props.details.title} movie trailer`}
                  src={`https://www.youtube.com/embed/${props.trailer[0].key}?rel=0`}
                  frameBorder="0"
                  allow="autoplay; encrypted-media" 
                  allowFullScreen 
                />
              </div>
            </div>
          }

          {props.recommended.length > 0 &&
            <div className="row"> 
              <h3 className="col film-detail__main-title">Recommended</h3>
              <div className="col film-detail__recommend">
                <Films results={props.recommended} />
              </div>
            </div>
          }
        </section>

        <aside className="film-detail__main-secondary">
          {props.details.runtime > 0 &&
            <p>
              <b>Runtime:</b>
              <br /> {props.details.runtime} minutes
            </p>
          }

          {props.details.release_date &&
            <p>
              <b>Released:</b>
              <br /> {this.renderDate()}
            </p>
          }

          {props.details.budget > 0 &&
            <p>
              <b>Budget:</b>
              <br /> ${this.renderPrice(props.details.budget)}
            </p>
          }

          {props.details.revenue > 0 &&
            <p>
              <b>Revenue:</b>
              <br /> ${this.renderPrice(props.details.revenue)}
            </p>
          }

          {props.details.genres 
            && props.details.genres.length > 0 
            && (
              <div>
                <b>Genres:</b>
                <ul className="film-detail__genres">
                  {props.details.genres && 
                    props.details.genres.map((genre, i) =>
                      <li key={genre.id}>
                        {genre.name}
                      </li>
                    )
                  }
                </ul>
              </div>
            )}
        </aside>
      </div>
    );
  }
}  

FilmDetail.displayName = 'FilmDetail';

FilmDetail.propTypes = {
  details: PropTypes.shape({
    budget: PropTypes.number,
    revenue: PropTypes.number,
    runtime: PropTypes.number,
    release_date: PropTypes.string,
    backdrop_path: PropTypes.string,
    title: PropTypes.string,
    genres: PropTypes.array
  }).isRequired,
  recommended: PropTypes.arrayOf(PropTypes.object),
  crew: PropTypes.arrayOf(PropTypes.object).isRequired,
  cast: PropTypes.arrayOf(PropTypes.object).isRequired,
  filmIds: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string, PropTypes.number
  ])).isRequired
};

function mapStateToProps(state) {
  return {
    filmIds: state.filmIds,
    details: state.filmDetail,
    crew: state.filmCrew,
    cast: state.filmCast,
    trailer: state.filmTrailer,
    recommended: state.filmRecommendations
  }
}

export default connect(mapStateToProps)(FilmDetail);
