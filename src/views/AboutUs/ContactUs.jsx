import React, { Component } from 'react';
import { Box, Button } from '@material-ui/core';
import './style.css';
import TextArea from 'antd/lib/input/TextArea';

class ContactUs extends Component {
  render() {
    return (
      <div>
        <Box
          className="dividerContactUs"
          display="flex"
          justifyContent="center">
          Contact Us
        </Box>
        <div className="contactUsSection">
          <div className="inputSection">
            <h2 className="contactUsHeader text-center">
              Feel Free To Contact Us
            </h2>
            <TextArea className="inputField" />
            <br />
            <TextArea className="inputField" />
            <br />
            <TextArea className="inputBigField" />
            <br />
            <Button className="submitButton">Submit</Button>
          </div>
          <div className="pictureSection">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcVXDJOB93ruy3-8V346cjjqhri5x0eqLOApjPJAmmaiwQjeTl"
              alt=""
              width="400px"
              height="330px"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
