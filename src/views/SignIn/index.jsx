import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';

// Externals
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import validate from 'validate.js';
import _ from 'underscore';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import {
  Grid,
  Button,
  IconButton,
  CircularProgress,
  TextField,
  Typography
} from '@material-ui/core';

// Material icons
import { ArrowBack as ArrowBackIcon } from '@material-ui/icons';

// Shared components
import { Facebook as FacebookIcon, Google as GoogleIcon } from 'icons';

// Component styles
import styles from './styles';

// Form validation schema
import schema from './schema';
import { Api } from 'constants/api';
// Service methods
const signIn = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, 1500);
  });
};

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      user_id: 0
    };
  }

  handleBack = () => {
    const { history } = this.props;

    history.goBack();
  };

  // validateForm = _.debounce(() => {
  //   const { values } = this.state;

  //   const newState = { ...this.state };
  //   const errors = validate(values, schema);

  //   newState.errors = errors || {};
  //   newState.isValid = errors ? false : true;

  //   this.setState(newState);
  // }, 300);

  handleEmail = value => {
    this.setState({ email: value });
  };
  handlePassword = value => {
    this.setState({ password: value });
  };

  handleSignIn = () => {
    let link = Api.link + 'login';
    const { history } = this.props;
    const { email, password } = this.state;
    axios
      .post(link, {
        email: email,
        password: password
      })
      .then(response => {
        console.log(response);
        if (response.status == 200) {
          console.log(response);

          this.setState({ user_id: response.data.user_id });
          console.log('success');
          localStorage.removeItem('isLogin');
          localStorage.setItem('isLogin', true);
          localStorage.setItem('user_id', this.state.user_id);
          history.push('/homepage');
        }
      })
      .catch(function(error) {
        console.log(error);
      });
    // axios({
    //   method: 'post',
    //   url: 'http://192.168.122.1/login',
    //   data: {
    //     email: email,
    //     password: password
    //   }
    // });
  };

  render() {
    const { classes } = this.props;
    const { email, password } = this.state;
    console.log(this.state);

    return (
      <div className={classes.root}>
        <Grid className={classes.grid} container>
          <Grid className={classes.quoteWrapper} item lg={5}>
            <div className={classes.quote}>
              <div className={classes.quoteInner}>
                <Typography className={classes.quoteText} variant="h1">
                  Hella narwhal Cosby sweater McSweeney's, salvia kitsch before
                  they sold out High Life.
                </Typography>
                <div className={classes.person}>
                  <Typography className={classes.name} variant="body1">
                    Takamaru Ayako
                  </Typography>
                  <Typography className={classes.bio} variant="body2">
                    Manager at inVision
                  </Typography>
                </div>
              </div>
            </div>
          </Grid>
          <Grid className={classes.content} item lg={7} xs={12}>
            <div className={classes.content}>
              <div className={classes.contentHeader}>
                <IconButton
                  className={classes.backButton}
                  onClick={this.handleBack}>
                  <ArrowBackIcon />
                </IconButton>
              </div>
              <div className={classes.contentBody}>
                <form className={classes.form}>
                  <Typography className={classes.title} variant="h2">
                    Sign in
                  </Typography>

                  <div className={classes.fields}>
                    <TextField
                      id="outlined-email-input"
                      label="Email"
                      className={classes.textField}
                      type="email"
                      name="email"
                      autoComplete="email"
                      margin="normal"
                      variant="outlined"
                      value={email}
                      onChange={event => this.handleEmail(event.target.value)}
                    />
                    <TextField
                      id="outlined-password-input"
                      label="Password"
                      className={classes.textField}
                      type="password"
                      autoComplete="current-password"
                      margin="normal"
                      variant="outlined"
                      value={password}
                      onChange={event =>
                        this.handlePassword(event.target.value)
                      }
                    />
                  </div>

                  <Button
                    className={classes.signInButton}
                    color="primary"
                    onClick={this.handleSignIn}
                    size="large"
                    variant="contained">
                    Sign in now
                  </Button>

                  <Typography className={classes.signUp} variant="body1">
                    Don't have an account?{' '}
                    <Link className={classes.signUpUrl} to="/sign-up">
                      Sign up
                    </Link>
                  </Typography>
                </form>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default compose(
  withRouter,
  withStyles(styles)
)(SignIn);
