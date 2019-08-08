import React, { Component } from 'react';
import { Table, Divider, Tag, Icon } from 'antd';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core';

let index = 0;
class AccountTable extends Component {
  constructor(props) {
    super(props);
  }

  renderItems = (item, index) => {
    const { id, name, image } = item;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{name}</td>
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
            <th scope="col">#</th>
            <th scope="col">Name</th>
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

export default AccountTable;
