import React, { Component } from 'react';

import ButtonAppBar from './components/Topbar/Topbar';

export default class Homepage extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <div>
                <ButtonAppBar/>
            </div>
        );
    }
}

