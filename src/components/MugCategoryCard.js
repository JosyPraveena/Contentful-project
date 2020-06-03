import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { CardMedia } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import FadeIn from "react-fade-in";

import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles({
	cardSize: {
		transition: "all 0.7s ease",
		width: "80%",
		height: "700px",
		margin: "20px",
		textAlign: "center",
		"&:hover": {
			height: "750px",
			"& $buyBtn": {
				marginTop: "20px",
				opacity: "1",
				transform: "translateY(0px)",
			},
			"& $media": {
				boxShadow: "inset 0px 1px 35px rgba(230, 36, 41, 0.3)",
			},
		},
		display: "relative",
	},

	buyBtn: {
		marginTop: "0px",
		margin: "auto",
		width: "150px",
		padding: "15px",
		background: "#e62429",
		color: "#fff",
		fontFamily: "Bangers",
		fontSize: "1.5rem",
		borderRadius: "5px",
		opacity: "0",
		transform: "translateY(100px)",
		transition: "all 0.5s ease",
		boxShadow: "1px 1px 5px rgba(0,0,0,0.4)",
	},

	title: {
		fontWeight: "600",
		fontSize: "1.4rem",
		fontFamily: "Roboto",
		// textTransform: "uppercase",
		lineHeight: "1.1",
	},

	price: {
		fontSize: "1.1rem",
		marginTop: "10px",
	},

	media: {
		height: "250px",
		paddingTop: "56.25%", // 16:9
		boxShadow: "inset 0px 1px 8px rgba(0,0,0,0.1)",
		transition: "all 0.5s ease",
		marginBottom: "15px",
	},
});

const CategoryCard = ({ data }) => {
	const classes = useStyles();
	return (
		<FadeIn>
			<Grid container justify='center'>
				<Card className={classes.cardSize}>
					<CardMedia className={classes.media} image={data.mug_image} />
					<CardContent>
						<Rating name='read-only' defaultValue={data.mug_rating} />
						<Typography variant='body1'>{data.mug_category}</Typography>
						<Typography className={classes.title} gutterBottom variant='h6'>
							{data.mug_title}
						</Typography>

						<Typography className={classes.price} variant='body1'>
							€{data.mug_price}
						</Typography>
					</CardContent>
					<div className={classes.buyBtn}>Shop Now</div>
				</Card>
			</Grid>
		</FadeIn>
	);
};

export default CategoryCard;
