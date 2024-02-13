import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import './App.css';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { getLatestNotification } from '../utils/utils';
import BodySection from '../BodySection/BodySection';



class App extends React.Component {
  constructor(prop) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  listCources = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ];
  listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: getLatestNotification() }
  ];
  handleKeyPress(e) {
    if (e.ctrlKey && e.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }
  render() {
    return (
      <React.Fragment>
        <div>
          <div>
            <Notifications />
            <Header/>
          </div>
          {
            this.props.isLoggedIn ? (
              <BodySectionWithMarginBottom title='Course list'>
                <CourseList listCourses={this.listCources}/>
              </BodySectionWithMarginBottom>
            ) : (
                <BodySectionWithMarginBottom title='Log in to continue'>
                  <Login />
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
        </div>
      </React.Fragment>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {
    return;
  },
};
App.prototype = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,

};

export default App;
