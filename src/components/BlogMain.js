import React, { Component } from "react";
import BlogElement from "./BlogElement";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const BlogMain = () => {
	return (
		<Container>
			<Grid container style={{ maxWidth: "1240px" }}>
				<Grid justify='center' container item xs={12}>
					<BlogElement />
				</Grid>
				<Grid container item>
					<BlogElement />
				</Grid>
				<Grid item>
					<BlogElement />
				</Grid>
				<Grid item>
					<BlogElement />
				</Grid>
			</Grid>
		</Container>
	);
};

export default BlogMain;
