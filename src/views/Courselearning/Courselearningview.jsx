import React, { Component } from 'react';
import Header from 'layouts/Homepage/Homepage';
import Footer from 'layouts/Homepage/components/Footer/Footer';
import Courselearningtabs from './Courselearningtabs';

class Courselearningview extends Component {
    render() {
        return (
            <div>
                <Header />
                <Courselearningtabs />
                <Footer />
            </div>
        );
    }
}

export default Courselearningview;