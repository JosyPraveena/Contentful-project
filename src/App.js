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
import BlogArticle from "./components/BlogArticle";
import BlogDetails from "./components/BlogDetails";

import Product from "./components/Product";

function App() {
	const [data, setData] = useState("");
	const [mugData, setMugData] = useState("");
	const [shirtData, setShirtData] = useState("");
	const [blogData, setBlogData] = useState("");

	const fetchData = async () => {
		try {
			const response = await fetch("http://localhost:3000/shirt/");
			const shirtData = await response.json();
			setShirtData(shirtData);
			console.log(shirtData);
		} catch (err) {
			console.error(err.message);
		}
		try {
			const response = await fetch("http://localhost:3000/mug/");
			const mugData = await response.json();
			setMugData(mugData);
			console.log(mugData);
		} catch (err) {
			console.error(err.message);
		}
		try {
			const response = await fetch("http://localhost:3000/book/");
			const data = await response.json();
			setData(data);
			console.log(data);
		} catch (err) {
			console.error(err.message);
		}
		try {
			const response = await fetch("http://localhost:3000/blog/");
			const blogData = await response.json();
			setBlogData(blogData);
			console.log(blogData);
		} catch (err) {
			console.error(err.message);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const { items } = blogData;

	return (
		<ThemeProvider theme={theme}>
			{items !== undefined &&
				items.map((item) =>
					console.log(item.fields.blogContent.content[0].content[0].value)
				)}
			<Navbar />
			<Switch>
				<Route
					path={"/category/:id/:product"}
					render={(props) => (
						<Product
							data={data}
							mugData={mugData}
							shirtData={shirtData}
							{...props}
						/>
					)}
				/>
				<Route
					path={"/category/:id"}
					render={(props) => (
						<CategoryPage
							data={data}
							mugData={mugData}
							shirtData={shirtData}
							{...props}
						/>
					)}
				/>
				<Route
					path={"/blog/:id"}
					render={(props) => <BlogDetails blogData={blogData} {...props} />}
				/>
				<Route
					path='/blog/'
					render={(props) => <BlogMain blogData={blogData} {...props} />}
				/>
				<Route
					exact
					path='/'
					render={(props) => (
						<HomePage
							data={data}
							mugData={mugData}
							shirtData={shirtData}
							{...props}
						/>
					)}
				/>

				<Route component={PageNotFound} />
			</Switch>
		</ThemeProvider>
	);
}

export default App;
