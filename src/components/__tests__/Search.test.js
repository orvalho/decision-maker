import React from 'react';
import {mount} from 'enzyme';

import Root from '../../Root';
import Search from '../Search';

let wrapper;

beforeEach(() => {
  wrapper = mount(<Root><Search/></Root>);
});

afterEach(() => {
  wrapper.unmount();
});

it('shows an input field', () => {
  expect(wrapper.find('input').length).toEqual(1);
});

it('shows a button', () => {
  expect(wrapper.find('button').length).toEqual(1);
});

describe('the input field', () => {
  beforeEach(() => {
    wrapper.find('input').simulate('change', {
      target: {
        value: 'Am I the type who can rock a hat?'
      }
    });
    wrapper.update();
  });

  it('has an input field that users can type in', () => {
    expect(wrapper.find('input').prop('value')).toEqual('Am I the type who can rock a hat?');
  });

  it('when form is submitted, input field gets emptied', () => {
    expect(wrapper.find('input').prop('value')).toEqual('Am I the type who can rock a hat?');
    wrapper.find('form').simulate('submit');
    wrapper.update();
    expect(wrapper.find('input').prop('value')).toEqual('');
  });
});
