import React, { useEffect, useState } from "react";
import "../App.css";
import { useParams } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Button from "@material-ui/core/Button";
import Rating from "@material-ui/lab/Rating";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Footer from "./Footer";
import { useMediaQuery } from "@material-ui/core";
import parse from "html-react-parser";
import FadeIn from "react-fade-in";
import Box from "@material-ui/core/Box";

// MODAL IMAGE

const rand = () => {
	return Math.round(Math.random() * 20) - 10;
};

// STYLE COMPONENT
const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		paper: {
			padding: theme.spacing(5),
			margin: "50px 50px 50px 50px",
			maxWidth: "100%",
			maxHeight: "100%",
			[theme.breakpoints.down(810)]: {
				padding: "50px",
			},
		},

		// gridContainer: {
		// 	margin: "100px 50px 50px 50px",
		// 	maxWidth: "100%",
		// 	maxHeight: "100%",
		// },
		image: {
			width: "100%",
			height: "auto",
			// overflow: "hidden",
			margin: "auto",
			marginTop: "50px",
		},
		img: {
			maxWidth: "100%",
			maxHeight: "500px",
			borderRadius: "10px",
		},
		productInfo: {
			marginTop: "80px",
			marginLeft: "100px",
			[theme.breakpoints.down(811)]: {
				marginLeft: "0",
				marginTop: "40px",
			},
		},

		title: {
			fontFamily: "Bangers",
			fontSize: "3rem",
			textDecoration: "none",
			width: "80%",
			transition: "all 0.3s ease",

			[theme.breakpoints.down(810)]: {
				textAlign: "center",
				margin: "0, auto",
				width: "100%",
				fontSize: "2.5rem",
			},

			[theme.breakpoints.down(600)]: {
				textAlign: "center",
				margin: "0, auto",
				width: "100%",
				fontSize: "2rem",
			},
		},
		button: {
			width: "250px",
			fontFamily: "Bangers",
			fontSize: "1.5rem",
			textDecoration: "none",
			boxShadow: "2px 2px 20px rgba(0,0,0,0.2)",
			[theme.breakpoints.down(810)]: {
				textAlign: "center",
				margin: "0, auto",
				fontSize: "1.2rem",
				width: "200px",
			},
		},

		picture: {
			width: "100%",
		},

		pictureContainer: {
			width: "800px",
			height: "auto",
			marginLeft: "30%",
			marginTop: "5vh",
		},

		rating: {
			[theme.breakpoints.down(810)]: {
				fontSize: "2rem",
			},
		},

		brand: {
			fontSize: "1rem",
			[theme.breakpoints.down(810)]: {
				textAlign: "center",
				margin: "0, auto",
				fontSize: "0.8rem",
			},
		},

		subtext: {
			[theme.breakpoints.down(810)]: {
				textAlign: "center",
				margin: "0, auto",
				fontSize: "1rem",
			},
		},
	})
);

const Product = ({ data, mugData, shirtData, addShoppingcart, category }) => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	const classes = useStyles();
	const mobile = useMediaQuery("(max-width: 810px )");
	const { product } = useParams();
	const { id } = useParams();

	const [currentItem, setCurrentItem] = useState(null);
	useEffect(() => {
		let value = category[id];

		if (value) {
			const filteredItem = value.filter(
				(item) => item[id + "_slugs"] === product
			);
			if (filteredItem[0]) {
				setCurrentItem({
					title: filteredItem[0][id + "_title"],
					price: filteredItem[0][id + "_price"],
					rating: filteredItem[0][id + "_rating"],
					subtext: filteredItem[0][id + "_subtext"],
					image: filteredItem[0][id + "_image"],
					description: filteredItem[0][id + "_description"],
					productid: `${filteredItem[0][id + "_id"]}`,
					quantity: 1,
				});
			}
		}
	}, [category, id, product]);

	if (currentItem) {
		const { title, image, price, rating, subtext, description } = currentItem;

		return (
			<React.Fragment>
				<Paper className={classes.paper}>
					<FadeIn>
						<Grid container justify='center'>
							<Grid item xs={mobile ? 12 : 4}>
								<Grid container justify='center'>
									<ButtonBase onClick={handleOpen}>
										<Box className={classes.image}>
											<img className={classes.img} alt='complex' src={image} />
										</Box>
									</ButtonBase>
								</Grid>
							</Grid>
							<Grid item xs={mobile ? 12 : 8} sm>
								<Grid
									container
									className={classes.productInfo}
									direction='column'
									spacing={2}
								>
									<Grid item xs={12}>
										<Grid container justify={mobile ? "center" : ""}>
											<Typography
												className={classes.brand}
												variant='h6'
												gutterBottom
											>
												{subtext}
											</Typography>
										</Grid>
									</Grid>
									<Grid item xs={12}>
										<Grid container justify={mobile ? "center" : ""}>
											<Typography
												gutterBottom
												variant='h3'
												className={classes.title}
											>
												{title}
											</Typography>
										</Grid>
									</Grid>
									<Grid item xs={12}>
										<Grid container justify={mobile ? "center" : ""}>
											<Typography
												variant='h4'
												color='primary'
												className={classes.title}
											>
												${price}
											</Typography>{" "}
										</Grid>
									</Grid>
									<Grid item xs={12}>
										<Grid container justify={mobile ? "center" : ""}>
											<Rating
												name='read-only'
												className={classes.rating}
												defaultValue={`${rating}`}
											/>
										</Grid>
									</Grid>

									<Grid item xs={12}>
										<Grid container justify={mobile ? "center" : ""}>
											<Button
												variant='contained'
												size='large'
												color='secondary'
												className={classes.button}
												onClick={() => addShoppingcart(currentItem)}
												//onClick = {addItemsToCart}
											>
												Add to Cart
											</Button>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
						</Grid>

						<Grid
							item
							xs={12}
							sm
							container
							style={{ marginTop: "100px", marginBottom: "50px" }}
						>
							<Grid item xs={12}>
								<Grid container justify='center'>
									<Typography
										gutterBottom
										variant='h4'
										align='center'
										className={classes.title}
									>
										Description
									</Typography>
									<Typography
										className={classes.subtext}
										variant='h6'
										gutterBottom
									>
										{parse(`${description}`)}
									</Typography>
								</Grid>
							</Grid>
							<Modal open={open} onClose={handleClose}>
								<div className={classes.pictureContainer}>
									<img className={classes.picture} alt='complex' src={image} />
								</div>
							</Modal>
						</Grid>
					</FadeIn>
				</Paper>

				<Footer />
			</React.Fragment>
		);
	} else return null;
};
//
export default Product;
