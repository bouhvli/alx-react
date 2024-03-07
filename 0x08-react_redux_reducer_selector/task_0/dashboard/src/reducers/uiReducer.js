import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGOUT
} from "../actions/uiActionTypes";

const defaultState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
};

export default function uiReducer(state = defaultState, action) {
  switch (action.type) {
    case DISPLAY_NOTIFICATION_DRAWER:
      return { ...state, isNotificationDrawerVisible: true };
    case HIDE_NOTIFICATION_DRAWER:
      return { ...state, isNotificationDrawerVisible: false };
    case LOGIN_FAILURE:
      return { ...state, isUserLoggedIn: false };
    case LOGIN_SUCCESS:
      return { ...state, isUserLoggedIn: true };
    case LOGOUT:
      return { ...state, isUserLoggedIn: false };
    default:
      return state;
  }
}