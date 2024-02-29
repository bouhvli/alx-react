import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER
} from "./uiActionTypes";

import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer
} from "./uiActionCreators";

describe('test', () => {
  it('login action', () => {
    const email = 'hamza@email.com';
    const password = 'hamzapassword';

    expect(login(email, password)).toEqual({
      type: LOGIN,
      user: { email: 'hamza@email.com', password: 'hamzapassword' },
    });
  });
  it('should logout', () => {
    expect(logout()).toEqual({
      type: LOGOUT,
    });
    it('display notif', () => {
      expect(displayNotificationDrawer()).toEqual({
        type: DISPLAY_NOTIFICATION_DRAWER,
      });
    });
    it('hide notif', () => {
      expect(hideNotificationDrawer()).toEqual({
        type: HIDE_NOTIFICATION_DRAWER,
      });
    })
  })
})