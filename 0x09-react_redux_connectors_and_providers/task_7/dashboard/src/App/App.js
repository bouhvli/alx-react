import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { getLatestNotification } from '../utils/utils';
import BodySection from '../BodySection/BodySection';
import { css, StyleSheet } from 'aphrodite';
import { user, AppContext } from './AppContext';
import { connect } from 'redux';
import { user, logout } from './AppContext';
import { AppContext } from './AppContext';
import {
  displayNotificationDrawer,
  hideNotificationDrawer,
  login,
  loginRequest,
} from '../actions/uiActionCreators';

const styles = StyleSheet.create({
  App: {
    height: '100vh',
    maxWidth: '100vw',
  },
  'heading-section': {
    borderBottom: '4px solid rgb(216, 3, 3)',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row-reverse',
  },
  'App-footer': {
    borderTop: '4px solid rgb(216, 3, 3)',
    fontSize: '1.4rem',
    padding: '0.5em',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});


class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.listCources = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
    ];
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.state = {
      displayDrawer: false,
      user: user,
      logOut: this.logOut,
    };
  }
  handleKeyPress(e) {
    if (e.ctrlKey && e.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  }
  logIn(email, password) {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true
      }
    });
  }
  LogOut() {
    this.setState({
      user: user
    });
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }
  render() {
    return (
      <AppContext.Provider value={{
        user: this.state.user,
        logOut: this.state.logOut
      }}>
      <React.Fragment>
        <div className={css(styles.App)}>
          <div className={css(styles['heading-section'])}>
            <Notifications displayDrawer={displayDrawer}
              handleDisplayDrawer={this.handleDisplayDrawer}
              handleHideDrawer={this.handleHideDrawer}
            />
            <Header/>
          </div>
          {
            this.props.isLoggedIn ? (
              <BodySectionWithMarginBottom title='Course list'>
                <CourseList listCourses={this.listCources}/>
              </BodySectionWithMarginBottom>
            ) : (
                <BodySectionWithMarginBottom title='Log in to continue'>
                    <Login logIn={login} />
                </BodySectionWithMarginBottom>
            )
          }
          <BodySection title='News from the school'>
            <p>
              It is a long established fact that a reader will
              be distracted by the readable content of a page
              when looking at its layout. The point of using
              Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using
              'Content here, content here', making it look like
              readable English. Many desktop publishing packages
              and web page editors now use Lorem Ipsum as their
              default model text, and a search for 'lorem ipsum'
              will uncover many web sites still in their infancy.
              Various versions have evolved over the years,
              sometimes by accident, sometimes on purpose
              \(injected humour and the like\).
            </p>
          </BodySection>
          <Footer className={css(styles['App-footer'])} />
        </div>
        </React.Fragment>
      </AppContext.Provider>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
  displayNotificationDrawer: () => { },
  hideNotificationDrawer: () => { },
  displayDrawer: false,
  login: () => {},
};
App.prototype = {
  isLoggedIn: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func,
  hideNotificationDrawer: PropTypes.func,
  displayDrawer: PropTypes.bool,
  login: PropTypes.func,
};

export const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.get("isUserLoggedIn"),
    displayDrawer: state.get('isNotificationDrawerVisible'),
  };
};

export const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
  login: loginRequest,
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);