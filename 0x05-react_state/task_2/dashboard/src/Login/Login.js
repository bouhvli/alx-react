import React, { useEffect } from 'react'
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
  },
  mobile: {
    '@media (max-width: 375px)': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '0.5em',
    },
  },
})

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enableSubmit, setEnableSubmit] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    props.logIn(e.target.elements.email.value, e.target.elements.password.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  useEffect(() => {
    if (email != '' && password != '') {
      setEnableSubmit(true);
    } else {
      if (enableSubmit != false) {
        setEnableSubmit(false);
      }
    }
  }, [email, password]);

  return (
    <>
      <div className={css(styles['App-body'])}>
          <p>
          Login to access the full dashboard
        </p>
        <form onSubmit={handleLoginSubmit}>
          <section className={css(styles['form-inputs'], styles.mobile)}>
            <section className='input'>
              <label htmlFor='email' onClick={() => {
                document.getElementById('email').focus();
                  }}>Email:</label>
              <input
                className={css(styles.input)}
                type='email'
                id='email'
                value={email}
                onChange={handleChangeEmail}
              />
            </section>
            <section>
              <label htmlFor='password' onClick={() => {
                document.getElementById('password').focus();
                  }}>Password:</label>
              <input
                className={css(styles.input)}
                type='password'
                id='password'
                value={password}
                on onChange={handleChangePassword}
              />
            </section>
                <input type='submit' value='OK' disabled={!enableSubmit} />
            </section>
        </form>
      </div>
    </>
  )
}
