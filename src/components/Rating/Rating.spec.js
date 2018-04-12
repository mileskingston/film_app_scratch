import React from 'react';
import ReactDOM from 'react-dom';
import Rating from './Rating';
import { mount } from 'enzyme';

const wrapper = mount(
  <Rating
    rating={5}
    count={100}
    showTotal={false}
  />
);

describe('Rating, ', () => {
  it('renders container', () => {
    expect(wrapper.find('.rating').length).toEqual(1);
  });

  it('Rating total container not rendered', () => {
    expect(wrapper.find('.rating__total').length).toEqual(0);
  });

  it('Rating total container not rendered', () => {
    expect(wrapper.find('.rating__star').length > 0).toBeTruthy();
  });

  describe('Rating with total', () => {
    const wrapper = mount(
      <Rating
        rating={5}
        count={100}
        showTotal={true}
      />
    );
    
    it('renders total container', () => {
      expect(wrapper.find('.rating__total').length).toEqual(1);
    });
  })
});