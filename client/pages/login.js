import { Button, Link } from '@mui/material';
import React from 'react';
import styles from '../styles/Login.module.css'

export default function login() {
  return (
    <div className={styles.background}>
      <div className={styles.loginContainer}>
        <div>
          <h3>Email</h3>
          <input placeholder='email' type="email" />
        </div>
        <div>
          <h3>Password</h3>
          <input placeholder='password' type="password" />
        </div>
        <Link href="/tracker">
          <Button variant="contained">Submit</Button>
        </Link>
      </div>
    </div>
  )
}
