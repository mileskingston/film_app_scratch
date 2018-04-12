import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Route, BrowserRouter } from 'react-router-dom';
import { fetchSearchResults } from './actions/index';
import { connect } from 'react-redux';

import Header from './components/Header/Header';
import FilmDetail from './components/Film/FilmDetail';
import FilmSearch from './components/Film/FilmSearch';

import './App.css';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.findFilm = this.findFilm.bind(this);
  }

  findFilm(e, val) {
    e.preventDefault();
    this.props.fetchSearchResults(val);
  }

  render() {

    return (
      <BrowserRouter>     
        <div className="app">
          <Route
            exact
            path="/"
            render={() => (
              <Fragment>
                <Header handleClick={this.findFilm} />
                <div className="container">
                  <FilmSearch results={this.props.filmSearch} />
                </div>
              </Fragment>
            )}
          />
          <Route
            path="/film/:filmTitle"
            render={() => (
              <Fragment>
                <Header handleClick={this.findFilm} showSearch={false} />
                <FilmDetail />
              </Fragment>                
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

App.displayName = 'App';

App.propTypes = {
  filmSearch: PropTypes.shape({}).isRequired
};

function mapStateToProps(state) {
  return {
    hasSubmitted: state.hasSubmitted,
    filmSearch: state.filmSearch
  }
}

export default connect(mapStateToProps, {fetchSearchResults})(App);

