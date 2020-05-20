import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Link, useParams } from "react-router-dom";
import ShirtCategoryCard from "./ShirtCategoryCard";
import MugCategoryCard from "./MugCategoryCard";
import ComicCategoryCard from "./ComicCategoryCard";

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
					<Grid item container xs={12} sm={4}>
						<Link
							style={{ textDecoration: "none" }}
							to={`/category/id/${item.fields.shirtSlug}`}
							key={item.fields.shirtId}
						>
							<ShirtCategoryCard data={item} />
						</Link>
					</Grid>
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
				<Grid item container xs={12} sm={4}>
					<Link
						style={{ textDecoration: "none" }}
						to={`/category/id/${item.fields.mugSlug}`}
						key={item.fields.mugId}
					>
						<MugCategoryCard data={item} />
					</Link>
				</Grid>
			);
		});
	}
	if (id === "comicbooks") {
		itemList = comic.items.map((item) => {
			return (
				<Grid item container xs={12} sm={4}>
					<Link
						style={{ textDecoration: "none" }}
						to={`/category/id/${item.fields.bookSlug}`}
						key={item.fields.bookId}
					>
						<ComicCategoryCard data={item} />
					</Link>
				</Grid>
			);
		});
	}

	return (
		<Container>
			<Grid container justify='center' style={{ marginTop: "100px" }}>
				{itemList}
			</Grid>
		</Container>
	);
};

export default CategoryPage;
