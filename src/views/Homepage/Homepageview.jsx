import React, { Component } from 'react';

import ImgMediaCard from './components/Homepagecontent';
import Homepagemainpic from './components/Homepagemainpic';
import Footer from '../../layouts/Homepage/components/Footer/Footer';

import Homepage from '../../layouts/Homepage/Homepage';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({

}));

 export default function Homepageview(){
    const classes = useStyles();
 
    return (
      <div>
        <Homepage />
        <Homepagemainpic/>
        <ImgMediaCard/>
        <Footer/>
      </div>
    );

}


