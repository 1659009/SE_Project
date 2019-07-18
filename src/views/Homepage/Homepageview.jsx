import React, { Component } from 'react';

import ImgMediaCard from './components/Homepagecontent';
import Homepagemainpic from './components/Homepagemainpic';
import Homepageaboutus from './components/Homepageaboutus';
import Footer from '../../layouts/Homepage/components/Footer/Footer';

import Homepage from '../../layouts/Homepage/Homepage';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({}));

export default function Homepageview() {
  const classes = useStyles();
  const data = [
    {
      title: '123',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      title: '456',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      title: '789',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      title: '123',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      title: '456',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      title: '789',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  ];
  return (
    <div>
      <Homepage />
      <Homepagemainpic />
      <ImgMediaCard data={data} />
      <Homepageaboutus/>
      <Footer />
    </div>
  );
}
