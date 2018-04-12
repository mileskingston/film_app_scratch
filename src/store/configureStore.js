import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/index';
import { loadState, saveState } from '../utils/localStorage';

const persistedState = loadState();

const initState = {
  filmIds: [],
  filmDetail: {},
  hasSubmitted: false,
  searchVal: null,
  filmCrew: [],
  filmCast: [],
  filmSearch: {},
  filmTrailer: [],
  filmRecommendations: []
};

const store = createStore(
  reducer,
  persistedState ? persistedState : initState,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;