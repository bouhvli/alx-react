import React from 'react'
import { StyleSheet, css } from 'aphrodite';
const styles = StyleSheet.create({
  'App-body': {
    fontSize: '1.4rem',
    padding: '1.2em',
    height:'45%',
  },
  'form-inputs': {
    display: 'flex',
    gap: '2em',
    alignItems: 'center',
  },
  input: {
    height: '1.4rem',
    marginLeft:'10px',
  }
})

export default function Login() {
  return (
    <>
      <div className={css(styles['App-body'])}>
          <p>
          Login to access the full dashboard
        </p>
        <section className={css(styles['form-inputs'])}>
          <section className='input'>
            <label htmlFor='email' onClick={() => {
              document.getElementById('email').focus();
                }}>Email:</label>
            <input className={css(styles.input)} type='email' id='email' />
          </section>
          <section>
            <label htmlFor='password' onClick={() => {
              document.getElementById('password').focus();
                }}>Password:</label>
            <input className={css(styles.input)} type='password' id='password' />
          </section>
              <button>OK</button>
          </section>
      </div>
    </>
  )
}
