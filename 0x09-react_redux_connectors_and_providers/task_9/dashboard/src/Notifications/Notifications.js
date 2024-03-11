import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import { fetchNotifications, markAsAread, setNotificationFilter } from '../actions/notificationActionCreators';
import { StyleSheet, css } from 'aphrodite';
import { getUnreadNotificationsByType } from '../selectors/notificationSelector';
const opacityKF = {
  from: {
    opacity: 0.5,
  },
  to: {
    opacity: 1,
  },
};

const translateYkf = {
  '0%': {
    transform: 'translateY(0)',
  },
  '50%': {
    transform: 'translateY(-5px)',
  },
  '75%': {
    transform: 'translateY(5px)',
  },
  '100%': {
    transform: 'translateY(px)',
  },
};

const styles = StyleSheet.create({
  Notifications: {
    padding: '2em',
    border: '2px dashed red',
  },
  menuItem: {
    textAlign: 'right',
    marginRight: '16px',
    ':hover': {
      cursor: 'pointer',
      animationName: [opacityKF, translateYkf],
      animationDuration: '1s, 0.5s',
      animationIterationCount: 2,
    }
  },
  'notification-header': {
    display: 'flex',
    justifyContent: 'space-between',
  },
  'flex-area': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  mobile: {
    '@media (max-width: 375px)': {
      display: 'block',
      height: '100vh',
      width: '100vw',
      marginLeft: 'auto',
      marginRight: 'auto',
      border: 'none',
      fontSize: '20px',
      padding:'0',
    },
  },
});

function Notifications(props) {
    const {
      displayDrawer, listNotifications,
      handleDisplayDrawer, handleHideDrower,
      markNotificationAsRead
    } = props;

    return (
      <Fragment>
        <div
          className={css(styles.menuItem)}
          id="menuItem"
          onClick={handleDisplayDrawer}
        >
          <p>Your Notification</p>
        </div>
        {
          displayDrawer && (
            <div className={css(styles.Notifications, styles.mobile)}>
              <p>Here is the list of Notification</p>
              <button
                id="buttonfilterurgent"
                onClick={() => {
                  setNotificationFilter("URGENT");
                }}
              >‼️</button>
              <button
                id="buttonfilterdefault"
                onClick={() => {
                  setNotificationFilter("DEFAULT");
                }}
              >💠</button>
              <ul>
                {listNotifications.length === 0 && (
                  <NotificationItem value='No new Notification for now' />
                )}
                {listNotifications.map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    type={notification.type}
                    value={notification.value}
                    html={notification.html}
                    markAsRead={markNotificationAsRead}
                  />
                ))}
              </ul>
              <button
                type='button'
                aria-label='close'
                onClick={handleHideDrower}
                style={{
                  display: 'inline-block',
                  position: 'absolute',
                  top: '56px',
                  right: '16px',
                  background: 0,
                  border: 0,
                  outline: 'none',
                  cursor: 'pointer',
                  zIndex: 1,
                }}
              >
                <img
                  src={closeIcon}
                  alt=''
                  style={{
                    width: '8px',
                    height: '8px'
                  }}
                />
              </button>
            </div>
          )
        }
      </Fragment>
    );
  }
Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrower: () => { },
  markNotificationAsRead: () => { },
  fetchNotifications: () => { },
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.object,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrower: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
};
const mapStateToProps = (state) => {
  return {
    listNotifications: getUnreadNotificationsByType(state),
  };
};

const mapDispatchToProps = {
  fetchNotifications,
  markNotificationAsRead: markAsAread,
}
export default connect(mapStateToProps, mapDispatchToProps)(Notifications);