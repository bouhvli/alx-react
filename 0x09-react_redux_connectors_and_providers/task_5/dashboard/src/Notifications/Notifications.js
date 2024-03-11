import React, { Component, Fragment } from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import { fetchNotifications } from '../actions/notificationActionCreators';
import { StyleSheet, css } from 'aphrodite';
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

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }
  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }
  componentDidMount() {
    this.props.fetchNotifications();
  }
  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length ||
      nextProps.displayDrawer !== this.props.displayDrawer
    );
  }
  render() {
    const {
      displayDrawer, listNotifications,
      handleDisplayDrawer, handleHideDrower
    } = this.props;

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
}
Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrower: () => {},
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.object,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrower: PropTypes.func,
};
const mapStateToProps = (state) => {
  return {
    listNotifications: state.notifications.get('messages'),
  };
};

const mapDispatchToProps = {
  fetchNotifications,
}
export default Notifications;