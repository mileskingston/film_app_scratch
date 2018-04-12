import React from 'react';
import ReactDOM from 'react-dom';
import Provider from 'react-redux';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button, ', () => {
  const onClick = jest.fn();

  const wrapper = shallow(
    <Button onClick={onClick} classes="btn--primary">
      Submit
    </Button>
  );

  it('renders container', () => {
    expect(wrapper.find('.btn').length).toEqual(1);
  });

  it('renders children', () => {
    expect(wrapper.find('.btn').children().length).toEqual(1);
  });

  it('renders additional class', () => {
    expect(wrapper.props().className).toContain('btn--primary');
  });

  it('onClick function is called', () => {
    wrapper.simulate('click');
    expect(onClick.mock.calls.length).toEqual(1);
  });

  it('button type is correct', () => {
    expect(wrapper.find('.btn').props().type).toEqual('button');
  });

  describe('Button disabled, ', () => {
    const wrapper = shallow(
      <Button onClick={onClick} disabled={true} type="submit">
        Submit
      </Button>
    ); 

    it('button is disabled', () => {
      expect(wrapper.find('.btn').props().disabled).toEqual(true);
    });

    it('button type is correct', () => {
      expect(wrapper.find('.btn').props().type).toEqual('submit');
    });
  });
});