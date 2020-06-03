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
//import { useHistory } from "react-router-dom";

// MODAL IMAGE

const rand = () => {
	return Math.round(Math.random() * 20) - 10;
};

// const getModalStyle = () => {
// 	const top = 50;
// 	const left = 50;

// 	return {
// 		top: `${top}%`,
// 		left: `${left}%`,
// 		transform: `translate(-${top}%, -${left}%)`,
// 	};
// };

// STYLE COMPONENT
const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		paper: {
			padding: theme.spacing(5),
			margin: "100px 50px 50px 50px",
			maxWidth: "100%",
			maxHeight: "100%",
		},
		image: {
			width: "100%",
			overflow: "hidden",
			margin: "0 auto",
			marginRight: "50px",
		},
		img: {
			// margin: "0 auto",
			maxWidth: "450px",
			maxHeight: "450px",

			borderRadius: "8px",
			transition: "all 0.3s ease-in-out",
			"&:hover": {},
		},
		title: {
			fontFamily: "Bangers",
			fontSize: "3rem",
			textDecoration: "none",
		},
		button: {
			fontFamily: "Bangers",
			fontSize: "1.5rem",
			textDecoration: "none",
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
			<div className={classes.root}>
				<Paper className={classes.paper}>
					<Grid container justify='center'>
						<Grid item xs={mobile ? 12 : 4}>
							<div className={classes.image}>
								<ButtonBase onClick={handleOpen}>
									<div className={classes.image}>
										<img className={classes.img} alt='complex' src={image} />
									</div>
								</ButtonBase>
							</div>
						</Grid>
						<Grid item xs={mobile ? 12 : 8} sm container>
							<Grid item xl container direction='column' spacing={2}>
								<Grid item xl>
									<br />
									<br />
									<Typography
										gutterBottom
										variant='h3'
										className={classes.title}
									>
										{title}
									</Typography>
									<Typography
										variant='h4'
										color='primary'
										className={classes.title}
									>
										${price}
									</Typography>{" "}
									<br />
									<Rating name='read-only' value={`${rating}`} readOnly />
									<br />
									<br />
									<Typography variant='h6' gutterBottom>
										{subtext}
									</Typography>
								</Grid>
								<Grid item>
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

					<Grid
						item
						xl={12}
						sm
						container
						style={{ marginTop: "100px", marginBottom: "50px" }}
					>
						<Grid item>
							<Typography
								gutterBottom
								variant='h4'
								align='center'
								className={classes.title}
							>
								Description
							</Typography>
							<Typography variant='h6' gutterBottom>
								{parse(`${description}`)}
							</Typography>
						</Grid>
						<Modal open={open} onClose={handleClose}>
							<div className={classes.pictureContainer}>
								<img className={classes.picture} alt='complex' src={image} />
							</div>
						</Modal>
					</Grid>
				</Paper>
				<Footer />
			</div>
		);
	} else return null;
};
// 		if (filteredItem[0]) {
//       setCurrentItem([
//         filteredItem[0].fields.bookTitle,
//         filteredItem[0].fields.bookPrice,
//         filteredItem[0].fields.bookRating,
//         filteredItem[0].fields.bookSubtext,
//         filteredItem[0].fields.bookImage.fields.file.url,
//         filteredItem[0].fields.bookDescription,
//       ]);
//     }
//   }
// }, [product, tshirt, mug, comic]);

// 	//console.log({currentItem})
// 	if (currentItem) {
// 		return (
// 			<>
// 				<div id='product'>
// 					<div id='product-top-left'>
// 						<img src={currentItem[4]} alt='productimage' />
// 					</div>
// 					<div id='product-top-right'>
// 						<h1>{currentItem[0]}</h1>
// 						<h1>${currentItem[1]}</h1>
// 						<h2>Rating: {currentItem[2]}/5</h2>
// 						<p>{currentItem[3]}</p>
// 						<button>BUY NOW</button>
// 					</div>
// 				</div>

// 				<div id='product-details'>
// 					<hr></hr>
// 					<h2>Description</h2>
// 					<p>{currentItem[5]}</p>
// 				</div>
// 			</>
// 		);
// 	} else return null;
// };

export default Product;
