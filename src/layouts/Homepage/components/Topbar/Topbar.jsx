import React from 'react';

import { MemoryRouter as Router } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';

import MenuList from '@material-ui/core/MenuList';
import Profile from './Components/Profile';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto'
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  menuList: {
    marginRight: '30px'
  },
  menuItems: {
    display: 'inline',
    marginTop: '10px',
    color: '#d0b808',
    padding: '10px 30px',
    borderRadius: '10px',
    '&:hover': {
      background: '#d0b808',
      color: 'whitesmoke'
    }
  },
  logo: {
    display: 'inline',
    width: '3%'
  },
  categorize: {
    marginLeft: theme.spacing(3),
    '&:hover': {
      background: '#d0b808',
      color: 'black !important'
    },
    '&:focus': {
      outline: 'none !important'
    }
  },
  link: {
    color: '#d0b808',
    '&:hover': {
      color: 'white',
      textDecoration: 'none'
    }
  }
}));

export default function Topbar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  function handleClickEvent(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const { options } = props;
  const homeLink = React.forwardRef((props, ref) => (
    <RouterLink innerRef={ref} {...props} />
  ));

  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{ background: '#2F4F4F' }}>
        <Toolbar>
          <img
            className={classes.logo}
            src="https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.15752-9/66393848_2411908192387248_6191358428502294528_n.png?_nc_cat=107&_nc_oc=AQlDymdus3YggYTzjLhMW8WFF_SGNMZc6gyt7Tc-X96kVNycysQwZdGo-AHixjHJwDk&_nc_ht=scontent.fsgn5-6.fna&oh=441fd0375e071b6daa33cc1b7b72ff3f&oe=5DBE3C26"
            alt="Logo"
          />

          <Button
            className={classes.categorize}
            style={{
              color: '#d0b808',
              border: '1px',
              borderRadius: '10px',
              padding: '10px 10px'
            }}
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClickEvent}>
            Explore
          </Button>
          <Menu
            style={{ marginTop: '50px' }}
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}>
            {options.map(option => {
              return <Link component={homeLink} to={option.link} className={classes.link}><MenuItem onClick={handleClose}>{option.title}</MenuItem></Link>;
            })}
          </Menu>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ 'aria-label': 'Search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <MenuList className={classes.menuList}>
              <Link
                component={homeLink}
                to="/homepage"
                className={classes.link}>
                <MenuItem className={classes.menuItems}>Home</MenuItem>
              </Link>
              <Link component={homeLink} to="/" className={classes.link}>
                <MenuItem className={classes.menuItems}>About us</MenuItem>
              </Link>
              <Link component={homeLink} to="/" className={classes.link}>
                <MenuItem className={classes.menuItems}>FAQ</MenuItem>
              </Link>
            </MenuList>
            <Profile />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
