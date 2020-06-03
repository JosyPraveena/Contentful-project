import React, { Component } from "react";

import Slider from "./components/Slider";
import Categories from "./components/Categories";
import Featured from "./components/featured";
import Footer from "./components/Footer";

const HomePage = (props) => {
	const { data } = props;
	const { shirtData } = props;
	const { mugData } = props;

	return (
		<React.Fragment>
			<Slider />

			<Categories />
			<Featured comics={data} mugs={mugData} shirts={shirtData} />

			<Footer />
		</React.Fragment>
	);
};

export default HomePage;
