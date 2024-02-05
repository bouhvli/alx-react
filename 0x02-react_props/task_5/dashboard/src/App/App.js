import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import './App.css';


function App({ isLoggedIn }) {
  let component = undefined;
  isLoggedIn
    ? (component = <CourseList />)
    : (component = <Login />);
  return (
    <>
      <Notifications/> 
      <div className="App">
        <Header />
        <body className='App-body'>
          { component }
        </body>
        <Footer />
      </div>
    </>
  );
}

App.defaultProps = {
  isLoggedIn: false,
};
App.prototype = {
  isLoggedIn: PropTypes.bool,

};

export default App;
