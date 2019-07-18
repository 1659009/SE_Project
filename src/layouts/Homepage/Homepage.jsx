import React, { Component } from 'react';

import ButtonAppBar from './components/Topbar/Topbar';
import Topbar from './components/Topbar/Topbar';
export default function Homepage(){
    const options = [
        'Arts',
        'Business',
        'Computer Science',
        'Data Science',
        'Health',
        'Math & Logic',
        'Language Learning',
      ];
        return ( 
            <div>
                <Topbar options ={ options } />
            </div>
        );
}

