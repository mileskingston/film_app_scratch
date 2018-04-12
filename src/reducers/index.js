export default function reducer(
  state, action) {

  const MAX_NUM = 6;

  switch (action.type) {
    case "FETCH_SUCCESS": {
      return {
        ...state,
        filmDetail: action.data
      }
    }
    case "FETCH_SEARCH_SUCCESS": {
      return {
        ...state,
        filmSearch: action.data,
        hasSubmitted: true,
        searchVal: action.searchVal
      }
    }
    case "FETCH_ID_SUCCESS": {
      return {
        ...state,
        filmIds: action.data
      }
    }
    case "FETCH_VIDEOS_SUCCESS": {
      return {
        ...state,
        filmTrailer: action.data.results.splice(0, 1)
      }
    }
    case "FETCH_CREDITS_SUCCESS": {
      return {
        ...state,
        filmCast: action.data.cast.splice(0, MAX_NUM),
        filmCrew: action.data.crew.splice(0, MAX_NUM)
      }
    }
    case "FETCH_RECOMMENDATIONS_SUCCESS": {
      return {
        ...state,
        filmRecommendations: action.data.results.splice(0, 10)
      }
    }
    case "FETCH_ERROR": {
      return {
        ...state,
        error: action.data
      }
    }
    default: {
      return {...state};
    }
  }
}