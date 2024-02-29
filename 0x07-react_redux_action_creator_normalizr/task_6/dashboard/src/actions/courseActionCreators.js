import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

export function selectCourse(index) {
  return {
    type: SELECT_COURSE,
    index: index,
  };
};

export const boundselectCourse = (index) => dispatchEvent(selectCourse(index));

export function unSelectCourse(index) {
  return {
    type: UNSELECT_COURSE,
    index: index,
  };
};

export const boundunSelectCourse = (index) => dispatchEvent(unSelectCourse(index));
