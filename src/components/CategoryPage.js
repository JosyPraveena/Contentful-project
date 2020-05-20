import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ProductCard from "./productCard";

const CategoryPage = ({ data }) => {
	const { items } = data;
	console.log(items);

	// const itemList = items.map((item) => (
	// 	<div>
	// 		<div key={item.fields.bookId}>{item.fields.bookTitle}</div>
	// 		<img src={item.fields.bookImage.fields.file.url} />
	// 	</div>
	// ));

	return (
		<Container>
			<Grid container style={{ maxWidth: "1240px", marginTop: "100px" }}>
				<Grid item xs={12} sm={6} lg={4}>
					<ProductCard />
				</Grid>
				<Grid item xs={12} sm={6} lg={4}>
					<ProductCard />
				</Grid>
				<Grid item xs={12} sm={6} lg={4}>
					<ProductCard />
				</Grid>
				<Grid item xs={12} sm={6} lg={4}>
					<ProductCard />
				</Grid>
				<Grid item xs={12} sm={6} lg={4}>
					<ProductCard />
				</Grid>
				<Grid item xs={12} sm={6} lg={4}>
					<ProductCard />
				</Grid>
			</Grid>
		</Container>
	);
};

export default CategoryPage;
