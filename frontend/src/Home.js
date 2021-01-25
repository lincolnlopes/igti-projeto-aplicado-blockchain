import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Question from './assets/questions.svg'
import Event from './assets/commercial-event.svg'
import Admin from './assets/cogwheel-tools.svg'
import styles from './Home.module.css';
import { Grid } from '@material-ui/core';
import { useNavigate } from 'react-router';




const useStyles = makeStyles({
  root: {
    padding:5,
    margin:10,
    maxWidth: 245,
    textAlign: 'center',
  },
  img: {
    objectFit: 'none !important'
  }
});

const Home = () => {
  
  const navigate = useNavigate();
  const classes = useStyles();

  return (
    <Grid container justify = "center"> 
    
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.img}
          component="img"
          alt="Pautas"
          height="240"
          image={Question}
          title="Pautas"
        />
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => navigate('/issues')}>
          Pautas
        </Button>
      </CardActions>
    </Card>
    
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.img}
          component="img"
          alt="Evento"
          height="240"
          image={Event}
          title="Evento"
        />
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => navigate('/meeting')}>
          Evento
        </Button>
      </CardActions>
    </Card>

    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.img}
          component="img"
          alt="Administração"
          height="240"
          image={Admin}
          title="Administração"
        />
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => navigate('/user')}>
          Administração
        </Button>
      </CardActions>
    </Card>

    </Grid>
  )
}

export default Home
