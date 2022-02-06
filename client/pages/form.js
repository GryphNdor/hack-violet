import React from 'react'
import { Checkbox, FormGroup, FormControlLabel, Alert, Button } from "@mui/material"
import styles from '../styles/Login.module.css'

export default function login() {
  const [alert, setAlert] = React.useState(false)

  return (
    <div className={styles.background}>
      <div className={styles.loginContainer}>
        <FormGroup>
          <h1>Some Quick Questions</h1>
          <FormControlLabel control={<Checkbox />} label="Well Lit?" />
          <FormControlLabel control={<Checkbox />} label="Populated?" />
          <FormControlLabel control={<Checkbox />} label="Shady Area?" />
          <Button onClick={() => {
            setAlert(!alert)
          }}>Submit</Button>
          {alert ? <Alert severity="success">Thanks!</Alert> : null}
        </FormGroup>
      </div>
    </div>
  )
}
