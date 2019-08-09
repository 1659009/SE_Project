import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Tabs, Radio } from 'antd';
import { Grid, Container, Button, Paper, Typography } from '@material-ui/core';
import './style.css';
import { Api } from 'constants/api';
let id;

const { TabPane } = Tabs;
let course_id, user_id;

export default class Courselearningtabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'left',
      key: 1,
      list: [],
      name: ''
    };
  }

  handleModeChange = e => {
    const mode = e.target.value;
    this.setState({ mode });
  };

  componentWillMount() {
    course_id = window.location.search.split('=')[1];
    user_id = localStorage.getItem('user_id');
  }

  componentDidMount() {
    this.getCourseLesson();
  }

  getCourseLesson = () => {
    let link = Api.link + 'course-lesson?id=' + course_id;
    axios
      .get(link)
      .then(response => {
        console.log(response.data);

        if (response.status === 200) {
          console.log(response.data);
          this.setState({
            list: response.data.course_lesson,
            name: response.data.course_name
          });
        }
      })
      .catch(function(error) {});
  };

  renderItem = (lesson, index, courseName) => {
    const { link } = lesson;
    index++;
    let tabName = 'Lesson #' + index;
    return (
      <TabPane tab={tabName} key={index}>
        <Container>
          <div className="text-center overview">
            <iframe
              width="70%"
              height="500px"
              src={link}
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </Container>
      </TabPane>
    );
  };

  render() {
    const { mode, list, name } = this.state;
    console.log(this.state);

    return (
      <div style={{ backgroundColor: '#eaded3' }}>
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
            {name}
          </Typography>
        </Paper>
        <Tabs
          className="tabSection"
          defaultActiveKey="1"
          tabPosition={mode}
          style={{ height: '70vh' }}>
          {!list ? (
            <TabPane tab="NULL" key={0}>
              <h1>No lesson yet</h1>{' '}
            </TabPane>
          ) : (
            list.map((lesson, index) => {
              return this.renderItem(lesson, index);
            })
          )}
        </Tabs>
      </div>
    );
  }
}
