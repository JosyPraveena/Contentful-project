import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { CardMedia, useMediaQuery } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
	cardSize: {
		transition: "all 1s ease",
		minWidth: "350px",
		maxWidth: "350px",
		margin: "20px",
	},

	media: {
		minHeight: "250px",
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

const ProductCard = ({ data }) => {
	const classes = useStyles();
	const large = useMediaQuery("(max-width: 1770px)");
	const medium = useMediaQuery("(max-width: 1425px)");
	const small = useMediaQuery("(max-width: 1075px)");

	if (data.shirt_id) {
		return (
			<React.Fragment>
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
							<Rating name='read-only' value={data.shirt_rating} readOnly />
							<Typography gutterBottom variant='h6'>
								{data.shirt_title}
							</Typography>
							<Typography variant='body1'>{data.shirt_category}</Typography>
							<Typography variant='body1'>${data.shirt_price}</Typography>
						</CardContent>
					</Card>
				</Link>
			</React.Fragment>
		);
	}

	if (data.book_id) {
		return (
			<React.Fragment>
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
							<Rating name='read-only' value={data.book_rating} readOnly />
							<Typography gutterBottom variant='h6'>
								{data.book_title}
							</Typography>
							<Typography variant='body1'>{data.book_category}</Typography>
							<Typography variant='body1'>${data.book_price}</Typography>
						</CardContent>
					</Card>
				</Link>
			</React.Fragment>
		);
	}

	if (data.mug_id) {
		return (
			<React.Fragment>
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
							<Rating name='read-only' value={data.mug_rating} readOnly />
							<Typography gutterBottom variant='h6'>
								{data.mug_title}
							</Typography>
							<Typography variant='body1'>{data.mug_category}</Typography>
							<Typography variant='body1'>${data.mug_price}</Typography>
						</CardContent>
					</Card>
				</Link>
			</React.Fragment>
		);
	}
};

export default ProductCard;
