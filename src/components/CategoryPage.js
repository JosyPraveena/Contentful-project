import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Link,useParams } from "react-router-dom";

const CategoryPage = ({data,mugData,shirtData}) => {
	const comic = data;
	const mug = mugData;
	const tshirt = shirtData;
	const  id = useParams();
	console.log(id);
	let itemList = [];
	if(id === "t-shirts"){
		console.log("tshirt")
		 itemList = tshirt.map((item) => (
			<div>
				<Link to={`/category/id/${item.fields.bookSlug}`} key={item.fields.bookId}>{item.fields.bookTitle}</Link>
				<img src={item.fields.bookImage.fields.file.url} alt="productimage"/>
			</div>
		));
	}
	else if(id === "mugs"){
		itemList = mug.map((item) => (
			<div>
				<Link to={`/category/id/${item.fields.bookSlug}`} key={item.fields.bookId}>{item.fields.bookTitle}</Link>
				<img src={item.fields.bookImage.fields.file.url} alt="productimage"/>
			</div>
		));
	}
	else if(id==="comicbooks"){
		itemList = comic.map((item) => (
			<div>
				<Link to={`/category/id/${item.fields.bookSlug}`} key={item.fields.bookId}>{item.fields.bookTitle}</Link>
				<img src={item.fields.bookImage.fields.file.url} alt="productimage"/>
			</div>
		));
	}
	

	return (
		<Container>
			<Grid style={{ maxWidth: "1240px", marginTop: "100px" }}>{itemList}</Grid>
		</Container>
	);
};

export default CategoryPage;
