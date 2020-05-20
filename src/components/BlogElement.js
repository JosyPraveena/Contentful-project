import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import TodayIcon from "@material-ui/icons/Today";
import CommentIcon from "@material-ui/icons/Comment";



import cat_shirts from "../img/cat_tshirts.jpg";
import avatar from "../img/avatar.jpg";

const useStyles = makeStyles({
	root: {
		marginTop: "100px",
		maxWidth: "90%",

		margin: "auto",
	},

	title: {
		fontFamily: "Bangers",
		fontSize: "4rem",
	},

	paperSpacing: {
		padding: "20px 20px",
		height: "auto",
	},

	author: {
		display: "flex",
		justifyContent: "spaceBetween",
		alignItems: "center",
		marginTop: "20px",
	},

	authorData: {
		display: "flex",
		alignItems: "center",
	},

	date: {
		display: "flex",
		alignItems: "center",
		marginLeft: "50px",
		fontFamily: "Roboto",
		opacity: "0.9",
	},

	caption: {
		marginTop: "15px",
		fontFamily: "Roboto",
		fontSize: "1.3rem",
		opacity: "0.8",
	},

	textContainer: {
		paddingLeft: "20px",
	},

	img: {
		maxWidth: "100%",
		maxHeight: "auto",

		borderRadius: "5px",
	},

	imgContainer: {},

	tags: {
		fontFamily: "Bangers",
		textDecoration: "none",
		color: "rgba(0, 0, 0, 0.87)",
		marginTop: "25px",
		fontSize: "1.4rem",
	},
});

const BlogElement = () => {
	const classes = useStyles();
	return (
		<Grid container className={classes.root}>
			<Grid item sm={12}>
				<Paper elevation={3} className={classes.paperSpacing}>
					<Grid container direction='row'>
						<Grid
							className={classes.imgContainer}
							item
							container
							xs={12}
							sm={3}
						>
							<img className={classes.img} src={cat_shirts} />
						</Grid>
						<Grid
							item
							xs={12}
							sm={8}
							container
							direction='column'
							justify='center'
							className={classes.textContainer}
						>
							<Typography className={classes.title}>THIS IS A TITLE</Typography>

							<Typography className={classes.caption}>
								Frankfurter shank rump, pastrami kevin tenderloin sirloin. Jerky
								short loin short ribs sirloin, pastrami rump chuck ham hock ham
								buffalo prosciutto. Ground round chislic alcatra meatball short
								ribs rump bacon. Jowl prosciutto pancetta sirloin tenderloin
								tri-tip.
							</Typography>
							<Typography component={Link} className={classes.tags}>
								#Marvel
							</Typography>
							<div className={classes.author}>
								<div className={classes.authorData}>
									<Avatar alt='author name' src={avatar} />
									<Typography style={{ paddingLeft: "10px" }}>
										{" "}
										by Spider-Man
									</Typography>
								</div>
								<CommentIcon className={classes.date} />
								<Typography className={classes.date}>
									{" "}
									<TodayIcon /> 17.05.2020
								</Typography>
							</div>
						</Grid>
					</Grid>
				</Paper>
			</Grid>
		</Grid>
	);
};

export default BlogElement;
