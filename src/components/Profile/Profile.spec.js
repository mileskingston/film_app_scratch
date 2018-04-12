import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './Profile';
import { mount } from 'enzyme';

const data = {
  credit_id: '5a5f3bebc3a368786b000be2',
  profile_path: '/qmB7sZcgRUq7mRFBSTlSsVXh7sH.jpg',
  name: 'Ted Field',
  job: 'Executive Producer'
};

const wrapper = mount(
  <Profile
    key={data.credit_id}
    data={data}
  />
);

describe('Profile, ', () => {
  it('renders container', () => {
    expect(wrapper.find('.profile').length).toEqual(1);
  });

  it('renders lazy loadd image container', () => {
    expect(wrapper.find('.lazy-load-image').length).toEqual(1);
  });

  it('alt text is correct', () => {
    expect(wrapper.find('h4').text()).toEqual('Ted Field');
  });

  it('image alt is correct', () => {
    expect(wrapper.find('img').props().alt).toEqual('Ted Field');  
  });

  it('image alt is correct', () => {
    expect(wrapper.find('img').props().src).toEqual('http://image.tmdb.org/t/p/w138_and_h175_face/qmB7sZcgRUq7mRFBSTlSsVXh7sH.jpg');  
  });

  it('paragraph contains correct job', () => {
    expect(wrapper.find('p').props().className).toEqual('profile__job');
  });

  describe('Profile with no profile_path and has character, ', () => {
    const data = {
      credit_id: '5a5f3bebc3a368786b000be2',
      profile_path: null,
      name: 'Ted Field',
      character: 'Ted'
    }
    const wrapper = mount(
      <Profile
        key={data.credit_id}
        data={data}
      />
    );

    it('renders placeholder container', () => {
      expect(wrapper.find('.placeholder').length).toEqual(1);
    });

    it('paragraph contains correct character', () => {
      expect(wrapper.find('p').props().className).toEqual('profile__character');
    });
  });
});