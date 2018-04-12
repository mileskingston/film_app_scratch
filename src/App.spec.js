import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import App from './App';
import FilmSearch from './Film/FilmSearch';

describe('App, ', () => {
  const initialState = {
    filmDetail: {},
    filmIds: {},
    filmRecommendations: [],
    filmTrailer: [],
    filmCrew: [],
    filmCast: [],
    filmSearch: {
      page: 1,   
      results: [{
        backdrop_path: "/q4NRgTyah0KfxXB0P4DBk0lJR7P.jpg",
        genre_ids: [28, 53],
        id: 562,
        overview: "NYPD cop, John McClane's plan to reconcile with his estranged wife is thrown for a serious loop when minutes after he arrives at her office, the entire building is overtaken by a group of terrorists. With little help from the LAPD, wisecracking McClane sets out to single-handedly rescue the hostages and bring the bad guys down.",
        poster_path: "/mc7MubOLcIw3MDvnuQFrO9psfCa.jpg",
        release_date: "1988-07-15",
        title: "Die Hard",
        vote_average: 7.5,
        vote_count: 4695
      }],
      total_pages: 4,
      total_results: 63
    }
  };
  const mockStore = configureStore();
  let store = mockStore(initialState);
  let wrapper = shallow(
    <App store={store} />
  ).dive();

  it('renders container', () => {
    expect(wrapper.find('.app').length).toEqual(1);
  });
});