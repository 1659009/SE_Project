import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper';
import './Homepage.css';
import { Card, Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

export default class Homepageaboutus extends Component {
  render() {
    return (
      <div style={{marginTop:'5vh'}}>
        <Paper style={{height:'10vh', position:'relative',background:'#d0b808'}}>
      <Typography style={{color:'#2F4F4F' ,top:'50%',left:'50%',marginRight:'-50%',transform:'translate(-50%,-50%)',position:'absolute',fontWeight:'Bold'}} variant="h1">ABOUT US</Typography>
    </Paper>
      
        <Paper
          style={{
            height: '50vh',
            position: 'relative'
          }}
          id="mainBG">
            <Paper id='bottomPaper' style={{background:'rgba(47,79,79 ,0.6 )',width:'40%',height:'50%',paddingLeft:'20px', paddingRight:'20px' }}>
            <div style={{position:'absolute'}}>
            <h2 style={{color:'whitesmoke', paddingTop:'10px'}}>Special Title </h2>
            <p style={{color:'whitesmoke'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis libero lorem. Nullam eu mattis urna, vel dignissim ipsum. Sed eu odio nibh. Nullam volutpat turpis eget urna ultricies, venenatis feugiat odio pulvinar. </p>
            <Button
              style={{
                background: '#d0b808',
                color: 'whitesmoke',
                height: 30,
                padding: '0 20px',
                float: 'right',
                marginRight: '10%'
              }}>
              Click here
            </Button>
            </div>
            </Paper>
        </Paper>
        </div>
    );
  }
}