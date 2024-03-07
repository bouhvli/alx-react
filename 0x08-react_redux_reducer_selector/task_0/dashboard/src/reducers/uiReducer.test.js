import uiReducer from "./uiReducer";
import { DISPLAY_NOTIFICATION_DRAWER } from "../actions/uiActionTypes";
import { SELECT_COURSE } from "../actions/courseActionTypes";

describe('uiReducer test', () => {
  const defaultState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
  };
  it('when action passed return initial state', () => {
    expect(uiReducer(defaultState, 'null')).toEqual(defaultState);
  });
  it('return inital state when given no action', () => {
    expect(uiReducer(defaultState, { type: SELECT_COURSE })).toEqual(defaultState);
  });
  it('return a changed state when eberything is all correct', () => {
    expect(uiReducer(defaultState, {
      type: DISPLAY_NOTIFICATION_DRAWER
    })).toEqual({ ...defaultState, isNotificationDrawerVisible: true });
  });
});