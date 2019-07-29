import React from 'react';

import { MemoryRouter as Router } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

import Link from '@material-ui/core/Link';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import Homepage from 'layouts/Homepage/Homepage';
import Footer from '../../Footer/Footer';



// const useStyles = makeStyles(theme => ({
//   profileBtn: {
//     '&:focus': { outline: 'none !important' }
//   },
//   link: {
//     color: 'black',
//     '&:hover': {
//       color: 'black',
//       textDecoration: 'none'
//     }
//   }
// }));
// const classes = useStyles();

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false, anchorEl: '' };
  }
  handleClick = event => {
    this.setState({ open: true, anchorEl: event.target });
  };

  handLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const homeLink = React.forwardRef((props, ref) => (
      <RouterLink innerRef={ref} {...props} />
    ));

    return (
      <div>
        <Homepage />
        <IconButton
          color="inherit"
          onClick={e => {
            this.handleClick(e);
          }}
          // className={classes.profileBtn}
        >
          <AccountCircle />
        </IconButton>

        <Menu
          style={{ marginTop: '50px' }}
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          keepMounted
          open={this.state.open}
          onClose={this.handleClose}>
          <Link component={homeLink} to="/account-profile">
            <MenuItem>Profile</MenuItem>
          </Link>
          <MenuItem onClick={this.handleClose}>My account</MenuItem>
          <MenuItem onClick={this.handLogout}>Logout</MenuItem>
        </Menu>
        <Footer/>
      </div>
    );
  }
}
