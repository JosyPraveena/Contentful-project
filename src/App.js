import React, { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "@material-ui/styles";

import theme from "./components/UI/theme";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";

import HomePage from "./home";
import PageNotFound from "./404";
import CategoryPage from "./components/CategoryPage";
import BlogMain from "./components/BlogMain";
import Product from "./components/Product";

function App() {
	const [data, setData] = useState("");
	const [mugData,setMugData] = useState("");
	const [shirtData,setShirtData] = useState("");
	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const contentful = require("contentful");
		const client = contentful.createClient({
			space: "judmcnqfm2ry",
			accessToken: "Cpz2_8v_83-s3bHAYAP1a8mUV1fkFUuT7MEK3UsW-Wg",
		});

		client
	  .getEntries({ content_type: "comicBooks"})
			.then((entry) => setData(entry))
			.catch((err) => console.log(err));
			client
			.getEntries({ content_type: "mug"})
				  .then((entry) => setMugData(entry))
				  .catch((err) => console.log(err));
				  client
			.getEntries({ content_type: "shirt"})
				  .then((entry) => setShirtData(entry))
				  .catch((err) => console.log(err));
		
	};

	return (
		<ThemeProvider theme={theme}>
			<Navbar  />
			<Switch>
			<Route path={"/category/:id/:product"} 
               render={(props)=> <Product data={data} mugData={mugData} shirtData={shirtData}{...props}/>}
               />
				<Route
					path={"/category/:id"}
					render={(props) => <CategoryPage data={data} mugData={mugData} shirtData={shirtData} {...props} />}
				/>
        
				<Route path='/blog/' component={BlogMain} />
				<Route path='/' component={HomePage} />
				<Route component={PageNotFound} />
			</Switch>
		</ThemeProvider>
	);
}

export default App;
