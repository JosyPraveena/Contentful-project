import React, { Component } from "react";
import BlogElement from "./BlogElement";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import BlogArticle from "./BlogArticle.js"



const BlogMain = ({blogData}) => {
	// console.log("From Main : ", blogData);

	console.log("BlogMain loaded")
	
	let itemList = [];

	if (blogData) { itemList=blogData.map( (item) => {

		return (
			<Container>
				
				<div id="blogWrapper">
					
					
					<BlogArticle blogData={item} />
					
				</div>

			</Container>
				);
	} ) }


	return ( <container> {itemList} </container> )

}

export default BlogMain;
