import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { CardMedia } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const useStyles = makeStyles({
	root: {
		marginTop: "30px",
		maxWidth: 400,
		textAlign: "center",
		paddingTop: "20px",
		marginLeft: "20px",
		marginBottom: "40px",
	},

	card: {
		transition: "all 0.3s ease-out",
	},

	cardHover: {
		"&:hover": {
			transition: "all 0.1s ease-in",
			border: "solid 1px #e62429",
			zIndex: "100",
			"& $image": {
				opacity: 1,
			},
		},
	},

	image: {
		width: "100%",
		height: "auto",
		display: "block",
		paddingTop: "20px",
		opacity: 0.5,
		transition: "all 0.4 ease",
	},
});

const CategoryCard = ({ data }) => {
	console.log(data);
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Grid container direction='row'>
				<Card className={(classes.root, classes.card, classes.cardHover)}>
					<CardMedia>
						<img className={classes.image} src={data}></img>
					</CardMedia>
					<CardContent>
						<Typography gutterBottom variant='h6'>
							The Mandalorian Poster Women's T-Shirt - Black
						</Typography>
						<Typography variant='body1'>{data.fields.shirtCategory}</Typography>
						<Typography variant='body1'>{data.fields.shirtPrice}</Typography>
					</CardContent>
				</Card>
			</Grid>
		</div>
	);
};

export default CategoryCard;
