import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper';
import './Homepage.css';
import { Card, Button } from '@material-ui/core';

export default class Homepagemainpic extends Component {
  render() {
    return (
      <div>
        <Paper
          style={{
            height: '50vh'
          }}
          id="mainBG">
          <div id="centerBtn">
            <h1 id="mainPg">Welcome to our website</h1>
            <Button
              style={{
                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                color: 'white',
                height: 48,
                padding: '0 30px',
                marginTop: '10px'
              }}>
              Click here
            </Button>
          </div>
        </Paper>
      </div>
    );
  }
}
