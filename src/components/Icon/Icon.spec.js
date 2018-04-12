import React from 'react';
import ReactDOM from 'react-dom';
import Provider from 'react-redux';
import { shallow } from 'enzyme';
import Icon from './Icon';

describe('Icon, ', () => {
  const wrapper = shallow(
    <Icon />
  );

  it('renders container', () => {
    expect(wrapper.find('.icon').length).toEqual(1);
  });
});