import { selectCourse, unSelectCourse } from "./courseActionCreators";
import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

describe('test action creators', () => {
  it('should return action type when select is caled', () => {
    expect(selectCourse(1)).toEqual({
      type: SELECT_COURSE,
      index: 1
    });
  });
  it('should return action type when unselect is caled', () => {
    expect(unSelectCourse(1)).toEqual({
      type: UNSELECT_COURSE,
      index: 1
    });
  });
});