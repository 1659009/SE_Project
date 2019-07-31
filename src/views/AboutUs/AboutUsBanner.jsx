import React, { Component } from 'react';
import { Paper, Button } from '@material-ui/core';
import './style.css';

class AboutUsBanner extends Component {
  render() {
    return (
      <div>
        <Paper className="banner">
          <Paper
            id="bottomPaper"
            style={{
              background: 'rgba(47,79,79 ,0.6 )',
              width: '40%',
              height: '50%',
              paddingLeft: '20px',
              paddingRight: '20px'
            }}>
            <div style={{ position: 'absolute' }}>
              <h2 style={{ color: 'whitesmoke', paddingTop: '30px' }}>
                Special Title
              </h2>
              <p style={{ color: 'whitesmoke' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur esse amet doloribus laudantium omnis praesentium
                distinctio sint architecto est consequuntur quam repellat
                temporibus, nulla quasi pariatur ratione sit ex delectus error
                non similique, minus obcaecati qui. At suscipit tenetur
                exercitationem unde non ut quaerat nesciunt porro veniam
                deserunt, ipsa officiis?
              </p>
            </div>
          </Paper>
        </Paper>
      </div>
    );
  }
}

export default AboutUsBanner;
