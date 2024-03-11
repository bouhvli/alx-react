/* eslint-disable no-sequences */
import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header commponent', () => {
  it ('render a div with the class App-header', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('.App-header').exists()).toBeTruthy();
  });
});
