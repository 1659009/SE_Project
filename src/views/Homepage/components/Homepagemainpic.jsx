import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper';
import './Homepage.css';
import { Card, Button } from '@material-ui/core';

export default class Homepagemainpic extends Component {

  render() {
    return (
      <Paper
        style={{
          height: '50vh',
          position: 'relative',
          borderRadius: '0px'
        }}
        id="mainBG">
        <Paper id='centerPaper' style={{ background: '#2F4F4F', width: '30%', paddingLeft: '20px', paddingRight: '20px' }}>
          <div style={{ textAlign: 'center' }}>
            <h1 id="mainPg">Special Title </h1>
            <p style={{ color: 'whitesmoke' }}>lorem ipsum caris kunas insopt igenagi</p>
            <Button
              style={{
                background: '#d0b808',
                borderRadius: '10px',
                color: 'whitesmoke',
                height: 48,
                padding: '0 30px',
                marginBottom: '3vh',
              }}>
              Click here
            </Button>
          </div>

        </Paper>
      </Paper>
    );
  }
}
