import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { CardMedia, useMediaQuery } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import { Link } from "react-router-dom";

import FadeIn from "react-fade-in";

const useStyles = makeStyles((theme) => ({
	cardSize: {
		transition: "all 0.7s ease",
		width: "80%",
		height: "650px",
		margin: "20px",
		textAlign: "center",
		animation: `$moveInLeft 1s ${theme.transitions.easing.easeInOut}`,
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
		fontSize: "1.3rem",
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

	"@keyframes moveInLeft": {
		"0%": {
			opacity: 0,
		},

		"100%": {
			opacity: 1,
		},
	},
}));

const ProductCard = ({ data }) => {
	const classes = useStyles();
	const large = useMediaQuery("(max-width: 1770px)");
	const medium = useMediaQuery("(max-width: 1425px)");
	const small = useMediaQuery("(max-width: 1075px)");

	console.log(data);
	if (data.shirt_id) {
		return (
			<FadeIn>
				<Link
					style={{ textDecoration: "none" }}
					to={`/category/shirt/${data.shirt_slugs}`}
					key={data.shirt_id}
				>
					<Card className={classes.cardSize}>
						<CardMedia
							className={classes.media}
							image={data.shirt_image}
						></CardMedia>

						<CardContent style={{ marginTop: "20px", height: "150px" }}>
							<Rating name='read-only' defaultValue={data.shirt_rating} />
							<Typography variant='body1'>{data.shirt_category}</Typography>
							<Typography className={classes.title} gutterBottom variant='h6'>
								{data.shirt_title}
							</Typography>

							<Typography className={classes.price} variant='body1'>
								${data.shirt_price}
							</Typography>
						</CardContent>
						<div className={classes.buyBtn}>Shop Now</div>
					</Card>
				</Link>
			</FadeIn>
		);
	}

	if (data.book_id) {
		return (
			<FadeIn>
				<Link
					style={{ textDecoration: "none" }}
					to={`/category/book/${data.book_slugs}`}
					key={data.book_id}
				>
					<Card className={classes.cardSize}>
						<CardMedia
							className={classes.media}
							image={data.book_image}
						></CardMedia>
						<CardContent>
							<Rating name='read-only' defaultValue={data.book_rating} />
							<Typography variant='body1'>{data.book_category}</Typography>
							<Typography className={classes.title} gutterBottom variant='h6'>
								{data.book_title}
							</Typography>
							<Typography variant='body1'>{data.book_category}</Typography>
							<Typography className={classes.price} variant='body1'>
								${data.book_price}
							</Typography>
						</CardContent>
						<div className={classes.buyBtn}>Shop Now</div>
					</Card>
				</Link>
			</FadeIn>
		);
	}

	if (data.mug_id) {
		return (
			<FadeIn>
				<Link
					style={{ textDecoration: "none" }}
					to={`/category/mug/${data.mug_slugs}`}
					key={data.mug_id}
				>
					<Card className={classes.cardSize}>
						<CardMedia
							className={classes.media}
							image={data.mug_image}
						></CardMedia>

						<CardContent>
							<Rating name='read-only' defaultValue={data.mug_rating} />
							<Typography variant='body1'>{data.mug_category}</Typography>
							<Typography className={classes.title} gutterBottom variant='h6'>
								{data.mug_title}
							</Typography>

							<Typography className={classes.price} variant='body1'>
								${data.mug_price}
							</Typography>
						</CardContent>
						<div className={classes.buyBtn}>Shop Now</div>
					</Card>
				</Link>
			</FadeIn>
		);
	}
};

export default ProductCard;
