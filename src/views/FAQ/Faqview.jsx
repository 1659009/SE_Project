import React, { Component } from 'react';
import Header from 'layouts/Homepage/Homepage';
import Footer from 'layouts/Homepage/components/Footer/Footer';
import Faqcontent from './Faqcontent';


class Faqview extends Component {
    render() {
        return (
            <div>
                <Header />
                <Faqcontent />
                <Footer />
            </div>
        );
    }
}

export default Faqview;
