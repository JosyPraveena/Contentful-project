import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { CardMedia } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import { Link } from "react-router-dom";

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
		transition: "all 1s ease",
	},

	image: {
		width: "100%",
		height: "auto",
		display: "block",
		paddingTop: "20px",
		opacity: 0.5,
		transition: "all 0.5s ease",
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

const ProductCard = ({ data }) => {
	const classes = useStyles();
	const { fields: item } = data;

	if (item.shirtId) {
		console.log(item);
		return (
			<div className={classes.root}>
				<Grid container direction='row'>
					<Link
						style={{ textDecoration: "none" }}
						to={`/category/id/${item.shirtSlug}`}
						key={item.shirtId}
					>
						<Card className={(classes.root, classes.card, classes.cardHover)}>
							<CardMedia>
								<img
									className={classes.image}
									src={item.shirtImage[0].fields.file.url}
								></img>
							</CardMedia>
							<CardContent>
								<Rating name='read-only' value={item.shirtRating} readOnly />
								<Typography gutterBottom variant='h6'>
									{item.shirtTitle}
								</Typography>
								<Typography variant='body1'>{item.shirtCategory}</Typography>
								<Typography variant='body1'>{item.shirtPrice}</Typography>
							</CardContent>
						</Card>
					</Link>
				</Grid>
			</div>
		);
	}

	if (item.bookId) {
		console.log(item);
		return (
			<div className={classes.root}>
				<Grid container direction='row'>
					<Link
						style={{ textDecoration: "none" }}
						to={`/category/id/${item.bookSlug}`}
						key={item.bookId}
					>
						<Card className={(classes.root, classes.card, classes.cardHover)}>
							<CardMedia>
								<img
									className={classes.image}
									src={item.bookImage.fields.file.url}
								></img>
							</CardMedia>
							<CardContent>
								<Rating name='read-only' value={item.bookRating} readOnly />
								<Typography gutterBottom variant='h6'>
									{item.bookTitle}
								</Typography>
								<Typography variant='body1'>{item.bookCategory}</Typography>
								<Typography variant='body1'>${item.bookPrice}</Typography>
							</CardContent>
						</Card>
					</Link>
				</Grid>
			</div>
		);
	}

	if (item.mugId) {
		console.log(item);
		return (
			<div className={classes.root}>
				<Grid container direction='row'>
					<Link
						style={{ textDecoration: "none" }}
						to={`/category/id/${item.mugSlug}`}
						key={item.mugId}
					>
						<Card className={(classes.root, classes.card, classes.cardHover)}>
							<CardMedia>
								<img
									className={classes.image}
									src={item.mugImage[0].fields.file.url}
								></img>
							</CardMedia>
							<CardContent>
								<Rating name='read-only' value={item.mugRating} readOnly />
								<Typography gutterBottom variant='h6'>
									{item.mugTitle}
								</Typography>
								<Typography variant='body1'>{item.mugCategory}</Typography>
								<Typography variant='body1'>${item.mugPrice}</Typography>
							</CardContent>
						</Card>
					</Link>
				</Grid>
			</div>
		);
	}
};

export default ProductCard;
