import React from "react";
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";
import BodySection from "./BodySection";

describe('tests of BodySectionWithMarginBottom', () => {
  it('marging bottom should be applied', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title='Title' />
    );
    expect(wrapper.find(BodySection)).toHaveLength(1);
    expect(wrapper.find(BodySection).html()).toEqual(
      '<div class="bodySection"><h2>Title</h2></div>'
    );
  });
});
