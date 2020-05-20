import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Link, useParams } from "react-router-dom";
import CategoryCard from "./categoryCard";

const CategoryPage = ({ data, mugData, shirtData }) => {
	const comic = data;
	const mug = mugData;
	const tshirt = shirtData;
	const { id } = useParams();
	let itemList = [];
	if (id === "tshirt") {
		itemList = tshirt.items.map(
			(item) => {
				return (
					<div>
						<CategoryCard data={item} />
						<Link
							to={`/category/id/${item.fields.shirtSlug}`}
							key={item.fields.shirtId}
						>
							{item.fields.shirtTitle}
						</Link>
						<img
							src={item.fields.shirtImage[0].fields.file.url}
							alt='productimage'
						/>
					</div>
				);
			}
			//console.log(item)
		);
		//console.log(itemList)
	}
	if (id === "mugs") {
		console.log(mug);
		itemList = mug.items.map((item) => {
			return (
				<div>
					<Link
						to={`/category/id/${item.fields.mugSlug}`}
						key={item.fields.mugId}
					>
						{item.fields.mugTitle}
					</Link>
					<img
						src={item.fields.mugImage[0].fields.file.url}
						alt='productimage'
					/>
				</div>
			);
		});
	}
	if (id === "comicbooks") {
		itemList = comic.items.map((item) => {
			return (
				<div>
					<Link
						to={`/category/id/${item.fields.bookSlug}`}
						key={item.fields.bookId}
					>
						{item.fields.bookTitle}
					</Link>
					<img src={item.fields.bookImage.fields.file.url} alt='productimage' />
				</div>
			);
		});
	}

	return (
		<Container>
			<Grid style={{ maxWidth: "1240px", marginTop: "100px" }}>{itemList}</Grid>
		</Container>
	);
};

export default CategoryPage;
