import React from 'react';
import Link from 'next/link';

import {
  AppBar,
  IconButton,
  Toolbar,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material'
import { AiOutlineMenu } from 'react-icons/ai';

const styles = {
  paper: {
    background: "blue"
  }
}

export default function Layout({ children }) {
  const [open, setOpen] = React.useState(false)

  return (
    <div>
      <Drawer
        PaperProps={{
          sx: {
            backgroundColor: "#b8c1ec",
            color: "#232946",
            width: "200px"
          }
        }}
        anchor='left'
        open={open}
        onClose={() => setOpen(!open)}
      >
        <Box>
          <List>
            <Link href="/login">
              <ListItem button component="a" onClick={() => setOpen(!open)}>
                <ListItemText>
                  Login
                </ListItemText>
              </ListItem>
            </Link>
            <Link href="/login">
              <ListItem button component="a" onClick={() => setOpen(!open)}>
                <ListItemText>
                  Sign Up
                </ListItemText>
              </ListItem>
            </Link>
            <Link href="/contact">
              <ListItem button component="a" onClick={() => setOpen(!open)}>
                <ListItemText>
                  Contact Us
                </ListItemText>
              </ListItem>
            </Link>

            <Link href="/">
              <ListItem
                style={{
                  position: "fixed",
                  bottom: 0,
                  paddingBottom: 10,
                }}
                button component="a" onClick={() => setOpen(!open)}>
                <ListItemText>
                  Home
                </ListItemText>
              </ListItem>
            </Link>
          </List>
        </Box>
      </Drawer>
      <AppBar position="fixed" style={{ background: 'transparent', boxShadow: 'none' }}>
        <Toolbar>
          <IconButton style={{
            color: 'white',
            fontSize: '2em'
          }}
            onClick={() => setOpen(!open)}
          >
            <AiOutlineMenu />
          </IconButton>
        </Toolbar>
      </AppBar>
      {children}
    </div >
  )
}


