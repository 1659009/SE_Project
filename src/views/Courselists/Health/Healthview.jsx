import React, { Component } from 'react';

import Footer from '../../../layouts/Homepage/components/Footer/Footer';
import Homepage from '../../../layouts/Homepage/Homepage';
import BusinessCourses from './components/Healthlists';
import RecommendView from './components/Recommedview';

export default function Healthview() {
  const courseList = [
    {
      title: 'Course 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      title: 'Course 2',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      title: 'Course 3',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      title: 'Course 4',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      title: 'Course 5',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      title: 'Course 6',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      title: 'Course 7',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      title: 'Course 7',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      title: 'Course 9',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  ];

  return (
    <div>
      <Homepage />
      <BusinessCourses courseList={courseList} />
      <RecommendView />
      <Footer />
    </div>
  );
}
