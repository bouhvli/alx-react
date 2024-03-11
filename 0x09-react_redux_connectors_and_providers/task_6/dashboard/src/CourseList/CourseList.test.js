import React from "react";
import { shallow } from 'enzyme';
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";

const listCources = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

describe('CourseList', () => {
  it('renders without crashing ', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders 5 rows', () => {
    const wrapper = shallow(<CourseList listCourses={listCources} />);
    expect(wrapper.find('thead').children()).toHaveLength(2);
    wrapper.find('thead').forEach((node) => {
      expect(
        node.equals(
          <CourseListRow
            textFirstCall='Course name'
            textSecondCall='Credit'
            isHeader={true}
          />
        )
      );
    });
    expect(wrapper.find('tbody').children()).toHaveLength(3);
    expect(wrapper.find('tbody').childAt(0).html()).toEqual(
      '<tr style="background-color: #f5f5f5ab"><td>ES6</td><td>60</td></tr>'
    );
    expect(wrapper.find('tbody').childAt(0).html()).toEqual(
      '<tr style="background-color: #f5f5f5ab"><td>Webpack</td><td>60</td></tr>'
    );
    expect(wrapper.find('tbody').childAt(0).html()).toEqual(
      '<tr style="background-color: #f5f5f5ab"><td>React</td><td>60</td></tr>'
    );
  });
  it('passing a list of courses renders correctly', () => {
    const wrapper = shallow(<CourseList listCourses={listCources} />);
    expect(wrapper.find('tbody').childAt()).toHaveLength(3);
    expect(wrapper.find('tbody').childAt(0).html()).toEqual(
      '<tr style="background-color: #f5f5f5ab"><td>ES6</td><td>60</td></tr>'
    );
    expect(wrapper.find('tbody').childAt(0).html()).toEqual(
      '<tr style="background-color: #f5f5f5ab"><td>Webpack</td><td>60</td></tr>'
    );
    expect(wrapper.find('tbody').childAt(0).html()).toEqual(
      '<tr style="background-color: #f5f5f5ab"><td>React</td><td>60</td></tr>'
    );
  })
});
