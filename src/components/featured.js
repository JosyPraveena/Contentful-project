import React from "react";

import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import Grid from "@material-ui/core/Grid";
import ProductCard from "./productCard";
import { Route, Switch, Link, useParams } from "react-router-dom";
import { useMediaQuery } from "@material-ui/core";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
import Skeleton from "@material-ui/lab/Skeleton";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
	tabContainer: {
		marginLeft: "auto",
		marginBottom: "30px",
	},

	tab: {
		fontSize: "2.3rem",
		minWidth: 10,
		fontFamily: "Bangers",
		marginLeft: "75px",

		color: "#294A55",
		textDecoration: "none",
		[theme.breakpoints.down(700)]: {
			fontSize: "1.7rem",
			marginLeft: "0px",
			marginRight: "20px",
		},
	},

	containerHeader: {
		fontSize: "5rem",
		fontFamily: "Bangers",
		marginBottom: "40px",
		textAlign: "center",
		[theme.breakpoints.down(700)]: {
			fontSize: "3.5rem",
		},
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
		[theme.breakpoints.down(700)]: {
			fontSize: "1.3rem",
		},
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

	const handleChange = (e, value) => {
		setValue(value);
	};

	const responsive = {
		0: { items: 1 },
		720: { items: 2 },
		1075: { items: 3 },
		1445: { items: 4 },
		1775: { items: 5 },
	};

	const onSlideChange = (e) => {
		console.debug("Item`s position during a change: ", e.item);
		console.debug("Slide`s position during a change: ", e.slide);
	};

	const onSlideChanged = (e) => {
		console.debug("Item`s position after changes: ", e.item);
		console.debug("Slide`s position after changes: ", e.slide);
	};

	const large = useMediaQuery("(max-width: 1770px)");
	const medium = useMediaQuery("(max-width: 1425px)");
	const small = useMediaQuery("(max-width: 1075px)");
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
						<Tab
							className={classes.tab}
							style={{ marginLeft: "none" }}
							label='Shirts'
							component={Link}
						></Tab>
						<Tab className={classes.tab} label='Comics' component={Link}></Tab>

						<Tab className={classes.tab} label='Mugs' component={Link}></Tab>
					</Tabs>
				</Grid>
			</Grid>
			{sliderPictures[value].length > 1 ? (
				<AliceCarousel
					items={sliderPictures[value].map((item) => (
						<ProductCard data={item} />
					))}
					dotsDisabled
					fadeOutAnimation={true}
					mouseTrackingEnabled={true}
					onSlideChange={onSlideChange}
					onSlideChanged={onSlideChanged}
					responsive={responsive}
					buttonsDisabled
				/>
			) : (
				<React.Fragment>{/* <Skeleton> </Skeleton> */}</React.Fragment>
			)}
		</React.Fragment>
	);
};

export default Featured;
