import uiReducer, { defaultState } from "./uiReducer";
import { displayNotificationDrawer } from "../actions/uiActionCreators";
import { selectCourse } from "../actions/courseActionCreators";
import { defaultState } from "./uiReducer";

describe('uiReducer test', () => {
  it('when action passed return initial state', () => {
    const astate = uiReducer(defaultState, '')
    expect(astate.toJS()).toEqual(defaultState.toJS());
  });
  it('return inital state when given no action', () => {
    const astate = uiReducer(defaultState, selectCourse());
    expect(astate.toJS()).toEqual(defaultState.toJS());
  });
  it('return a changed state when eberything is all correct', () => {
    const astate = uiReducer(defaultState, displayNotificationDrawer());
    expect(astate.toJS().isNotificationDrawerVisible).toEqual(true);
  });
});