import React, { Component } from 'react';

import Topbar from '../../layouts/Homepage/Homepage';
import Footer from '../../layouts/Homepage/components/Footer/Footer';
import Courseheader from './Detailheader';
import { Container, Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import './style.css';


export default class Coursedetailsview extends Component {
    render() {
        return (
            <div>
                <Topbar/>
                <Courseheader/>
                <Footer/>
            </div>
        );
    }
}



