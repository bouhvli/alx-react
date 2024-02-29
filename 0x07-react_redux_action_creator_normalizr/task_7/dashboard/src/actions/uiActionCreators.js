import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_FAILURE,
  LOGIN_SUCCESS
} from "./uiActionTypes";
import fetch from 'node-fetch';

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

export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS,
  };
}

export function loginFailure() {
  return {
    type: LOGIN_FAILURE
  };
}

export function loginRequest(email, password) {
  return (dispatch) => {
    boundLogin(email, password);
    return fetch('http://localhost:8564/login-success.json')
      .then((result) => result.json())
      .then((json) => dispatch(loginSuccess()))
      .catch((error) => dispatch(loginFailure()));
  };
}
