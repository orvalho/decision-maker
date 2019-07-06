import React from 'react';
import {shallow} from 'enzyme';

import App from '../App';
import Search from '../Search';
import Answer from '../Answer';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App/>);
});

it('has a Search component instance', () => {
  expect(wrapper.find(Search).length).toEqual(1);
});

it('has an Answer component instance', () => {
  expect(wrapper.find(Answer).length).toEqual(1);
});
