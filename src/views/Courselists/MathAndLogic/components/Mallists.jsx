import React from 'react';
import axios from 'axios';
import { MemoryRouter as Router } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Container, Link } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

// const useStyles = makeStyles({
//   card: {
//     maxWidth: 300,
//     Height: 200
//   },
//   cardContent: {
//     marginLeft: '40px'
//   },
//   courseList: {
//     paddingBottom: '60px',
//     paddingLeft: '120px'
//   },
//   link: {
//     textDecoration: 'none',
//     '&hover': {
//       textDecoration: 'none'
//     }
//   }
// });
// const classes = useStyles();
let id;
export default class MalCourses extends React.Component {
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
    let link = 'http://192.168.1.6:8080/course/' + id;
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

  renderItem(item) {
    const { id, name, short_desc, image } = item;
    return (
      <div className="col-4" style={{ paddingTop: '35px' }}>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
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
      <div>
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
              <div
                className="row"
                style={{ marginTop: '15px', padding: 'auto' }}>
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
