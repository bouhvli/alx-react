import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  NotificationTypeFilters,
  SET_TYPE_FILTER,
  SET_LOADING_STATE,
} from "../actions/notificationActionTypes";
import { Map } from 'immutable';
import { notificationNormalizer } from "../schema/notifications";

const initialNotificationState = Map({
  notifications: [],
  filter: 'DEFAULT',
  loading: false,
});

export function notificationReducer(state = initialNotificationState, action) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS: {
      const normalizedData = notificationNormalizer(action.data);
      Object.keys(normalizedData.notifications).map((key) => {
        normalizedData.notifications[key].isRead = false;
      });
      return state.mergeDeep(normalizedData);
    }
    case MARK_AS_READ: {
      return Map(state).setIn(
        [
          'notification',
          'entities',
          action.index.toString(),
          'isRead',
        ],
        true,
      );
    }
    case SET_TYPE_FILTER: {
      return Map(state).set('filter', action.filter);
    }
    case SET_LOADING_STATE: {
      return Map(state).set('loading', action.loading);
    }
    default:
      return state;
  }
}