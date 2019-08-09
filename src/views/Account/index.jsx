import React, { Component } from 'react';

// Externals
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import { Grid } from '@material-ui/core';
import Footer from 'layouts/Homepage/components/Footer/Footer';
import Homepage from 'layouts/Homepage/Homepage';
// Shared layouts
import { Dashboard as DashboardLayout } from 'layouts';

// Custom components
import { AccountProfile, AccountDetails, SlidingTabsDemo } from './components';

// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4
  }
});

class Account extends Component {
  state = { tabIndex: 0 };

  render() {
    const { classes } = this.props;

    return (
      <div style={{ backgroundColor: '#eaded3' }}>
        <Homepage />

        <SlidingTabsDemo />
        {/* <Grid
          container
          spacing={4}
          style={{ height: '70vh', padding: '50px 100px' }}>
          <Grid item lg={4} md={6} xl={4} xs={12}>
            <AccountProfile />
          </Grid>
          <Grid item lg={8} md={6} xl={8} xs={12}>
            <AccountDetails />
          </Grid>
        </Grid> */}
        <Footer />
      </div>
    );
  }
}

Account.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Account);
