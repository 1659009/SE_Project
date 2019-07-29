import React, { Component } from 'react';

import ButtonAppBar from './components/Topbar/Topbar';
import Topbar from './components/Topbar/Topbar';
export default function Homepage() {
  const options = [
    {
      title: 'Arts',
      link: '/course/3000000001'
    },
    {
      title: 'Business',
      link: '/course/3000000002'
    },
    {
      title: 'Computer Science',
      link: '/course/3000000003'
    },
    {
      title: 'Data Science',
      link: '/course/3000000004'
    },
    {
      title: 'Health',
      link: '/course/3000000005'
    },
    {
      title: 'Math & Logic',
      link: '/course/3000000006'
    },
    {
      title: 'Language Learning',
      link: '/course/3000000007'
    }
  ];
  return (
    <div>
      <Topbar options={options} />
    </div>
  );
}
