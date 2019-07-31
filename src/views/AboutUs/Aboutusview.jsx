import React, { Component } from 'react';
import Header from 'layouts/Homepage/Homepage';
import Footer from 'layouts/Homepage/components/Footer/Footer';
import Banner from './AboutUsBanner';
import MemberList from './AboutUsMember';
import ContactUs from './ContactUs';

class Aboutusview extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />>
        <MemberList />
        <ContactUs />
        <Footer />
      </div>
    );
  }
}

export default Aboutusview;
