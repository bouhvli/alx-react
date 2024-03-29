import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  NotificationTypeFilters,
  SET_TYPE_FILTER
} from "../actions/notificationActionTypes";
import { Map } from 'immutable';
import { notificationNormalizer } from "../schema/notifications";

const initialNotificationState = Map({
  notifications: [],
  filter: 'DEFAULT',
});

export function notificationReducer(state = initialNotificationState, action) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS: {
      const notificationData = action.data.map((item) => ({
        id: item.id,
        type: item.type,
        value: item.value,
        isRead: false,
      }));
      return state.merge({
        filter: NotificationTypeFilters.DEFAULT,
        notifications: notificationNormalizer(notificationData),
      });
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
    default:
      return state;
  }
}