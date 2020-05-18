import React, { Component } from "react";

import Slider from "./components/Slider";
import Categories from "./components/Categories";
import Featured from "./components/featured";
import Footer from "./components/Footer";
import Container from "@material-ui/core/Container";

const HomePage = (props) => {
	return (
		<React.Fragment>
			<Slider />
			<Container maxWidth='false' fixed>
				<Categories />
				<Featured />
			</Container>
			<Footer />
		</React.Fragment>
	);
};

export default HomePage;
