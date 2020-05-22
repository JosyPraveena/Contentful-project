import React, { Component } from "react";
import BlogElement from "./BlogElement";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import BlogArticle from "./BlogArticle.js"

const BlogMain = ({blogData}) => {
	console.log("From Main : ", blogData);
	const { items } = blogData;
	return (
		<Container>
			
			<div id="blogWrapper">
				
			{ items.map( item =>  
			
			  	<BlogArticle blogData={item} />
			  
			  ) }

			</div>
		</Container>
	);
};

export default BlogMain;
