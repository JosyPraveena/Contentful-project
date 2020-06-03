import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { CardMedia } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles({
	cardSize: {
		transition: "all 1s ease",
		minWidth: "400px",
		margin: "20px",
	},

	media: {
		height: "350px",
		paddingTop: "56.25%", // 16:9
	},

	cardHover: {
		transition: "all 0.5s ease",
		"&:hover": {
			transform: "translateY(-20px)",
			border: "solid 2px #e62429",
			"& $image": {
				opacity: 1,
				transform: "scale(1.02)",
			},
		},
	},
});

const CategoryCard = ({ data }) => {
	const classes = useStyles();
	return (
		<Grid container justify='center'>
			<Card className={classes.cardSize}>
				<CardMedia
					className={classes.media}
					image={data.book_image}
				></CardMedia>
				<CardContent>
					<Rating name='read-only' value={data.book_rating} readOnly />
					<Typography gutterBottom variant='h6'>
						{data.book_title}
					</Typography>
					<Typography variant='body1'>{data.book_category}</Typography>
					<Typography variant='body1'> ${data.book_price}</Typography>
				</CardContent>
			</Card>
		</Grid>
	);
};

export default CategoryCard;
