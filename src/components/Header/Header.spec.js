import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import { shallow } from 'enzyme';

describe('Header, ', () => {
  const wrapper = shallow(
    <Header showSearch={false} handleClick={() => {}} />
  );

  it('renders container', () => {
    expect(wrapper.find('.header').length).toEqual(1);
  });

  describe('Back button', () => {
    it('button rendered', () => {
      expect(wrapper.find('.btn--back').length).toEqual(1);
    });
  });

  describe('Search button', () => {
    const newWrapper = shallow(
      <Header showSearch={true} handleClick={() => {}} />
    );

    it('search rendered', () => {
      expect(newWrapper.find('.btn--back').length).toEqual(0);
    });
  });
});