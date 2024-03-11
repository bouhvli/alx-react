import {
  SELECT_COURSE,
  UNSELECT_COURSE,
  FETCH_COURSE_SUCCESS
} from "../actions/courseActionTypes";
import { Map } from 'immutable';
import { courseNormalizer } from "../schema/courses";

const defaultState = [];

export default function courseReducer(state = defaultState, action) {
  state = Map(state);

  switch (action.type) {
    case SELECT_COURSE: {
      return state.setIn(
        ['entities', 'courses', action.index.toString(), 'isSelected'],
        true,
      );
    }
    case UNSELECT_COURSE: {
      return state.setIn(
        ['entities', 'courses', action.index.toString(), 'isSelected'],
        false,
      );
    }
    case FETCH_COURSE_SUCCESS:
      {
        const data = action.data.map((item) => ({
          id: item.id,
          name: item.name,
          isSelected: false,
          credit: item.credit,
        }));
        const normalizedData = courseNormalizer(data);
        return state.merge(normalizedData);
      }
    default:
      return state;
  }
}