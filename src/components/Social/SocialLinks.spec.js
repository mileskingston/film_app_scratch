import React from 'react';
import ReactDOM from 'react-dom';
import SocialLinks from './SocialLinks';
import { shallow } from 'enzyme';

describe('SocialLinks, ', () => {
  const linkData = {
    imdb_id: 'tt4477536',
    facebook_id: 'FiftyShadesMovies',
    instagram_id: 'FiftyShadesMovie',
    twitter_id: 'FiftyShades',
    id: 337167
  };
  const wrapper = shallow(
    <SocialLinks links={ linkData } />
  );

  it('renders container', () => {
    expect(wrapper.find('.social').length).toEqual(1);
  });

  it('renders children', () => {
    expect(wrapper.find('.social').children().length).toEqual(4);
  });
});
