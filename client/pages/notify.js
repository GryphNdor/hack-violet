import React from 'react';
import styles from '../styles/Login.module.css'
import { Menu, MenuItem, Button, Paper, Grid } from '@mui/material';


export default function Notify() {
  return (
    <div className={styles.background}>
      <Grid container spacing={10}>
        <Grid item xs={12} justifyContent="center" alignItems="center">
          <Paper>
            <h1>Check Up On</h1>
            <LongMenu />
            <Button variant="contained">Notify!</Button>
          </Paper>
        </Grid>
        <Grid xs={12} item justifyContent="center" alignItems="center">
          <Paper>
            <h1>{`Let Someone Know`}</h1>
            <LongMenu />
            <Button variant="contained">Notify!</Button>
          </Paper>
        </Grid>

      </Grid>
    </div >
  )
}

const options = [
  "Liam",
  "Olivia",
  "Noah",
  "Emma",
  "Oliver",
  "Ava",
  "Elijah",
  "Charlotte",
  "William	",
  "Sophia",
  "James",
  "Amelia",
  "Benjamin",
  "Isabella",
  "Lucas",
  "Mia",
  "Henry",
  "Evelyn",
  "Alexander",
  "Harper"
];

const ITEM_HEIGHT = 48;

function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [curSelected, setCurSelected] = React.useState("");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    setCurSelected(event.currentTarget.innerText)
    setAnchorEl(null);
  };

  return (
    <div>

      <Button
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        style={{
          fontSize: 32
        }}
      >
        {curSelected ? curSelected : 'Open Menu'}
      </Button>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>

    </div>
  );
}
