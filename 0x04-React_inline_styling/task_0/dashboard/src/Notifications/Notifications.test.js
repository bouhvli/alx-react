/* eslint-disable no-sequences */
import React from 'react';
import { shallow } from 'enzyme';
import { Notifications } from './Notifications';

describe('Notification component', () => {
  it ('renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBeTruthy();
  });
  it ('render three list items', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('li')).toHaveLength(3);
  });
  it ('render the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.text()).toContain('Here is the list of notifications');
  });
});