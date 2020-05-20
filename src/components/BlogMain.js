import React, { Component } from "react";
import BlogElement from "./BlogElement";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import BlogArticle from "./BlogArticle";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	root: { flexGrow: 1 },
});

const BlogMain = () => {
	const classes = useStyles();
	return (
		<Container>
			<Grid container direction='row' className={classes.root}>
				<Grid
					justify='center'
					container
					item
					xs={4}
					component={Link}
					to='/blog/article'
					className={classes.root}
				>
					<BlogArticle />
				</Grid>
			</Grid>

			<Grid container direction='row' className={classes.root}>
				<Grid
					justify='center'
					container
					item
					xs={4}
					component={Link}
					to='/blog/article'
					className={classes.root}
				>
					<BlogArticle />
				</Grid>
			</Grid>
		</Container>
	);
};

export default BlogMain;
