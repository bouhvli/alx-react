/* eslint-disable no-sequences */
import React from 'react';
import { shallow } from 'enzyme';
import Login from '../Login/Login';
import { Notifications } from '../Notifications/Notifications';
import App from './App';

describe('App component', () => {
  it ('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBeTruthy();
  });
  it ('renders Notification ', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Notifications/>)).toBeTruthy();
  });
  it('renders Login ', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Login/>)).toBeTruthy();
  });
});

