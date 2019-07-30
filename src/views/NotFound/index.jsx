import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import compose from 'recompose/compose';

// Externals
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import { Grid, Typography } from '@material-ui/core';

// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4
  },
  content: {
    marginTop: '150px',
    textAlign: 'center'
  },
  image: {
    display: 'inline-block',
    marginTop: '50px',
    maxWidth: '100%',
    width: '554px'
  }
});

class NotFound extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.history.push('/homepage');
    }, 3000);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container justify="center" spacing={4}>
          <Grid item lg={6} xs={12}>
            <div className={classes.content}>
              <Typography variant="h1">
                404: The page you are looking for isn’t here
              </Typography>
              <Typography variant="subtitle2">
                Return to Home in 3 seconds...
              </Typography>
              <img
                alt="Under development"
                className={classes.image}
                src="/images/not_found.png"
              />
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

NotFound.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(
  withRouter,
  withStyles(styles)
)(NotFound);
