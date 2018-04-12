import React from 'react';
import ReactDOM from 'react-dom';
import Films from './Films';
import { shallow } from 'enzyme';

const data = {
  results: [{
    adult: false,
    backdrop_path: '/7k4zEgUZbzMHawDaMc9yIkmY1qR.jpg',
    genre_ids: [12, 14, 10751],
    id: 8844,
    overview: "When siblings Judy and Peter discover an enchanted board game that opens the door to a magical world, they unwittingly invite Alan -- an adult who's been trapped inside the game for 26 years -- into their living room. Alan's only hope for freedom is to finish the game, which proves risky as all three find themselves running from giant rhinoceroses, evil monkeys and other terrifying creatures.",
    poster_path: "/vgpXmVaVyUL7GGiDeiK1mKEKzcX.jpg",
    release_date: "1995-12-15",
    title: "Jumanji",
    vote_average: 7,
    vote_count: 4001
  },
  {
    vote_count: 3342,
    id: 353486,
    vote_average: 6.5,
    title: 'Jumanji: Welcome to the Jungle',
    poster_path: '/bXrZ5iHBEjH7WMidbUDQ0U2xbmr.jpg',
    genre_ids: [28, 12, 35, 10751],
    backdrop_path: '/rz3TAyd5kmiJmozp3GUbYeB5Kep.jpg',
    adult: false,
    overview: 'The tables are turned as four teenagers are sucked into Jumanji\'s world - pitted against rhinos, black mambas and an endless variety of jungle traps and puzzles. To survive, they\'ll play as characters from the game.',
    release_date: '2017-12-09'
  }]
};

const wrapper = shallow(
  <Films results={data.results} />
);

describe('Films, ', () => {
  it('renders container', () => {
    expect(wrapper.find('.films').length).toEqual(1);
  });
  it('renders two films', () => {
    expect(wrapper.children().length).toEqual(2);
  });

  describe('Films with no results, ', () => {
    const wrapperNew = shallow(
      <Films results={[]} />
    );

    it('render no children', () => {
      expect(wrapperNew.children().length).toEqual(0);
    });
  });
});