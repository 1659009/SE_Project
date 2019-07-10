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

const useStyles = makeStyles({
  card: {
    maxWidth: 300
  },
  cardContent: {
    marginLeft: '40px'
  }
});

export default function ImgMediaCard(props) {
  const classes = useStyles();
  const { data } = props;
  console.log(props);
  return (
    <div className="container">
      <div className="row" style={{ marginTop: '25px', padding: 'auto' }}>
        {data.map(data => {
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
                      {data.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p">
                      {data.content}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Enroll
                  </Button>
                  <Button size="small" color="primary">
                    View
                  </Button>
                </CardActions>
              </Card>
            </div>
          );
        })}
        {/* <Container style={{ marginTop: '10vh' }}>
        <Grid container spacing={1} className={classes.cardContent}>
          <Grid item xs>
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
                    Lorem Ipsum
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam vitae rutrum leo. Proin viverra ultrices eleifend.
                    Suspendisse vitae scelerisque justo. Suspendisse mollis elit
                    vel quam sollicitudin dictum.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Enroll
                </Button>
                <Button size="small" color="primary">
                  View
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs>
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
                    Lorem Ipsum
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam vitae rutrum leo. Proin viverra ultrices eleifend.
                    Suspendisse vitae scelerisque justo. Suspendisse mollis elit
                    vel quam sollicitudin dictum.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Enroll
                </Button>
                <Button size="small" color="primary">
                  View
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs>
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
                    Lorem Ipsum
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam vitae rutrum leo. Proin viverra ultrices eleifend.
                    Suspendisse vitae scelerisque justo. Suspendisse mollis elit
                    vel quam sollicitudin dictum.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Enroll
                </Button>
                <Button size="small" color="primary">
                  View
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Container style={{ marginTop: '10vh' }}>
        <Grid container spacing={1} className={classes.cardContent}>
          <Grid item xs>
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
                    Lorem Ipsum
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam vitae rutrum leo. Proin viverra ultrices eleifend.
                    Suspendisse vitae scelerisque justo. Suspendisse mollis elit
                    vel quam sollicitudin dictum.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Enroll
                </Button>
                <Button size="small" color="primary">
                  View
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs>
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
                    Lorem Ipsum
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam vitae rutrum leo. Proin viverra ultrices eleifend.
                    Suspendisse vitae scelerisque justo. Suspendisse mollis elit
                    vel quam sollicitudin dictum.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Enroll
                </Button>
                <Button size="small" color="primary">
                  View
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs>
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
                    Lorem Ipsum
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam vitae rutrum leo. Proin viverra ultrices eleifend.
                    Suspendisse vitae scelerisque justo. Suspendisse mollis elit
                    vel quam sollicitudin dictum.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Enroll
                </Button>
                <Button size="small" color="primary">
                  View
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container> */}
      </div>
    </div>
  );
}
