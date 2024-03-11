import courseReducer, { initialCourseState } from "./courseReducer";
import { notificationReducer, initialNotificationState } from "./notificationReducer";
import uiReducer, { defaultState } from "./uiReducer";
import { Map } from 'immutable';

export const initialRootSatate = {
  courses: Map(initialCourseState),
  notifications: Map(initialNotificationState),
  ui: Map(defaultState),
};

const rootReducer = {
  courses: courseReducer,
  notifications: notificationReducer,
  ui: uiReducer,
};

export default rootReducer;
