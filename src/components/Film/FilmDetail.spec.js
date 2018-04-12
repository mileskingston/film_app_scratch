import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import FilmDetail from './FilmDetail';

describe('FilmDetail, ', () => {
  const initialState = {
    filmDetail: {
      adult: false,
      backdrop_path: '/kywkOlRpYtfVlar41R1s8lO46vD.jpg',
      budget: 70000000,
      genres: [{
        id: 28,
        name: 'Action'
      },
      {
        id: 53,
        name: 'Thriller'
      }],
      id: 1573,
      original_title: "Die Hard 2",
      overview: "John McClane is an off-duty cop gripped with a feeling of déjà vu when on a snowy Christmas Eve in the nation's capital, terrorists seize a major international airport, holding thousands of holiday travelers hostage. Renegade military commandos led by a murderous rogue officer plot to rescue a drug lord from justice and are prepared for every contingency except one: McClane's smart-mouthed heroics.",
      poster_path: "/zSgL998DXaljsCmwQuwDM8Ak4rV.jpg",
      release_date: "1990-07-02",
      revenue: 240031094,
      runtime: 124,
      title: "Die Hard 2",
      vote_average: 6.7,
      vote_count: 2278
    },
    filmIds: {
      imdb_id: 'tt0112864',
      facebook_id: null,
      instagram_id: null,
      twitter_id: null,
      id: 1572
    },
    filmRecommendations: [{
      id: 36955,
      video: false,
      vote_count: 1342,
      vote_average: 6.8,
      title: 'True Lies',
      original_title: 'True Lies',
      backdrop_path: '/eQZCyr28X5rRxlAm7EUofX3Jhxm.jpg',
      overview: 'Harry Tasker is a secret agent for the United States Government. For years, he has kept his job from his wife, but is forced to reveal his identity and try to stop nuclear terrorists when he and his wife are kidnapped by them.',
      poster_path: '/mTAHr5h5i64hTLqo0cW2X2083Cx.jpg'
    }],
    filmTrailer: [{
      id: '5a213c320e0a264ccd0a470d',
      key: 'gQ0uSh2Hgcs',
      name: 'Die Hard: With A Vengeance Trailer (HD)',
      site: 'YouTube',
      size: 720,
    }],
    filmCrew: [{
      credit_id: '52fe42ffc3a36847f8032955',
      department: 'Directing',
      gender: 2,
      id: 1090,
      job: 'Director',
      name: 'John McTiernan',
      profile_path: '/tknmquMIO2oAVUZ0vVX78ALHyaT.jpg'
    }],
    filmCast: [{
      cast_id: 8,
      character: 'John McClane',
      credit_id: '52fe42ffc3a36847f803297b',
      gender: 2,
      id: 62,
      name: 'Bruce Willis',
      order: 0,
      profile_path: '/kI1OluWhLJk3pnR19VjOfABpnTY.jpg'
    }]
  };
  const mockStore = configureStore();
  let store = mockStore(initialState);
  let wrapper = shallow(<FilmDetail store={store}/>).dive();

  it('renders container', () => {
    expect(wrapper.find('.film-detail').length).toEqual(1);
  });

  it('renders film title', () => {
    expect(wrapper.find('.film-detail__content h1').text()).toContain('Die Hard 2');
  });

  it('renders film rating', () => {
    expect(wrapper.find('Rating').length).toEqual(1);
  });

  it('renders film poster', () => {
    expect(wrapper.find('LazyLoadImage').length).toEqual(1);
  });

  it('renders film cast container', () => {
    expect(wrapper.find('.row.film-detail__profile-crew').length).toEqual(1);
  });

  it('renders film cast container', () => {
    expect(wrapper.find('.row.film-detail__profile-cast').length).toEqual(1);
  });

  it('renders film trailer container', () => {
    expect(wrapper.find('.film-detail .film-detail__trailer').length).toEqual(1);
  });

  it('renders film recommendations container', () => {
    expect(wrapper.find('.film-detail .film-detail__recommend').length).toEqual(1);
  });

  it('renders film genres container', () => {
    expect(wrapper.find('.film-detail .film-detail__genres').length).toEqual(1);
  });
});