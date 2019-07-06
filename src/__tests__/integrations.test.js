import React from 'react';
import {mount} from 'enzyme'
import moxios from 'moxios';

import Root from '../Root';
import App from '../components/App';

describe('answer', () => {
  let wrapper;

  beforeEach(() => {
    moxios.install();
    moxios.stubRequest('https://yesno.wtf/api', {
      status: 200,
      response: {
        answer: 'yes',
        image: 'https://yesno.wtf/assets/yes/6-304e564038051dab8a5aa43156cdc20d.gif'
      }
    });
    wrapper = mount(<Root><App/></Root>);
  });

  afterEach(() => {
    moxios.uninstall();
    wrapper.unmount();
  });

  it('fetches an answer and displays it, when user submits a question', done => {
    wrapper.find('input').simulate('change', {
      target: {
        value: 'Is cereal soup?'
      }
    });
    wrapper.update();
    wrapper.find('form').simulate('submit');
    expect(wrapper.find('img').length).toEqual(0);
    moxios.wait(() => {
      wrapper.update();
      expect(wrapper.find('img').length).toEqual(1);
      expect(wrapper.find('img').prop('src')).toEqual('https://yesno.wtf/assets/yes/6-304e564038051dab8a5aa43156cdc20d.gif');
      expect(wrapper.find('img').prop('alt')).toEqual('yes');
      done();
    });
  });

  it('doesn\'t fetch an answer, when user tries to submit an empty input field', done => {
    expect(wrapper.find('input').prop('value')).toEqual('');
    wrapper.find('form').simulate('submit');
    moxios.wait(() => {
      wrapper.update();
      expect(wrapper.find('img').length).toEqual(0);
      done();
    });
  });

  it('clears current answer when user starts to input a new question', done => {
    wrapper.find('input').simulate('change', {
      target: {
        value: 'Does this dress make me look fat?'
      }
    });
    wrapper.update();
    wrapper.find('form').simulate('submit');
    moxios.wait(() => {
      wrapper.update();
      expect(wrapper.find('img').length).toEqual(1);
      wrapper.find('input').simulate('change', {
        target: {
          value: 'Does...?'
        }
      });
      wrapper.update();
      expect(wrapper.find('img').length).toEqual(0);
      done();
    });
  });
});
