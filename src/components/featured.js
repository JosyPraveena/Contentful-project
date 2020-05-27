import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import Grid from "@material-ui/core/Grid";
import ProductCard from "./productCard";
import { Route, Switch, Link, useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	tabContainer: {
		marginLeft: "auto",
	},

	tab: {
		fontSize: "2rem",
		minWidth: 10,
		fontFamily: "Bangers",

		marginLeft: "75px",
		color: "#294A55",
		textDecoration: "none",
	},

	containerHeader: {
		fontSize: "5rem",
		fontFamily: "Bangers",
		marginBottom: "40px",
		textAlign: "center",
		// "&:hover": {
		// 	background: "#f00",
		// },
	},

	containerText: {
		fontSize: "1.5rem",
		fontFamily: "Roboto",
		marginBottom: "40px",
		color: "#333533",
		textAlign: "center",
		margin: "auto",
		width: "50%",
	},

	padding: {
		marginBottom: "50px",
		marginTop: "50px",
	},
}));

// const FeaturedSlider = () => {
// 	let { slug } = useParams();
// 	return slug;
// };

const Featured = ({ comics, mugs, shirts }) => {
	const classes = useStyles();
	const [value, setValue] = useState(0);

	const sliderPictures = [shirts, comics, mugs];

	console.log(sliderPictures);

	const handleChange = (e, value) => {
		setValue(value);
	};

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 2,
	};

	return (
		<React.Fragment>
			<Grid container justify='center' direction='column'>
				<Grid item>
					<Typography className={classes.containerHeader}>
						Official Merchandise
					</Typography>
				</Grid>
				<Grid item>
					<Typography variant='body1' className={classes.containerText}>
						{" "}
						Mama mia! Our official Nintendo merchandise collection is here,
						featuring all your favourite characters like Mario, Luigi, Donkey
						Kong, Zelda and more!
					</Typography>
				</Grid>

				<Grid item container justify='center'>
					<Tabs value={value} onChange={handleChange}>
						<Tab className={classes.tab} label='Shirts' component={Link}></Tab>
						<Tab className={classes.tab} label='Comics' component={Link}></Tab>

						<Tab className={classes.tab} label='Mugs' component={Link}></Tab>
					</Tabs>
				</Grid>
			</Grid>
			{!sliderPictures && (
				<Slider {...settings}>
					{sliderPictures[value].map((item) => (
						<div>
							<ProductCard data={item} />
						</div>
					))}
				</Slider>
			)}
		</React.Fragment>
	);
};

export default Featured;
