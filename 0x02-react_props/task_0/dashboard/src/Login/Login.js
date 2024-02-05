import React from 'react'
import './Login.css'
export default function Login() {
  return (
    <React.Fragment>
          <p>
          Login to access the full dashboard
          </p>
      <label htmlFor='email' onClick={() => {
        document.getElementById('email').focus();
          }}>Email:</label>
          <input type='email' id='email' />
      <label htmlFor='password' onClick={() => {
        document.getElementById('password').focus();
          }}>Password:</label>
          <input type='password' id='password' />
          <button>OK</button>
    </React.Fragment>
  )
}
