import React from "react";
import { shallow } from 'enzyme';
import CourseListRow from "./CourseListRow";

describe('Course list row', () => {
  it('renders without crashing ', () => {
    const wrapper = shallow(<CourseListRow textFirstCall='test' />);
    expect(wrapper.exists());
  });
  it('renders one cell alone ', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCall='test' />);
    wrapper.update();
    const th = wrapper.find('th');
    expect(th).toHaveLength(1);
    expect(th.prop('colSpan')).toEqual('2');
  });
  it('renders one two cells ', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCall='first'
        textSecondCall='second' />);
    wrapper.update();
    const th = wrapper.find('th');
    expect(th).toHaveLength(2);
    expect(th.first().text()).toEqual('first');
    expect(th.at(1).text()).toEqual('second');
  });
  it('renders one two tds ', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={false} textFirstCall='first'
        textSecondCall='second' />);
    wrapper.update();
    const th = wrapper.find('tr');
    expect(tr).toHaveLength(1);
    expect(tr.children('td')).toHaveLength(2);
  });
});
