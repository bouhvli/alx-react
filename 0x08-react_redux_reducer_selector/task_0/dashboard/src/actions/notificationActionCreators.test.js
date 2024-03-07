import {
  NotificationTypeFilters,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from "./notificationActionTypes";

import {
  markAsAread,
  setNotificationFilter
} from "./notificationActionCreators";
describe('test', () => {
  it('mark as read', () => {
    expect(markAsAread(1)).toEqual({
      type: MARK_AS_READ,
      index: 1
    });
  });
  it('notif filter', () => {
    expect(setNotificationFilter(NotificationTypeFilters['DEFAULT'])).toEqual({
      type: SET_TYPE_FILTER,
      filter: 'DEFAULT',
    });
  });
});
