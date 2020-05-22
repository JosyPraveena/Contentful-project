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

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		paper: {
			padding: theme.spacing(5),
			margin: "auto",
			maxWidth: "100%",
			maxHeight: "100%",
		},
		image: {
			width: "100%",
			height: "500px",
		},
		img: {
			margin: "auto",
			display: "block",
			width: "500px",
			maxWidth: "100%",
			maxHeight: "100%",
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
	})
);

const Product = ({ data, mugData, shirtData }) => {
	const classes = useStyles();
	const comic = data;

	const mug = mugData;
	const tshirt = shirtData;
	const { product } = useParams();

	const [currentItem, setCurrentItem] = useState([]);
	useEffect(() => {
		if (tshirt.items) {
			const filteredItem = tshirt.items.filter(
				(item) => item.fields.shirtSlug === product
			);

			if (filteredItem[0]) {
				console.log(filteredItem[0].fields.shirtRating);
				setCurrentItem([
					filteredItem[0].fields.shirtTitle,
					filteredItem[0].fields.shirtPrice,
					filteredItem[0].fields.shirtRating,
					filteredItem[0].fields.shirtSubtext,
					filteredItem[0].fields.shirtImage[0].fields.file.url,
					filteredItem[0].fields.shirtDescription,
				]);
			}
		}
		if (mug.items) {
			const filteredItem = mug.items.filter(
				(item) => item.fields.mugSlug === product
			);

			if (filteredItem[0]) {
				console.log(filteredItem[0].fields.mugRating);
				setCurrentItem([
					filteredItem[0].fields.mugTitle,
					filteredItem[0].fields.mugPrice,
					filteredItem[0].fields.mugRating,
					filteredItem[0].fields.mugSubtext,
					filteredItem[0].fields.mugImage[0].fields.file.url,
					filteredItem[0].fields.mugDescription,
				]);
			}
		}
		if (comic.items) {
			const filteredItem = comic.items.filter(
				(item) => item.fields.bookSlug === product
			);

			if (filteredItem[0]) {
				console.log(filteredItem[0].fields.bookRating);
				setCurrentItem([
					filteredItem[0].fields.bookTitle,
					filteredItem[0].fields.bookPrice,
					filteredItem[0].fields.bookRating,
					filteredItem[0].fields.bookSubtext,
					filteredItem[0].fields.bookImage.fields.file.url,
					filteredItem[0].fields.bookDescription,
				]);
			}
		}
	}, [product, tshirt, mug, comic]);

	//console.log({currentItem})
	if (currentItem) {
		return (
			<div className={classes.root}>
				<Paper className={classes.paper}>
					<Grid container spacing={5} justify='center'>
						<Grid item>
							<ButtonBase className={classes.image}>
								<img
									className={classes.img}
									alt='complex'
									src={currentItem[4]}
								/>
							</ButtonBase>
						</Grid>
						<Grid item xl={12} sm container>
							<Grid item xl container direction='column' spacing={2}>
								<Grid item xl>
									<br />
									<br />
									<Typography
										gutterBottom
										variant='h3'
										className={classes.title}
									>
										{currentItem[0]}
									</Typography>
									<Typography
										variant='h4'
										color='primary'
										className={classes.title}
									>
										${currentItem[1]}
									</Typography>{" "}
									<br />
									<Rating name='read-only' value={currentItem[2]} readOnly />
									<br />
									<br />
									<Typography variant='h6' gutterBottom>
										{currentItem[3]}
									</Typography>
								</Grid>
								<Grid item>
									<Button
										variant='contained'
										size='large'
										color='secondary'
										className={classes.button}
									>
										buy now
									</Button>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Paper>
				<Paper className={classes.paper}>
					<Grid item xl={12} sm container>
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
								{currentItem[5]}
							</Typography>
						</Grid>
					</Grid>
				</Paper>
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
