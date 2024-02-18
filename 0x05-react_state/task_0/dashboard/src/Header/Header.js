import React from 'react';
import logo from '../assets/logo.jpg';
import { StyleSheet, css } from 'aphrodite';

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

export default function Header(props) {
  return (
    <div className={css(styles['App-header'])}>
      <img src={logo} className={css(styles["App-logo"])} alt="logo" />
        <h1>School dashboard</h1>
      </div>
  )
}
