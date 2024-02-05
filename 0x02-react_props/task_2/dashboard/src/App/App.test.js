/* eslint-disable no-sequences */
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
  it ('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBeTruthy();
  });
});

