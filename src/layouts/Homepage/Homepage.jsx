import React, { Component } from 'react';

import ButtonAppBar from './components/Topbar/Topbar';
import Topbar from './components/Topbar/Topbar';
export default function Homepage(){
    // const options = [
    //     'Arts',
    //     'Business',
    //     'Computer Science',
    //     'Data Science',
    //     'Health',
    //     'Math & Logic',
    //     'Language Learning',
    //   ];
      const options = [
        {
          title: 'Arts',
          link: '/artcourse'
        },
        {
          title: 'Business',
          content: '/businesscourse'
        },
        {
          title: 'Computer Science',
          content: '/cscourse'
        },
        {
          title: 'Data Science',
          content: '/dscourse'
        },
        {
          title: 'Health',
          content: '/healthcourse'
        },
        {
          title: 'Math & Logic',
          content: '/malcourse'
        },
        {
            title: 'Language Learning',
            content: '/languagecourse'
        }
      ];
        return ( 
            <div>
                <Topbar options ={ options } />
            </div>
        );
}

