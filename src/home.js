import React, { Component } from "react";

import Slider from "./components/Slider";
import Categories from "./components/Categories";
import Featured from "./components/featured";
import Footer from "./components/Footer";
import Container from "@material-ui/core/Container";

const HomePage = (props) => {
	const { items: comics } = props.data;
	const { items: shirts } = props.shirtData;
	const { items: mugs } = props.mugData;

	return (
		<React.Fragment>
			<Slider />
			<Container maxWidth='false' fixed>
				<Categories />
				<Featured comics={comics} mugs={mugs} shirts={shirts} />
			</Container>
			<Footer />
		</React.Fragment>
	);
};

export default HomePage;
