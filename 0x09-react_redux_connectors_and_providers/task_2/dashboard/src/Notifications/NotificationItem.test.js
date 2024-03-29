import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('Notifications', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<NotificationItem />);
    shallow(<NotificationItem />);
  });

  it('renders the html prop', () => {
    const text = 'Here is the dommy html';
    const wrapper = shallow(
      <NotificationItem html={{ __html: '<u>test</u>' }} />
    );
    const li = wrapper.find('li');
    expect(li.html()).toEqual('<li><u>test</u></li>');
  });

  it('renders type and value props', () => {
    const wrapper = shallow(<NotificationItem type='default' value='test' />);
    const li = wrapper.find('li');
    expect(li).toHavelength(1);
    expect(li.text()).toEqual('test');
    expect(li.prop('data-data-notification-type')).toEqual('default');
  });
});

