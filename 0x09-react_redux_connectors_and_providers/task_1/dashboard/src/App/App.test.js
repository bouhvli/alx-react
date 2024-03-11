/* eslint-disable no-sequences */
import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
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
  it("display the drawer should change to true", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);
    const inst = wrapper.instance();
    inst.handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toEqual(true);
  });
  it("display the drawer should change to false", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);
    const inst = wrapper.instance();
    inst.handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toEqual(true);
    inst.handleHideDrower();
    expect(wrapper.state().displayDrawer).toEqual(false);
  });
});

