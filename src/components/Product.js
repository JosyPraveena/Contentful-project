import React, { useEffect, useState } from "react";
import "../App.css";
import { useParams } from "react-router-dom";

const Product = ({ data, mugData, shirtData }) => {
	const comic = data;
	const mug = mugData;
	const tshirt = shirtData;
	const { product } = useParams();

	const [currentItem, setCurrentItem] = useState([]);
	useEffect(() => {
		if (tshirt.items) {
			const filteredItem = tshirt.items.filter(
				(item) => item.fields.shirtSlug === product
			);
			if (filteredItem[0]) {
				setCurrentItem([
					filteredItem[0].fields.shirtTitle,
					filteredItem[0].fields.shirtPrice,
					filteredItem[0].fields.shirtRating,
					filteredItem[0].fields.shirtSubtext,
					filteredItem[0].fields.shirtImage[0].fields.file.url,
				]);
			}
		}
		if (mug.items) {
			const filteredItem = mug.items.filter(
				(item) => item.fields.mugSlug === product
			);

			if (filteredItem[0]) {
				setCurrentItem([
					filteredItem[0].fields.mugTitle,
					filteredItem[0].fields.mugPrice,
					filteredItem[0].fields.mugRating,
					filteredItem[0].fields.mugSubtext,
					filteredItem[0].fields.mugImage[0].fields.file.url,
				]);
			}
		}
		if (comic.items) {
			const filteredItem = comic.items.filter(
				(item) => item.fields.bookSlug === product
			);

			if (filteredItem[0]) {
				setCurrentItem([
					filteredItem[0].fields.bookTitle,
					filteredItem[0].fields.bookPrice,
					filteredItem[0].fields.bookRating,
					filteredItem[0].fields.bookSubtext,
					filteredItem[0].fields.bookImage.fields.file.url,
					filteredItem[0].fields.bookDescription,
				]);
			}
		}
	}, [product, tshirt, mug, comic]);

	//console.log({currentItem})
	if (currentItem) {
		return (
			<>
				<div id='product'>
					<div id='product-top-left'>
						<img src={currentItem[4]} alt='productimage' />
					</div>
					<div id='product-top-right'>
						<h1>{currentItem[0]}</h1>
						<h1>${currentItem[1]}</h1>
						<h2>Rating: {currentItem[2]}/5</h2>
						<p>{currentItem[3]}</p>
						<button>BUY NOW</button>
					</div>
				</div>

				<div id='product-details'>
					<hr></hr>
					<h2>Description</h2>
					<p>{currentItem[5]}</p>
				</div>
			</>
		);
	} else return null;
};

export default Product;
