import React, { Component } from 'react';

import ImgMediaCard from './components/Homepagecontent';
import Homepagemainpic from './components/Homepagemainpic';
import Homepageaboutus from './components/Homepageaboutus';
import Footer from '../../layouts/Homepage/components/Footer/Footer';

import Homepage from '../../layouts/Homepage/Homepage';




export default function Homepageview() {

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
