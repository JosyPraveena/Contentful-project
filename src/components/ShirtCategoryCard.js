import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { CardMedia } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import Rating from "@material-ui/lab/Rating";

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
		textDecoration: "none",
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
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Grid container direction='row'>
				<Card className={(classes.root, classes.card, classes.cardHover)}>
					<CardMedia>
						<img
							className={classes.image}
							src={data.fields.shirtImage[0].fields.file.url}
						></img>
					</CardMedia>
					<CardContent>
						<Rating name='read-only' value={data.fields.shirtRating} readOnly />
						<Typography gutterBottom variant='h6'>
							{data.fields.shirtTitle}
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
