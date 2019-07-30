import React, { Component } from 'react';
import {
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Container
} from '@material-ui/core';
import './style.css';

export default class DetailCategory extends Component {
  render() {
    const { duration, number_of_course, lecturer, rating } = this.props.info;
    return (
      <div>
        <Paper
          style={{
            height: '6vh',
            position: 'relative',
            background: '#d0b808'
          }}>
          <Typography
            style={{
              color: '#2F4F4F',
              top: '50%',
              left: '50%',
              marginRight: '-50%',
              transform: 'translate(-50%,-50%)',
              position: 'absolute',
              fontWeight: 'Bold'
            }}
            variant="h1">
            DETAILS
          </Typography>
        </Paper>
        <Paper className="courseCategory">
          <Table>
            <TableBody
              className="categoryBody"
              style={{ backgroundColor: '#eaded3' }}>
              <TableRow>
                <TableCell className="categoryHeader" component="th">
                  Duration
                </TableCell>
                <TableCell className="categoryInformation">
                  {duration}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="categoryHeader" component="th">
                  # of lesson
                </TableCell>
                <TableCell className="categoryInformation">
                  {number_of_course}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="categoryHeader" component="th">
                  Teacher
                </TableCell>
                <TableCell className="categoryInformation">
                  {lecturer}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="categoryHeader" component="th">
                  Course Type
                </TableCell>
                <TableCell className="categoryInformation">Video</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="categoryHeader" component="th">
                  Rating
                </TableCell>
                <TableCell className="categoryInformation">{rating}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}
