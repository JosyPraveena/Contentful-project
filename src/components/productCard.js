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
	console.log(data);
	if (data.shirt_id) {
		return (
			<div className={classes.root}>
				<Grid container direction='row'>
					<Link
						style={{ textDecoration: "none" }}
						to={`/category/id/${data.shirt_slugs}`}
						key={data.shirt_id}
					>
						<Card className={(classes.root, classes.card, classes.cardHover)}>
							<CardMedia>
								<img className={classes.image} src={data.shirt_image}></img>
							</CardMedia>
							<CardContent>
								<Rating name='read-only' value={data.shirt_rating} readOnly />
								<Typography gutterBottom variant='h6'>
									{data.shirt_title}
								</Typography>
								<Typography variant='body1'>{data.shirt_category}</Typography>
								<Typography variant='body1'>${data.shirt_price}</Typography>
							</CardContent>
						</Card>
					</Link>
				</Grid>
			</div>
		);
	}

	if (data.book_id) {
		return (
			<div className={classes.root}>
				<Grid container direction='row'>
					<Link
						style={{ textDecoration: "none" }}
						to={`/category/id/${data.book_slugs}`}
						key={data.book_id}
					>
						<Card className={(classes.root, classes.card, classes.cardHover)}>
							<CardMedia>
								<img className={classes.image} src={data.book_image}></img>
							</CardMedia>
							<CardContent>
								<Rating name='read-only' value={data.book_rating} readOnly />
								<Typography gutterBottom variant='h6'>
									{data.book_title}
								</Typography>
								<Typography variant='body1'>{data.book_category}</Typography>
								<Typography variant='body1'>${data.book_price}</Typography>
							</CardContent>
						</Card>
					</Link>
				</Grid>
			</div>
		);
	}

	if (data.mug_id) {
		return (
			<div className={classes.root}>
				<Grid container direction='row'>
					<Link
						style={{ textDecoration: "none" }}
						to={`/category/id/${data.mug_slugs}`}
						key={data.mug_id}
					>
						<Card className={(classes.root, classes.card, classes.cardHover)}>
							<CardMedia>
								<img className={classes.image} src={data.mug_image}></img>
							</CardMedia>
							<CardContent>
								<Rating name='read-only' value={data.mug_rating} readOnly />
								<Typography gutterBottom variant='h6'>
									{data.mug_title}
								</Typography>
								<Typography variant='body1'>{data.mug_category}</Typography>
								<Typography variant='body1'>${data.mug_price}</Typography>
							</CardContent>
						</Card>
					</Link>
				</Grid>
			</div>
		);
	}
};

export default ProductCard;
