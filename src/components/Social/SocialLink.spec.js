import React from 'react';
import ReactDOM from 'react-dom';
import SocialLink from './SocialLink';
import { shallow } from 'enzyme';

describe('SocialLinks, ', () => {
  const wrapper = shallow(
    <SocialLink
      href="http://facebook.com"
      src="facebookIcon.svg"
      alt="facebook"
    />
  );

  it('renders container', () => {
    expect(wrapper.find('.social__link').length).toEqual(1);
  });

  it('alt text is correct', () => {
    expect(wrapper.find('img').props().alt).toEqual('facebook');
  });
  it('src is correct', () => {
    expect(wrapper.find('img').props().src).toEqual('facebookIcon.svg');
  });

  it('href is correct', () => {
    expect(wrapper.props().href).toEqual('http://facebook.com');  
  });
});
