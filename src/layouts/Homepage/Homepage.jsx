import React, { Component } from 'react';

import ButtonAppBar from './components/Topbar/Topbar';
import Topbar from './components/Topbar/Topbar';
export default function Homepage() {
  const options = [
    {
      id: '3000000001',
      title: 'Arts',
      link: '/artcourse'
    },
    {
      id: '3000000002',
      title: 'Business',
      link: '/businesscourse'
    },
    {
      id: '3000000003',
      title: 'Computer Science',
      link: '/cscourse'
    },
    {
      id: '3000000004',
      title: 'Data Science',
      link: '/dscourse'
    },
    {
      id: '3000000005',
      title: 'Health',
      link: '/healthcourse'
    },
    {
      id: '3000000006',
      title: 'Math & Logic',
      link: '/malcourse'
    },
    {
      id: '3000000007',
      title: 'Language Learning',
      link: '/languagecourse'
    }
  ];
  return (
    <div>
      <Topbar options={options} />
    </div>
  );
}
