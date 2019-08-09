import React, { Component } from 'react';
import { Table, Divider, Tag, Icon } from 'antd';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

let index = 0;
class AccountTableSave extends Component {
  constructor(props) {
    super(props);
  }

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
          <button type="button" class="btn btn-danger">
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
            <th scope="col" style={{ width: '659px' }}>Name</th>
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

export default AccountTableSave;
