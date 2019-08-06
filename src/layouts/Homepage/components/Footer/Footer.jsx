import React from 'react';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Email, MailOutline, Phone, Home } from '@material-ui/icons';
const useStyles = makeStyles(theme => ({}));

export default function Footer() {
  const classes = useStyles();
  return (
    <Paper style={{ paddingTop: '10px', height: '30vh', background: '#d0b808' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} style={{ position: 'relative' }}>
          <div style={{ paddingLeft: '10%', paddingTop: '5vh' }}>
            <h1>CONTACT</h1>
            <MailOutline /> ABC@abc.com <br />
            <Phone /> 01256842315<br />
            <Home /> 369 Ba Hat Street, Ward 4, District 10<br />
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div style={{ textAlign: 'center', paddingTop: '5vh' }}>
            <h1>CONNECT TO US</h1>
            <img src="https://cdn3.iconfinder.com/data/icons/sympletts-part-2/128/circle-social-facebook-512.png" style={{ width: '8%', height: '8%', marginRight: '100px' }} alt="Facebook" />
            <img src="https://cdn2.iconfinder.com/data/icons/instagram-new/512/instagram-round-liner-512.png" style={{ width: '7%', height: '7%' }} alt="Instagram" />
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}
