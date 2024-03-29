import { Map } from 'immutable';

export const filterTypeSelected = (state) => state.get('filter');

export const getNotifitcations = (state) => state.notifications;

export const getUnreadNotifications = (state) => {
  const notifications = state.getIn([
    'notifications',
    'entities',
  ]);
  const unreadNotifications = notifications.filter(
    (notification) => !notification.isRead
  );
  return Map(unreadNotifications);
};