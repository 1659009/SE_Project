import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './style.css';
import { Tabs, Radio, Icon, notification } from 'antd';
import { Link } from 'react-router-dom';

import {
  AccountDetails,
  AccountProfile,
  AccountTableEnroll,
  AccountTableSave
} from 'views/Account/components';
import { Grid } from '@material-ui/core';
import { Api } from 'constants/api';

import axios from 'axios';
const { TabPane } = Tabs;

export default class SlidingTabsDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'left',
      savedCourse: [],
      enrolledCourse: []
    };
  }

  handleModeChange = e => {
    const mode = e.target.value;
    this.setState({ mode });
  };

  componentDidMount() {
    this.getEnrolledCourse();
    this.getSavedCourse();
  }

  getEnrolledCourse = () => {
    let link = Api.link + 'get-enroll-course';
    let user_id = localStorage.getItem('user_id');
    axios
      .get(link, {
        params: {
          user_id: user_id
        }
      })
      .then(response => {
        if (response.status === 200) {
          console.log('success');
          this.setState({
            enrolledCourse: response.data.course_list
          });
        }
      })
      .catch(function(error) {});
  };

  getSavedCourse = () => {
    let link = Api.link + 'get-saved-course';
    let user_id = localStorage.getItem('user_id');
    axios
      .get(link, {
        params: {
          user_id: user_id
        }
      })
      .then(response => {
        if (response.status === 200) {
          console.log('success');
          this.setState({
            savedCourse: response.data.course_list
          });
        }
      })
      .catch(function(error) {});
  };

  renderEnroll = (item, index) => {
    const { id, name, image } = item;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>
          <Link to={`/course-lesson?id=${id}`} style={{ color: '#2F4F4F' }}>
            {name}
          </Link>
        </td>
        <td>
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => this.handleCancelEnroll(id)}>
            <Icon type="close" style={{ fontSize: '25px' }} />
          </button>
        </td>
      </tr>
    );
  };

  handleCancelEnroll = course_id => {
    let link = Api.link + 'cancel-enroll';
    let user_id = localStorage.getItem('user_id');
    axios
      .delete(link, {
        data: {
          user_id: parseInt(user_id),
          course_id: course_id
        }
      })
      .then(response => {
        notification['success']({
          message: 'Cancel enroll success.'
        });
        this.getEnrolledCourse();
      })
      .catch(function(error) {
        notification['error']({
          message: 'Cancel fail. Please try again.'
        });
      });
  };

  renderSave = (item, index) => {
    const { id, name, image } = item;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>
          <Link to={`/course-lesson?id=${id}`} style={{ color: '#2F4F4F' }}>
            {name}
          </Link>
        </td>
        <td>
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => this.handleCancelSave(id)}>
            <Icon type="close" style={{ fontSize: '25px' }} />
          </button>
        </td>
      </tr>
    );
  };

  handleCancelSave = course_id => {
    let link = Api.link + 'delete-save';
    let user_id = localStorage.getItem('user_id');
    axios
      .delete(link, {
        data: {
          user_id: parseInt(user_id),
          course_id: course_id
        }
      })
      .then(response => {
        notification['success']({
          message: 'Delete saved course success.'
        });
        this.getSavedCourse();
      })
      .catch(function(error) {
        notification['error']({
          message: 'Delete fail. Please try again.'
        });
      });
  };

  render() {
    const { mode, enrolledCourse, savedCourse } = this.state;
    console.log(this.state);

    return (
      <div>
        <Tabs
          className="tabSection"
          defaultActiveKey="1"
          tabPosition={mode}
          style={{ height: '70vh' }}>
          <TabPane tab="Profile" key={1}>
            <Grid
              container
              spacing={4}
              style={{ height: '70vh', padding: '50px 100px' }}>
              <Grid item lg={4} md={6} xl={4} xs={12}>
                <AccountProfile />
              </Grid>
              <Grid item lg={8} md={6} xl={8} xs={12}>
                <AccountDetails />
              </Grid>
            </Grid>
          </TabPane>
          <TabPane tab="Enrolled" key={2}>
            <table className="table" style={{ fontSize: '20px' }}>
              <thead>
                <tr>
                  <th scope="col" style={{ width: '103px' }}>
                    #
                  </th>
                  <th scope="col" style={{ width: '659px' }}>
                    Name
                  </th>
                  <th scope="col" />
                </tr>
              </thead>
              <tbody>
                {this.state.enrolledCourse ? (
                  this.state.enrolledCourse.map((item, index) => {
                    return this.renderEnroll(item, index);
                  })
                ) : (
                  <tr>No course</tr>
                )}
              </tbody>
            </table>
          </TabPane>
          <TabPane tab="Saved" key={3}>
            <table className="table" style={{ fontSize: '20px' }}>
              <thead>
                <tr>
                  <th scope="col" style={{ width: '103px' }}>
                    #
                  </th>
                  <th scope="col" style={{ width: '659px' }}>
                    Name
                  </th>
                  <th scope="col" />
                </tr>
              </thead>
              <tbody>
                {this.state.savedCourse ? (
                  this.state.savedCourse.map((item, index) => {
                    return this.renderSave(item, index);
                  })
                ) : (
                  <tr>No course</tr>
                )}
              </tbody>
            </table>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
