import React from 'react';
import ReactDOM from 'react-dom';
import Provider from 'react-redux';
import { shallow, mount } from 'enzyme';
import FilmSearch from './FilmSearch';
import configureStore from 'redux-mock-store';

describe('FilmSearch, ', () => {
  const mockStore = configureStore();
  const initialState = {};
  const store = mockStore(initialState);
  const results = {
    page: 1,
    total_results: 5,
    total_pages: 1,
    results: [
      {
        vote_count: 8521,
        id: 10195,
        video: false,
        vote_average: 6.6,
        title: 'Thor',
        popularity: 68.846493,
        poster_path: '/bIuOWTtyFPjsFDevqvF3QrD1aun.jpg',
        original_language: 'en',
        original_title: 'Thor',
        genre_ids: [
          12,
          14,
          28
        ],
        backdrop_path: '/LvmmDZxkTDqp0DX7mUo621ahdX.jpg',
        adult: false,
        overview: 'Against his father Odin\'s will, The Mighty Thor - a powerful but arrogant warrior god - recklessly reignites an ancient war. Thor is cast down to Earth and forced to live among humans as punishment. Once here, Thor learns what it takes to be a true hero when the most dangerous villain of his world sends the darkest forces of Asgard to invade Earth.',
        release_date: '2011-04-21'
      },
      {
        vote_count: 5346,
        id: 284053,
        video: false,
        vote_average: 7.4,
        title: 'Thor: Ragnarok',
        popularity: 134.393829,
        poster_path: '/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg',
        original_language: 'en',
        original_title: 'Thor: Ragnarok',
        genre_ids: [
          28,
          12,
          14
        ],
        backdrop_path: '/kaIfm5ryEOwYg8mLbq8HkPuM1Fo.jpg',
        adult: false,
        overview: 'Thor is imprisoned on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the prophecy of destruction to his homeworld and the end of Asgardian civilization, at the hands of an all-powerful new threat, the ruthless Hela.',
        release_date: '2017-10-25'
      },
      {
        vote_count: 6514,
        id: 76338,
        video: false,
        vote_average: 6.7,
        title: 'Thor: The Dark World',
        popularity: 68.542425,
        poster_path: '/bnX5PqAdQZRXSw3aX3DutDcdso5.jpg',
        original_language: 'en',
        original_title: 'Thor: The Dark World',
        genre_ids: [
          28,
          12,
          14
        ],
        backdrop_path: '/3FweBee0xZoY77uO1bhUOlQorNH.jpg',
        adult: false,
        overview: 'Thor fights to restore order across the cosmos… but an ancient race led by the vengeful Malekith returns to plunge the universe back into darkness. Faced with an enemy that even Odin and Asgard cannot withstand, Thor must embark on his most perilous and personal journey yet, one that will reunite him with Jane Foster and force him to sacrifice everything to save us all.',
        release_date: '2013-10-29'
      },
      {
        vote_count: 144,
        id: 413279,
        video: false,
        vote_average: 7.6,
        title: 'Team Thor',
        popularity: 7.383427,
        poster_path: '/aRslMOklOA76irVDpsLdKDRMUxZ.jpg',
        original_language: 'en',
        original_title: 'Team Thor',
        genre_ids: [
          35,
          14,
          878
        ],
        backdrop_path: '/26X47ySirNiG3HyKjDWgjkT1Njl.jpg',
        adult: false,
        overview: 'Discover what Thor was up to during the events of Captain America: Civil War.',
        release_date: '2016-08-28'
      },
      {
        vote_count: 56,
        id: 441829,
        video: false,
        vote_average: 7.3,
        title: 'Team Thor: Part 2',
        popularity: 6.584865,
        poster_path: '/hBByhGBRAuaDi5ZIAKrEYmPkUXT.jpg',
        original_language: 'en',
        original_title: 'Team Thor: Part 2',
        genre_ids: [
          878,
          35,
          14
        ],
        backdrop_path: '/pgw1LdRyanwJ7sM6DWqKuPDqxVX.jpg',
        adult: false,
        overview: 'A continuation of the documentary spoof of what Thor and his roommate Darryl were up to during the events of "Captain America: Civil War". While Cap and Iron Man duke it out, Thor tries to pay Darryl his rent in Asgardian coins.',
        release_date: '2017-02-14'
      }
    ]
  };

  const wrapper = shallow(
    <FilmSearch store={store} results={results} />
  );

  it('renders container', () => {
  });
});