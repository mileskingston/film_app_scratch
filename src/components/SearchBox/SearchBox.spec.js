import React from 'react';
import ReactDOM from 'react-dom';
import Provider from 'react-redux';
import { shallow, mount } from 'enzyme';
import SearchBox from './SearchBox';
import configureStore from 'redux-mock-store';

describe('SearchBox, ', () => {
  const handleClick = jest.fn();
  const mockStore = configureStore()
  const initialState = {};
  const store = mockStore(initialState);

  const wrapper = mount(
    <SearchBox handleClick={handleClick} store={store} />
  );

  it('renders container', () => {
    expect(wrapper.find('.form__search-box').length).toEqual(1);
  });

  it('handleClick function is called', () => {
    wrapper.find('button').simulate('click');
    expect(handleClick.mock.calls.length).toEqual(1);
  });
});