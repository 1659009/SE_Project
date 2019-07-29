import React, { Component } from 'react';
import {
  Paper,
  Grid,
  Breadcrumbs,
  Typography,
  Button,
  Container
} from '@material-ui/core';
import { MemoryRouter as Router } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

class Detailheader extends Component {
  render() {
    return (
      <div>
        <Container>
          <Grid container className="headerDescription" spacing={1}>
            <Grid item className="listItemLeft" xs={6}>
              <Breadcrumbs
                separator={
                  <NavigateNextIcon fontSize="small" className="previousPath" />
                }
                aria-label="breadcrumb">
                <Link className="previousPath" c href="/homepage">
                  Homepage
                </Link>
                <Link className="previousPath" href="/artcourse">
                  Arts
                </Link>
                <Typography className="previousPath">
                  Advanced Courses
                </Typography>
              </Breadcrumbs>
              <br />
              <p className="courseProvider">Offered By</p>
              <img
                className="courseProviderLogo"
                src="https://www.sisk.ie/sites/default/files/slideshow/395/930-958-origo-logo.png"
                alt="course logo"
              />
            </Grid>
            <Grid item className="listItemRight" xs={6}>
              <div className="courseInformation">
                <h2 className="courseTitle">
                  History of modern abstract artwork
                </h2>
                <p className="courseShortDescription">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi exercitationem tempora, recusandae similique saepe
                  soluta veniam, eveniet nulla ab id nobis, incidunt deleniti
                  quod minima dicta quos officia optio! Culpa?
                </p>
              </div>
              <div className="courseEnroll">
                <Grid container spacing={3}>
                  <Grid item xs={3}>
                    <Button size="large" className="enrollButton">
                      Enroll Now
                    </Button>
                  </Grid>
                  <Grid item xs={9}>
                    <Button size="large" className="enrollButton">
                      Save Course
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <p className="enrollNumber">10,865 already enroll </p>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Detailheader;
