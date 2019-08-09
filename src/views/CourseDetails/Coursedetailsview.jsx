import React, { Component } from 'react';
import axios from 'axios';
import Topbar from '../../layouts/Homepage/Homepage';
import Footer from '../../layouts/Homepage/components/Footer/Footer';
import DetailCategory from './DetailCategory';
import Recommendview from './Recommedview';
import './style.css';
import { Api } from 'constants/api';
import { Link } from 'react-router-dom';
import {
  Paper,
  Grid,
  Breadcrumbs,
  Typography,
  Button,
  Container
} from '@material-ui/core';
import { notification } from 'antd';
let course_id, user_id;
export default class Coursedetailsview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {},
      isEnrolled: false,
      course_id: 0,
      user_id: localStorage.getItem('user_id'),
      isLogin: localStorage.getItem('isLogin')
    };
  }
  componentWillMount() {
    course_id = window.location.search.split('=')[1];
    user_id = localStorage.getItem('user_id');
  }

  handleEnroll = course_id => {
    let link = Api.link + 'enroll';
    let id = axios
      .post(link, {
        course_id: parseInt(course_id),
        user_id: parseInt(this.state.user_id)
      })
      .then(response => {
        console.log(response);
        if (response.status == 200) {
          notification['success']({
            message: 'Enroll success.'
          });
          this.getCourseById();
        }
      })
      .catch(function(error) {
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
        course_id: parseInt(course_id)
      })
      .then(response => {
        console.log(response);
        if (response.status == 200) {
          notification['success']({
            message: 'Save course success.'
          });
        }
      })
      .catch(function(error) {
        notification['error']({
          message: 'You have already savedmaxWidth this course.'
        });
      });
  };

  handleSaveFail = () => {
    console.log('fail');

    notification['error']({
      message: 'Please login before enroll.'
    });
  };

  handRedirectToPage = () => {
    window.location.replace('/course-lesson?id=' + course_id);
  };

  getCourseById = () => {
    let link =
      Api.link + 'course-detail?course_id=' + course_id + '&user_id=' + user_id;
    axios
      .get(link)
      .then(response => {
        if (response.status === 200) {
          console.log(response.data);
          this.setState({
            info: response.data.course_detail,
            isEnrolled: response.data.isEnrolled
          });
        }
      })
      .catch(function(error) {});
  };

  componentDidMount() {
    this.getCourseById();
  }

  render() {
    const { name, image, description } = this.state.info;
    const { isEnrolled } = this.state;
    return (
      <div id="detail-course">
        <Topbar />
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
                        {!isEnrolled ? (
                          <Button
                            size="large"
                            className="enrollButton"
                            onClick={() => {
                              this.state.isLogin
                                ? this.handleEnroll(course_id)
                                : this.handleEnrollFail();
                            }}
                            style={{
                              backgroundColor: '#D0B808',
                              color: 'white'
                            }}>
                            Enroll Now
                          </Button>
                        ) : (
                          <Button
                            size="large"
                            className="enrollButton"
                            style={{
                              backgroundColor: '#D0B808',
                              color: 'white'
                            }}>
                            <Link
                              to={`/course-lesson?id=${course_id}`}
                              style={{
                                textDecoration: 'none',
                                color: 'white'
                              }}>
                              Start
                            </Link>
                          </Button>
                        )}
                      </Grid>
                      <Grid item xs={3}>
                        <Button
                          size="large"
                          className="enrollButton"
                          onClick={() => {
                            this.state.isLogin
                              ? this.handleSave(course_id)
                              : this.handleSaveFail();
                          }}
                          style={{
                            backgroundColor: '#D0B808',
                            color: 'white'
                          }}>
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
        <DetailCategory info={this.state.info} />
        <Recommendview />
        <Footer />
      </div>
    );
  }
}
