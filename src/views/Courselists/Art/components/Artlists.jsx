import React from 'react';
import axios from 'axios';
import { Redirect, withRouter } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Container, Link } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { Api } from 'constants/api';
let id;
class ArtCourses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      topic: '',
      isLoading: true
    };
  }
  componentWillMount() {
    id = window.location.href.split('/')[4];
  }
  componentDidMount() {
    let link = Api.link + 'course/' + id;
    console.log(link);

    axios
      .get(link, {})
      .then(response => {
        if (response.status === 200) {
          console.log('success');
          this.setState({
            list: response.data.course_list,
            topic: response.data.course_topic,
            isLoading: false
          });
        }
      })
      .catch(function(error) {});
  }

  forceUpdateHandler = () => {
    this.forceUpdate();
  };

  handleCourseDetail = id => {
    const { history } = this.props;
    const link = '/course-detail?id=' + id;
    history.push(link);
    // return <Redirect to={`/course-detail?id=${id}`}> </Redirect>;
  };

  renderItem(item, history) {
    const { id, name, short_desc, image } = item;
    return (
      <div className="col-4" style={{ marginTop: '35px', height: '300px' }}>
        <Card
          style={{ height: '100%' }}
          onClick={() => {
            this.handleCourseDetail(id);
          }}>
          <CardActionArea style={{ height: '100%' }}>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="200"
              image={image}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {short_desc}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    );
  }

  render() {
    const { isLoading, list, topic } = this.state;
    console.log(this.state);
    return (
      <div
        style={{
          backgroundColor: '#eaded3'
        }}>
        {isLoading ? (
          <div style={{ textAlign: 'center' }}>Loading...</div>
        ) : (
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
                {topic}
              </Typography>
            </Paper>
            <Container>
              <div className="row" style={{ padding: 'auto' }}>
                {list.map(item => {
                  return this.renderItem(item);
                })}
              </div>
            </Container>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(ArtCourses);
