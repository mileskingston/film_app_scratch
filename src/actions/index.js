import axios from 'axios';

const ROOT_URL = 'https://api.themoviedb.org/3/movie/',
  SEARCH_URL = 'https://api.themoviedb.org/3/search/movie',
  API_KEY = '?api_key=65a08ce009e24e9aa54e97af25a56861',
  PAGE_NO = '&page=1',
  LANGUAGE = '&language=en-US';

// Most popular films api
// ${ROOT_URL}popular${API_KEY}${LANGUAGE}&page=1

export function fetchAllFilmInfo(id) {
  const getDetailsUrl = axios.get(`${ROOT_URL}${id}${API_KEY}`);
  const getFilmIdsUrl = axios.get(`${ROOT_URL}${id}/external_ids${API_KEY}`);
  const getFilmCreditsUrl = axios.get(`${ROOT_URL}${id}/credits${API_KEY}`);
  const getFilmVideosUrl = axios.get(`${ROOT_URL}${id}/videos${API_KEY}${LANGUAGE}`);
  const getFilmRecommendsUrl = axios.get(`${ROOT_URL}${id}/recommendations${API_KEY}${LANGUAGE}${PAGE_NO}`);

  /**
   * TODO:
   * add redux multi for dispatch
  */
  return (dispatch) => {
    return axios.all([
      getDetailsUrl,
      getFilmIdsUrl,
      getFilmCreditsUrl,
      getFilmVideosUrl,
      getFilmRecommendsUrl
    ])
    .then(axios.spread((details, filmIds, credits, videos, recommendations) => {
      dispatch(fetchFilmSuccess(details));
      dispatch(fetchFilmIdSuccess(filmIds));
      dispatch(fetchFilmVideosSuccess(videos));
      dispatch(fetchFilmCreditsSuccess(credits));
      dispatch(fetchFilmRecommendationsSuccess(recommendations));
    }))
    .catch(error => console.log(error));
  };
}

export function fetchFilm(id) {
  const getDetailsUrl = `${ROOT_URL}${id}${API_KEY}`;
  const request = axios.get(getDetailsUrl);

  return (dispatch) => {
    return request
      .then(
        success => dispatch(fetchFilmSuccess(success)),
        error => dispatch(fetchFilmError(error))
      )
  };
}

export function fetchSearchResults(val, page) {
  const getSearchUrl = `
    ${SEARCH_URL}${API_KEY}${LANGUAGE}&query=${val}${page ? '&page='+page : PAGE_NO}&include_adult=false
  `;
  const request = axios.get(getSearchUrl);

  return (dispatch) => {
    return request
      .then(
        success => dispatch(fetchSearchSuccess(success, val)),
        error => dispatch(fetchFilmError(error))
      );
  };
}

export function fetchFilmIds(id) {
  const getFilmIdsUrl = `${ROOT_URL}${id}/external_ids${API_KEY}`;
  const request = axios.get(getFilmIdsUrl);
  
  return (dispatch) => {
    return request
      .then(
        success => dispatch(fetchFilmIdSuccess(success)),
        error => dispatch(fetchFilmError(error))
      );
  };
}

export function fetchFilmCredits(id) {
  const getFilmCreditsUrl = `${ROOT_URL}${id}/credits${API_KEY}`;
  const request = axios.get(getFilmCreditsUrl);
  
  return (dispatch) => {
    return request
      .then(
        success => dispatch(fetchFilmCreditsSuccess(success)),
        error => dispatch(fetchFilmError(error))
      );
  };
}

export function fetchFilmVideos(id) {
  const getFilmVideosUrl = `${ROOT_URL}${id}/videos${API_KEY}${LANGUAGE}`;
  const request = axios.get(getFilmVideosUrl);
  
  return (dispatch) => {
    return request
      .then(
        success => dispatch(fetchFilmVideosSuccess(success)),
        error => dispatch(fetchFilmError(error))
      );
  };
}

export function fetchFilmRecommendations(id) {
  const getFilmRecommendsUrl = `${ROOT_URL}${id}/recommendations${API_KEY}${LANGUAGE}${PAGE_NO}`;
  const request = axios.get(getFilmRecommendsUrl);

  return (dispatch) => {
    return request
      .then(
        success => dispatch(fetchFilmRecommendationsSuccess(success)),
        error => dispatch(fetchFilmError(error))
      );
  };
}

export function fetchSearchSuccess(response, val) {
  return {
    type: 'FETCH_SEARCH_SUCCESS',
    data: response.data,
    searchVal: val
  };
}

export function fetchFilmIdSuccess(response) {
  return {
    type: 'FETCH_ID_SUCCESS',
    data: response.data
  };
}

export function fetchFilmVideosSuccess(response) {
  return {
    type: 'FETCH_VIDEOS_SUCCESS',
    data: response.data
  };
}

export function fetchFilmCreditsSuccess(response) {
  return {
    type: 'FETCH_CREDITS_SUCCESS',
    data: response.data
  };
}

export function fetchFilmRecommendationsSuccess(response) {
  return {
    type: 'FETCH_RECOMMENDATIONS_SUCCESS',
    data: response.data
  };
}

export function fetchFilmSuccess(response) {
  // not calling reducer??
  return {
    type: 'FETCH_SUCCESS',
    data: response.data
  };
}

export function fetchFilmError(response) {
  return {
    type: 'FETCH_ERROR',
    filmDetail: response.data
  };
}
