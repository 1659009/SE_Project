import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  card: {
    maxWidth: 300,
    Height: 200
  },
  cardContent: {
    marginLeft: '40px'
  },
  courseList: {
    paddingBottom: '60px',
    paddingLeft: '120px',
    backgroundColor: '#eaded3'
  }
});

export default function RecommendCourse(props) {
  const classes = useStyles();
  const { recommendCourse } = props;
  console.log(props);
  return (
    <div>
      <Container
        style={{
          paddingBottom: '0px'
        }}>
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
            RECOMMENDED COURSE
          </Typography>
        </Paper>
        <Container
          className={classes.courseList}
          style={{ marginTop: '-22px', paddingLeft: '77px' }}>
          <div className="row" style={{ marginTop: '25px', padding: 'auto' }}>
            {recommendCourse.map(recommendCourse => {
              return (
                <div className="col-4" style={{ paddingTop: '20px' }}>
                  <Card className={classes.card}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image="https://ak0.picdn.net/shutterstock/videos/8911510/thumb/1.jpg"
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {recommendCourse.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p">
                          {recommendCourse.content}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </div>
              );
            })}
          </div>
        </Container>
      </Container>
    </div>
  );
}
