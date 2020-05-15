import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

// m-UI-cards
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';

// images
import cat_comics from '../img/cat_comics.jpg'
import cat_mugs from '../img/cat_mugs.jpg'
import cat_shirts from '../img/cat_tshirts.jpg'

// import { Link, Route, Switch } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: 450,
  },
});

export default function Categories() {
  const classes = useStyles();

  return (
      <>

    <div className="headline">
      <Typography variant="h3" gutterBottom>
        BROWSE CATEGORIES
      </Typography></div>
    

    <div className="cat-container">
        <div className="cat-item"><Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="300"
          image={cat_shirts}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            T-SHIRTS
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Dress like a superhero
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card></div>
        <div className="cat-item"><Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="300"
          image={cat_mugs}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">          
          MUGS
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Enjoy a coffee with your favourite character
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card></div>
        <div className="cat-item">
            <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="300"
          image={cat_comics}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            COMICS
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Dive into a new world full of action and adventures
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card></div>
    </div>
    </>
  );
}