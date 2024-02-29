import React, { useContext } from 'react';
import logo from '../assets/logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from '../App/AppContext';

const styles = StyleSheet.create({
  'App-header': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '25%',
    borderBottom: '3px solid rgb(216, 3, 3)',
    color: 'rgb(216, 3, 3)',
  },
  'App-logo': {
    height: '200px',
  }
})

export default function Header() {
  const { user, logOut } = useContext(AppContext);
  return (
    <>
    <div className={css(styles['App-header'])}>
      <img src={logo} className={css(styles["App-logo"])} alt="logo" />
        <h1>School dashboard</h1>
      </div>
      {
        user.isLoggedIn && <section id="logoutSection">
          <h2>Welcome
            <strong>
              {user.email}
            </strong>
            <em>
              <a href='#' onClick={logOut}>
                (logout)
              </a>
            </em>
          </h2>
        </section>
      }
    </>
  )
}
