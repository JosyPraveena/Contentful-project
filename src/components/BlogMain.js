import React, { Component } from "react";
import BlogElement from "./BlogElement";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import Footer from "./Footer";

import BlogArticle from "./BlogArticle.js";

const useStyles = makeStyles((theme) => ({
	blogContainer: {
		marginTop: "100px",
	},

	blogArticle: {
		margin: "20px",
		boxShadow: "2px 2px 15px rgba(0,0,0,0.3)",
	},
}));

const BlogMain = ({ blogData }) => {
	const classes = useStyles();
	const mobile = useMediaQuery("(max-width: 1165px");
	console.log("BlogMain loaded");

	let itemList = [];

	if (blogData) {
		return (
			<React.Fragment>
				<Grid container justify='center' className={classes.blogContainer}>
					{
						(itemList = blogData.map((item) => (
							<Grid item xs={mobile ? 12 : 5} className={classes.blogArticle}>
								<BlogArticle blogData={item} />
							</Grid>
						)))
					}
				</Grid>
				<Footer />
			</React.Fragment>
		);
	}

	return <container> {itemList} </container>;
};

export default BlogMain;
