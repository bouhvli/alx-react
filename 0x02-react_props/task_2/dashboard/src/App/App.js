import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';


import './App.css';
function App() {
  return (
    <>
      <Notifications/> 
      <div className="App">
        <Header />
        <body className='App-body'>
          <Login />
        </body>
        <Footer />
      </div>
    </>
  );
}

export default App;
