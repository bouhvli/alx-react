import { courseReducer } from "./courseReducer";
import {
  selectCourse,
  unSelectCourse,
  fetchCourseSuccess
} from "../actions/courseActionCreators";

describe('testing courseReducer', () => {
  const defaultState = [];
  const data = [
    {
      id: 1,
      name: "ES6",
      credit: 60
    },
    {
      id: 2,
      name: "Webpack",
      credit: 20
    },
    {
      id: 3,
      name: "React",
      credit: 40
    }
  ];
  it('must return an empty array when no action is given', () => {
    expect(courseReducer(defaultState, 'null')).toEqual([]);
  });
  it('must return the wanted data on fetch', () => {
    expect(courseReducer(data, fetchCourseSuccess())).toEqual(
      data.map((course) => ({
        ...course,
        isSelected: false,
      }))
    );
  });
  it('return right selected items', () => {
    const data = [
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: false,
        credit: 20
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40
      }
    ];
    const selected = [
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: true,
        credit: 20
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40
      }
    ];
    expect(courseReducer(data, selectCourse(2))).toEqual(selected);
  });

  it('return right selected items', () => {
    const data = [
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: true,
        credit: 20
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40
      }
    ];
    const unSelected = [
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: false,
        credit: 20
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40
      }
    ];
    expect(courseReducer(data, unSelectCourse(2))).toEqual(unSelected);
  });
})

