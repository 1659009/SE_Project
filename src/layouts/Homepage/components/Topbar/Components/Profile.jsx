import React from 'react';

import { MemoryRouter as Router } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

import { fade, makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
  profileBtn: {
    '&:focus': { outline: 'none !important' }
  },
  link:{
    color:'black',
    '&:hover': {
      color:'black',
      textDecoration:'none',
    }
  }
}));

export default function Profile() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  const homeLink = React.forwardRef((props, ref) => (
    <RouterLink innerRef={ref} {...props} />
  ));

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <IconButton
        color="inherit"
        onClick={handleClick}
        className={classes.profileBtn}>
        <AccountCircle />
      </IconButton>

      <Menu
        style={{ marginTop: '50px' }}
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>
        <Link component={homeLink} to="/sign-in" className={classes.link}>
        Logout
        </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
