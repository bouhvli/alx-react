import React from 'react';
import BodySection from './BodySection';
import { shallow } from 'enzyme';

describe('tests of BodySection', () => {
  it('should reneder correctly', () => {
    const wrapper = shallow(
      <BodySection title='Title'>
        <p>test child node</p>
      </BodySection>
    );
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.exists('h2')).toBe(true);
    expect(wrapper.exists('p')).toBe(true);
    expect(wrapper.find('h2').html()).toEqual(
      '<h2>Title</h2>'
    );
    expect(wrapper.find('p').text()).toEqual(
      'test child node'
    );
  })
});
