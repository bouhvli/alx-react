import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Foolter component', () => {
  it ('render a div with the class App-footer', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('.App-footer').exists()).toBeTruthy();
  });
});
