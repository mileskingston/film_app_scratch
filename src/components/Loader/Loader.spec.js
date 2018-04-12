import React from 'react';
import ReactDOM from 'react-dom';
import Loader from './Loader';
import { shallow } from 'enzyme';

describe('Loader, ', () => {
  const wrapper = shallow(<Loader />);

  it('renders container', () => {
    expect(wrapper.find('.loader').length).toEqual(1);
  });
  it('renders icon container', () => {
    expect(wrapper.find('.loader__icon').length).toEqual(1);
  });
});