import React from "react";
import "../App.css";

import { Carousel } from "antd";
import Grid from "@material-ui/core/Grid";

const Slider = () => {
	return (
		<Carousel autoplay>
			<div>
				<img
					src='https://images7.alphacoders.com/512/thumb-1920-512977.jpg'
					alt='image1'
				/>
			</div>
			<div>
				<img
					src='https://img3.goodfon.com/wallpaper/nbig/1/ab/iron-man-marvel-comics-294.jpg'
					alt='image2'
				/>
			</div>
			<div>
				<img
					src='https://wallpapertag.com/wallpaper/full/0/1/e/865188-download-free-dc-comics-backgrounds-1920x1080-mac.jpg'
					alt='image3'
				/>
			</div>
			<div>
				<img
					src='https://www.ubackground.com/_ph/22/697416964.jpg'
					alt='image4'
				/>
			</div>
		</Carousel>
	);
};
export default Slider;
