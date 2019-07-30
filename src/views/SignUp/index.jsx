import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

// Externals
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import validate from 'validate.js';
import _ from 'underscore';
import axios from 'axios';
import { Api } from 'constants/api';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import {
  Button,
  Checkbox,
  CircularProgress,
  Grid,
  IconButton,
  TextField,
  Typography
} from '@material-ui/core';

// Material icons
import { ArrowBack as ArrowBackIcon } from '@material-ui/icons';

// Shared utilities
import validators from 'common/validators';

// Component styles
import styles from './styles';

// Form validation schema
import schema from './schema';
import { notification } from 'antd';

validate.validators.checked = validators.checked;

// Service methods
const signUp = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, 1500);
  });
};

class SignUp extends Component {
  state = {
    values: {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    },
    touched: {
      firstName: false,
      lastName: false,
      email: false,
      password: false
    },
    errors: {
      firstName: null,
      lastName: null,
      email: null,
      password: null
    },
    isValid: true,
    isLoading: false,
    submitError: null
  };

  handleBack = () => {
    const { history } = this.props;

    history.goBack();
  };

  validateForm = _.debounce(() => {
    const { values } = this.state;

    const newState = { ...this.state };
    const errors = validate(values, schema);

    newState.errors = errors || {};
    newState.isValid = errors ? false : true;

    this.setState(newState);
  }, 300);

  handleFieldChange = (field, value) => {
    const newState = { ...this.state };

    newState.submitError = null;
    newState.touched[field] = true;
    newState.values[field] = value;

    this.setState(newState, this.validateForm);
  };

  handleSignUp = () => {
    let link = Api.link + 'sign-up';
    const { history } = this.props;
    const { email, password, firstName, lastName } = this.state.values;
    const name = lastName + ' ' + firstName;
    axios
      .post(link, {
        name: name,
        email: email,
        password: password
      })
      .then(response => {
        console.log(response);
        if (response.status == 200) {
          notification['success']({
            message: 'Successfully create account.'
          });
          history.push('/sign-in');
        }
      })
      .catch(function(error) {
        notification['error']({
          message: 'Sign up fail. Please try again.'
        });
      });
  };

  render() {
    const { classes } = this.props;
    const {
      values,
      touched,
      errors,
      isValid,
      submitError,
      isLoading
    } = this.state;
    console.log(this.state);

    const showFirstNameError =
      touched.firstName && errors.firstName ? errors.firstName[0] : false;
    const showLastNameError =
      touched.lastName && errors.lastName ? errors.lastName[0] : false;
    const showEmailError =
      touched.email && errors.email ? errors.email[0] : false;
    const showPasswordError =
      touched.password && errors.password ? errors.password[0] : false;

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
                    Create new account
                  </Typography>
                  <Typography className={classes.subtitle} variant="body1">
                    Use your work email to create new account... it's free.
                  </Typography>
                  <div className={classes.fields}>
                    <TextField
                      className={classes.textField}
                      label="First name"
                      name="firstName"
                      onChange={event =>
                        this.handleFieldChange('firstName', event.target.value)
                      }
                      value={values.firstName}
                      variant="outlined"
                    />
                    {showFirstNameError && (
                      <Typography
                        className={classes.fieldError}
                        variant="body2">
                        {errors.firstName[0]}
                      </Typography>
                    )}
                    <TextField
                      className={classes.textField}
                      label="Last name"
                      onChange={event =>
                        this.handleFieldChange('lastName', event.target.value)
                      }
                      value={values.lastName}
                      variant="outlined"
                    />
                    {showLastNameError && (
                      <Typography
                        className={classes.fieldError}
                        variant="body2">
                        {errors.lastName[0]}
                      </Typography>
                    )}
                    <TextField
                      className={classes.textField}
                      label="Email address"
                      name="email"
                      onChange={event =>
                        this.handleFieldChange('email', event.target.value)
                      }
                      value={values.email}
                      variant="outlined"
                    />
                    {showEmailError && (
                      <Typography
                        className={classes.fieldError}
                        variant="body2">
                        {errors.email[0]}
                      </Typography>
                    )}
                    <TextField
                      className={classes.textField}
                      label="Password"
                      onChange={event =>
                        this.handleFieldChange('password', event.target.value)
                      }
                      type="password"
                      value={values.password}
                      variant="outlined"
                    />
                    {showPasswordError && (
                      <Typography
                        className={classes.fieldError}
                        variant="body2">
                        {errors.password[0]}
                      </Typography>
                    )}
                  </div>
                  {submitError && (
                    <Typography className={classes.submitError} variant="body2">
                      {submitError}
                    </Typography>
                  )}
                  {isLoading ? (
                    <CircularProgress className={classes.progress} />
                  ) : (
                    <Button
                      className={classes.signUpButton}
                      color="primary"
                      onClick={this.handleSignUp}
                      size="large"
                      variant="contained">
                      Sign up now
                    </Button>
                  )}
                  <Typography className={classes.signIn} variant="body1">
                    Have an account?{' '}
                    <Link className={classes.signInUrl} to="/sign-in">
                      Sign In
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

SignUp.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default compose(
  withRouter,
  withStyles(styles)
)(SignUp);
