import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER
} from "./uiActionTypes";

export function login(email, password) {
  return {
    type: LOGIN,
    user: {
      email,
      password
    },
  };
}
export const boundLogin = (email, password) => dispatchEvent(login(email, password));

export const logout = () => ({
  type: LOGOUT
});
export const boundLogout = () => dispatchEvent(logout());

export const displayNotificationDrawer = () => ({
  type: DISPLAY_NOTIFICATION_DRAWER,
});
export const bounddisplayNotificationDrawer = () => dispatchEvent(displayNotificationDrawer());

export const hideNotificationDrawer = () => ({
  type:HIDE_NOTIFICATION_DRAWER,
})
export const boundhideNotificationDrawer = () => dispatchEvent(hideNotificationDrawer());