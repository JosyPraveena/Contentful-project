import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// m-UI-cards
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";

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
		textAlign: "left",
		marginBottom: "20px",
		fontSize: "3rem",
	},

	cardTitle: {
		fontWeight: "700",
		fontSize: "2rem",
		textAlign: "center",
	},

	cardSub: {
		textAlign: "center",
		fonsSize: "1rem",
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

	brands: {
		marginBottom: "30px",
	},

	brandLink: {
		opacity: 0.5,
		transition: "all 0.3s ease-out",
		"&:hover": {
			opacity: 1,
			transform: "translateY(-5px)",
		},
	},
});

export default function Categories() {
	const classes = useStyles();

	return (
		<Container>
			<Typography className={classes.title}>BROWSE CATEGORIES</Typography>
			<Grid container className={classes.brands} justify='center'>
				<Grid item sm={4} lg={2} className={classes.brandLink}>
					<Link>
						<img src='https://s3.thcdn.com/widgets/96-en/16/uni-logo-044231-044516-094513-101816.png' />
					</Link>
				</Grid>
				<Grid item sm={4} lg={2} className={classes.brandLink}>
					<Link>
						<img src='https://s2.thcdn.com/widgets/96-en/16/marvel-logo-010015-094513-101816.png' />
					</Link>
				</Grid>
				<Grid item sm={4} lg={2} className={classes.brandLink}>
					<Link>
						<img src='https://s3.thcdn.com/widgets/96-en/2/Nintendo_Logo_PNG-095602.png' />
					</Link>
				</Grid>
				<Grid item sm={4} lg={2} className={classes.brandLink}>
					<Link>
						<img src='https://s1.thcdn.com/widgets/96-en/16/Disney-logo-044227-044516-094512-101816.png' />
					</Link>
				</Grid>
				<Grid item sm={4} lg={2} className={classes.brandLink}>
					<Link>
						<img src='https://s3.thcdn.com/widgets/96-en/16/180x72-zbox-ch-STARWARS-055736-103822-044516-094512-101816.png' />
					</Link>
				</Grid>
				<Grid sm={4} lg={2} className={classes.brandLink}>
					<Link>
						<img src='https://s2.thcdn.com/widgets/96-en/16/180x72-zbox-ch-FUNKO-055728-103822-044516-094512-101816.png' />
					</Link>
				</Grid>
			</Grid>
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
								<Typography className={classes.cardTitle}>T-SHIRTS</Typography>
								<Typography color='textSecondary' className={classes.cardSub}>
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
								<Typography className={classes.cardTitle}>MUGS</Typography>
								<Typography color='textSecondary' className={classes.cardSub}>
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
								<Typography className={classes.cardTitle}>COMICS</Typography>
								<Typography color='textSecondary' className={classes.cardSub}>
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
