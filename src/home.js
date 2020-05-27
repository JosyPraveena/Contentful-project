import React, { Component } from "react";

import Slider from "./components/Slider";
import Categories from "./components/Categories";
import Featured from "./components/featured";
import Footer from "./components/Footer";
import Container from "@material-ui/core/Container";

const HomePage = (props) => {
	console.log(props);
	const { data } = props;
	const { shirtData } = props;
	const { mugData } = props;

	return (
		<React.Fragment>
			<Slider />
			<Container maxWidth='false' fixed>
				<Categories />
				<Featured comics={data} mugs={mugData} shirts={shirtData} />
			</Container>
			<Footer />
		</React.Fragment>
	);
};

export default HomePage;
