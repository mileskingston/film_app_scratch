import React from 'react';
import ReactDOM from 'react-dom';
import Provider from 'react-redux';
import { shallow, mount } from 'enzyme';
import Pagination from './Pagination';
import configureStore from 'redux-mock-store';

describe('Pagination, ', () => {
  const mockStore = configureStore()
  const initialState = {};
  const store = mockStore(initialState);

  const wrapper = mount(
    <Pagination currentPage={1} total_pages={2} store={store} />
  );

  it('renders container', () => {
    expect(wrapper.find('.pagination').length).toEqual(1);
  });

  it('renders next and previous buttons', () => {
    expect(wrapper.find('.pagination .btn').length).toEqual(2);
  });

  it('previous button to be disabled', () => {
    expect(wrapper.find('.pagination .btn-pagination--prev').props().disabled).toEqual(true);
  });

  describe('Pagination on second page, ', () => {
    const newWrapper = mount(
      <Pagination currentPage={2} total_pages={2} store= {store} />
    );

    it('next button to be disabled', () => {
      expect(newWrapper.find('.pagination .btn-pagination--next').props().disabled).toEqual(true);
    });
  });
});