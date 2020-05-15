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
		maxWidth: 500,
		textAlign: "center",
		paddingTop: "20px",
		marginLeft: "20px",
	},

	image: {
		width: "100%",
		height: "auto",
		display: "block",
	},
});

const ProductCard = ({ data }) => {
	const classes = useStyles();
	const items = [1, 2, 3, 4];
	return (
		<div>
			<Grid container direction='row'>
				<Card className={classes.root}>
					<CardMedia>
						<img className={classes.image} src={data}></img>
					</CardMedia>
					<CardContent>
						<Typography gutterBottom variant='h6'>
							The Mandalorian Poster Women's T-Shirt - Black
						</Typography>
						<Typography variant='body1'>Star Wars</Typography>
						<Typography variant='body1'>$15</Typography>
					</CardContent>
				</Card>
			</Grid>
		</div>
	);
};

export default ProductCard;
