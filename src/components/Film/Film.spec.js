import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import ConnectedFilm, {Film} from './Film';

describe('Film, ', () => {
  const data = {
    filmDetail: {
      id: 340684,
      poster_path: '/akFZgps0INgWhSlLOnWgpKhoSL4.jpg',
      title: 'Those People',
      vote_average: 6.9,
      vote_count: 109
    }
  };
  const initialState = {};
  const mockStore = configureStore();
  let store = mockStore(initialState);
  let wrapper = shallow(<ConnectedFilm store={store} film={data.filmDetail} />).dive();

  it('renders container', () => {
    expect(wrapper.find('.film').length).toEqual(1);
  });

  it('renders film title', () => {
    expect(wrapper.find('.film__content h3').text()).toEqual('Those People');
  });

  it('renders film poster', () => {
    expect(wrapper.find('LazyLoadImage').length).toEqual(1);
  });

  it('renders rating component', () => {
    expect(wrapper.find('Rating').length).toEqual(1);
  });

  describe('Film with no poster path and rating, ', () => {
    const data = {
      filmDetail: {
        id: 340684,
        poster_path: '',
        title: 'Those People'
      }
    };
    let wrapper = shallow(<ConnectedFilm store={store} film={data.filmDetail} />).dive();

    it('doesnt render LazyLoadImage component', () => {
      expect(wrapper.find('LazyLoadImage').length).toEqual(0);
    });

    it('doesnt render Rating component', () => {
      expect(wrapper.find('Rating').length).toEqual(0);
    });
  });
});