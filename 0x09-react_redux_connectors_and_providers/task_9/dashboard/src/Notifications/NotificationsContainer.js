import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchNotifications,
  markAsAread,
  setNotificationsFilter
} from '../actions/notificationActionCreators';
import { getUnreadNotificationsByType } from '../selectors/notificationSelector';
import Notifications from "./Notifications";
import PropTypes from "prop-types";

export class NotificationsContainer extends Component {
  constructor(props) {
    super(props);
  };
  componentDidMount() {
    this.props.fetchNotifications();
  }
  render() {
    return <Notifications {...this.props}></Notifications>
  }
}

NotificationsContainer.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrower: () => { },
  markNotificationAsRead: () => { },
  fetchNotifications: () => { },
  setNotificationsFilter: () => {},
}

NotificationsContainer.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.object,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrower: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
  setNotificationsFilter: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    listNotifications: getUnreadNotificationsByType(state),
  };
};

const mapDispatchToProps = {
  fetchNotifications,
  markNotificationAsRead: markAsAread,
  setNotificationsFilter,
}
export default connect(mapStateToProps, mapDispatchToProps)(NotificationsContainer);