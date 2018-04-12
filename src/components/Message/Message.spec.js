import React from 'react';
import ReactDOM from 'react-dom';
import Message from './Message';
import { shallow } from 'enzyme';

describe('Message, ', () => {
  const wrapper = shallow(
    <Message text="Message" />
  );

  it('renders container', () => {
    expect(wrapper.find('.message').length).toEqual(1);
  });

  it('renders correct class', () => {
    expect(wrapper.find('.message--error').length).toEqual(1);
  });
  
  it('renders prop text', () => {
    expect(wrapper.text()).toEqual('Message');
  });

  describe('Message error, ', () => {
    const wrapper = shallow(
      <Message text="Message" type="info" />
    );

    it('renders correct class', () => {
      expect(wrapper.find('.message--info').length).toEqual(1);
    });
  })

  describe('Message success, ', () => {
    const wrapper = shallow(
      <Message text="Message" type="success" />
    );

    it('renders correct class', () => {
      expect(wrapper.find('.message--success').length).toEqual(1);
    });
  })

  describe('Message warning, ', () => {
    const wrapper = shallow(
      <Message text="Message" type="warning" />
    );

    it('renders correct class', () => {
      expect(wrapper.find('.message--warning').length).toEqual(1);
    });
  })

  describe('Message warning, ', () => {
    const wrapper = shallow(
      <Message text="Message" type="info" />
    );

    it('renders correct class', () => {
      expect(wrapper.find('.message--info').length).toEqual(1);
    });
  })
});