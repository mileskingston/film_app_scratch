import React from 'react';
import ReactDOM from 'react-dom';
import ProfilePage from './Profile';
import { mount } from 'enzyme';

const data = {};

const wrapper = mount(
  <ProfilePage data={} />
);

describe('ProfilePage, ', () => {
  it('renders container', () => {
    expect(wrapper.find('.profile-page').length).toEqual(1);
  });
});