import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Badge,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
/*import { RootState } from '../../redux/reducers';
import { logout } from '../../redux/actions/userActions';*/

import './Header.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },

    button: {
      '&:focus': {
        outline: 'none',
      },
      '&:hover': {
        color: 'inherit',
      },
    },

    title: {
      '&:hover': {
        color: 'inherit',
        textDecoration: 'none',
      },
    },

    spaceSection: {
      flexGrow: 1,
    },
  })
);

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            className={classes.title}
            component={Link}
            color="inherit"
            to="/"
          >
            My Todos App
          </Typography>
          <div className={classes.spaceSection}></div>
          {/*<IconButton
            className={classes.button}
            aria-label="show 4 new mails"
            color="inherit"
            component={Link}
            to="/cart"
          >
            <Badge
              badgeContent={cartItems.reduce((acc, item) => acc + item.qty, 0)}
              color="secondary"
            >
              <ShoppingCartIcon />
            </Badge>
          </IconButton>

          {userInfo ? (
            <div>
              <Button
                className={classes.button}
                color="inherit"
                startIcon={<PersonIcon />}
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
              >
                {userInfo.name}
              </Button>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={isDropDownOpen}
                onClose={handleClose}
              >
                <MenuItem
                  component={Link}
                  to="/profile"
                  onClick={profileHandler}
                >
                  Profile
                </MenuItem>
                <MenuItem onClick={logoutHandler}>Logout</MenuItem>
              </Menu>
            </div>
          ) : (
            <Button
              className={classes.button}
              color="inherit"
              startIcon={<PersonIcon />}
              component={Link}
              to="/login"
            >
              Sign In
            </Button>
          )}*/}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
