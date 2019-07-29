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
    return (
      <div>
        <Container>
          <Paper
            style={{
              height: '6vh',
              position: 'relative',
              background: '#d0b808',
              marginTop: '4px'
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
              COURSES
            </Typography>
          </Paper>
          <Paper className="courseCategory">
            <Table>
              <TableBody className="categoryBody">
                <TableRow>
                  <TableCell
                    className="categoryHeader"
                    component="th"
                    scope="row">
                    Duration
                  </TableCell>
                  <TableCell className="categoryInformation">
                    30 hours
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    className="categoryHeader"
                    component="th"
                    scope="row">
                    # of lesson
                  </TableCell>
                  <TableCell className="categoryInformation">15</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    className="categoryHeader"
                    component="th"
                    scope="row">
                    Teacher
                  </TableCell>
                  <TableCell className="categoryInformation">Hai To</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    className="categoryHeader"
                    component="th"
                    scope="row">
                    Course Type
                  </TableCell>
                  <TableCell className="categoryInformation">Video</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    className="categoryHeader"
                    component="th"
                    scope="row">
                    Rating
                  </TableCell>
                  <TableCell className="categoryInformation">4.5/5</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
        </Container>
      </div>
    );
  }
}
