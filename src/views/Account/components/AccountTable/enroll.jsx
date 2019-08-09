import React, { Component } from 'react';
import { Table, Divider, Tag, Icon } from 'antd';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Api } from 'constants/api';

import axios from 'axios';
let index = 0;
class AccountTableEnroll extends Component {
  constructor(props) {
    super(props);
  }

  handleCancel = course_id => {
    let link = Api.link + 'cancel-enroll';
    let user_id = localStorage.getItem('user_id');
    axios
      .delete(link, {
        params: {
          user_id: user_id,
          course_id: course_id
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

  renderItems = (item, index) => {
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
            onClick={this.handleCancel(id)}>
            <Icon type="close" style={{ fontSize: '25px' }} />
          </button>
        </td>
      </tr>
    );
  };

  render() {
    const { course } = this.props || [];
    return (
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
          {course ? (
            course.map((item, index) => {
              return this.renderItems(item, index);
            })
          ) : (
            <tr>No course</tr>
          )}
        </tbody>
      </table>
    );
  }
}

export default AccountTableEnroll;
