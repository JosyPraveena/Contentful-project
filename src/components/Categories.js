import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// m-UI-cards
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import Container from "@material-ui/core/Container";

// images
import cat_comics from "../img/cat_comics.jpg";
import cat_mugs from "../img/cat_mugs.jpg";
import cat_shirts from "../img/cat_tshirts.jpg";

// import { Link, Route, Switch } from "react-router-dom";

const useStyles = makeStyles({
	root: {
		maxWidth: 350,
	},

	title: {
		fontFamily: "Bangers",
		textAlign: "center",
		marginTop: "100px",
		marginBottom: "50px",
		fontSize: "5rem",
	},

	cardTitle: {
		fontFamily: "Roboto",
	},

	cardRight: {
		transition: "all 0.5s ease-out ",
		zIndex: 1,
	},

	cardRightHover: {
		"&:hover": {
			transform: "scale(1.1) rotate(15deg)",
			transition: "all 0.5s ease-in ",
			boxShadow: "10px 10px 64px -6px rgba(0,0,0,0.65)",
			zIndex: 2,
		},
	},

	cardLeft: {
		transition: "all 0.5s ease-out ",
		zIndex: 1,
	},

	cardLeftHover: {
		"&:hover": {
			transform: "scale(1.1) rotate(-15deg)",
			transition: "all 0.5s ease-in",
			boxShadow: "10px 10px 64px -6px rgba(0,0,0,0.65)",
			zIndex: 2,
		},
	},
});

export default function Categories() {
	const classes = useStyles();

	return (
		<Container>
			<Typography variant='h3' className={classes.title}>
				BROWSE CATEGORIES
			</Typography>

			<div className='cat-container'>
				<div
					className={`cat-item ${classes.cardRight} ${classes.cardRightHover}`}
				>
					<Card className={classes.root}>
						<CardActionArea>
							<CardMedia
								component='img'
								alt='Contemplative Reptile'
								height='300'
								image={cat_shirts}
								title='Contemplative Reptile'
							/>
							<CardContent>
								<Typography gutterBottom variant='h5' component='h2'>
									T-SHIRTS
								</Typography>
								<Typography variant='body2' color='textSecondary' component='p'>
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
					</Card>
				</div>
				<div
					className={`cat-item ${classes.cardLeft} ${classes.cardLeftHover}`}
				>
					<Card className={classes.root}>
						<CardActionArea>
							<CardMedia
								component='img'
								alt='Contemplative Reptile'
								height='300'
								image={cat_mugs}
								title='Contemplative Reptile'
							/>
							<CardContent>
								<Typography gutterBottom variant='h5' component='h2'>
									MUGS
								</Typography>
								<Typography variant='body2' color='textSecondary' component='p'>
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
					</Card>
				</div>
				<div
					className={`cat-item ${classes.cardRight} ${classes.cardRightHover}`}
				>
					<Card className={classes.root}>
						<CardActionArea>
							<CardMedia
								component='img'
								alt='Contemplative Reptile'
								height='300'
								image={cat_comics}
								title='Contemplative Reptile'
							/>
							<CardContent>
								<Typography gutterBottom variant='h5' component='h2'>
									COMICS
								</Typography>
								<Typography variant='body2' color='textSecondary' component='p'>
									Explore a world full of action and adventures
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
					</Card>
				</div>
			</div>
		</Container>
	);
}
