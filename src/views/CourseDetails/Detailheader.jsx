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
import axios from 'axios';
import { notification } from 'antd';
import { Api } from 'constants/api';
import { borderRadius } from '@material-ui/system';
let isLoggin;
class Detailheader extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  handleEnroll = course_id => {
    let link = Api.link + 'enroll';
    let id = axios
      .post(link, {
        course_id: course_id,
        user_id: parseInt(this.state.user_id)
      })
      .then(response => {
        console.log(response);
        if (response.status == 200) {
          notification['success']({
            message: 'Enroll success.'
          });
          this.forceUpdate()
        }
      })
      .catch(function (error) {
        notification['error']({
          message: 'You have already enrolled this course.'
        });
      });
  };

  handleEnrollFail = () => {
    console.log('fail');

    notification['error']({
      message: 'Please login before enroll.'
    });
  };

  handleSave = course_id => {
    let link = Api.link + 'save-course';
    let id = axios
      .post(link, {
        user_id: parseInt(this.state.user_id),
        course_id: course_id
      })
      .then(response => {
        console.log(response);
        if (response.status == 200) {
          notification['success']({
            message: 'Save course success.'
          });
        }
      })
      .catch(function (error) {
        notification['error']({
          message: 'You have already savedmaxWidth this course.'
        });
      }); W
  };

  handleSaveFail = () => {
    console.log('fail');

    notification['error']({
      message: 'Please login before enroll.'
    });
  };


  render() {
    const { id, name, description, image } = this.props.info;
    const { enrolled } = this.props;
    console.log(this.props);

    return (
      <div>
        <Paper
          style={{
            height: '10vh',
            position: 'relative',
            background: '#d0b808',
            margin: '2px auto 0px auto'
          }}>
          <Typography
            style={{
              color: '#2F4F4F',
              top: '50%',
              left: '50%',
              marginRight: '-50%',
              transform: 'translate(-50%,-50%)',
              position: 'absolute',
              fontWeight: 'Bold',
              textTransform: 'uppercase'
            }}
            variant="h1">
            {name}
          </Typography>
        </Paper>

        <div
          style={{
            backgroundColor: '#eaded3'
          }}>
          <Container>
            <Grid container className="headerDescription" spacing={1}>
              <Grid item className="listItemLeft" xs={6}>
                <img
                  className="courseProviderLogo"
                  src={image}
                  alt="course logo"
                  width="500px"
                />
              </Grid>
              <Grid item className="listItemRight" xs={6}>
                <div className="courseInformation">
                  <h2
                    className="courseTitle"
                    style={{ wordBreak: 'break-word' }}>
                    {name}
                  </h2>
                  <p className="courseDescription">{description}</p>
                </div>
                <div className="courseEnroll">
                  <Grid container spacing={3}>
                    <Grid item xs={3}>
                      {!enrolled ? (<Button
                        size="large"
                        className="enrollButton"
                        onClick={() => {
                          this.state.isLogin
                            ? this.handleEnroll(id)
                            : this.handleEnrollFail();
                        }}
                        style={{ backgroundColor: '#D0B808', color: 'white' }}>
                        Enroll Now

                      </Button>) : (<Button
                          size="large"
                          className="enrollButton"
                          onClick={(id) => {
                            this.handRedirectToPage(id)
                          }}
                          style={{ backgroundColor: '#D0B808', color: 'white' }}>
                          Start


                      </Button>)}

                    </Grid>
                    <Grid item xs={3}>
                      <Button
                        size="large"
                        className="enrollButton"
                        onClick={() => {
                          this.state.isLogin
                            ? this.handleSave(id)
                            : this.handleSaveFail();
                        }}
                        style={{ backgroundColor: '#D0B808', color: 'white' }}>
                        Save Course
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    );
  }
}

export default Detailheader;
