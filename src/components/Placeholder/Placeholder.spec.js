import React from 'react';
import ReactDOM from 'react-dom';
import Placeholder from './Placeholder';
import { shallow } from 'enzyme';

describe('Placeholder, ', () => {
  const wrapper = shallow(
    <Placeholder classes="film-placeholder" width="50" height="50" />
  );

  it('renders container', () => {
    expect(wrapper.find('svg').length).toEqual(1);
  });
});