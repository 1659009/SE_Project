import React, { Component } from 'react';

import RecommendCourse from './Recommendcourse';

export default function RecommendView() {
  const recommendCourse = [
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
    }
  ];
  return (
    <div>
      <RecommendCourse recommendCourse={recommendCourse} />
    </div>
  );
}
