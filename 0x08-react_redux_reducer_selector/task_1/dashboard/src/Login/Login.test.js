/* eslint-disable no-sequences */
import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('App component', () => {
  it ('render a div with the class App-body', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('button').exists()).toBeTruthy();
  });
  
});
