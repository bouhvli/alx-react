import React, { Component, Fragment } from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';
const styles = StyleSheet.create({
  Notifications: {
    padding: '2em',
    border: '2px dashed red',
  },
  menuItem: {
    textAlign: 'right',
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
});

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }
  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }
  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length
    );
  }
  render() {
    const { displayDrawer, listNotifications } = this.props;
    return (
      <Fragment>
        <div className={css(styles.menuItem)}>
          <p>Your Notification</p>
        </div>
        {
          displayDrawer && (
            <div className={css(styles.Notifications)}>
              <p>Here is the list of Notification</p>
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
                    markAsRead={this.markAsRead}
                  />
                ))}
              </ul>
              <button
                type='button'
                aria-label='close'
                onClick={() => console.log('close button has been clicked')}
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
}
Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notifications;