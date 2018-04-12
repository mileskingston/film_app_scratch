import React from 'react';
import ReactDOM from 'react-dom';
import LazyLoadImage from './LazyLoadImage';
import { shallow } from 'enzyme';
import placeholder from '../../images/placeholder-film.svg';

describe('LazyLoadImage, ', () => {
  const wrapper = shallow(
    <LazyLoadImage
      src={placeholder}
      alt="image"
      width="400"
      height="400"
    />
  );

  it('renders container', () => {
    expect(wrapper.find('.lazy-load-image').length).toEqual(1);
  });
  it('renders image containers', () => {
    expect(wrapper.find('.lazy-load-image__img').length).toEqual(2);
  });
});