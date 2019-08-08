import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './style.css';
import { Tabs, Radio } from 'antd';
import {
  AccountDetails,
  AccountProfile,
  AccountTable
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
            <AccountTable course={this.state.enrolledCourse} />
          </TabPane>
          <TabPane tab="Saved" key={3}>
            <AccountTable course={this.state.savedCourse} />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
