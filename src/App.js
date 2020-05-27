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
        } catch (err) {
            console.error(err.message);
		}
		try {
            const response = await fetch("http://localhost:3000/mug/");
            const mugData = await response.json();
            setMugData(mugData);
        } catch (err) {
            console.error(err.message);
		}
		try {
            const response = await fetch("http://localhost:3000/book/");
            const data = await response.json();
            setData(data);
        } catch (err) {
            console.error(err.message);
		}
		try {
            const response = await fetch("http://localhost:3000/blog/");
            const data = await response.json();
            setData(data);
        } catch (err) {
            console.error(err.message);
        }
	};
	
	useEffect(() => {
		fetchData();
	}, []);


	// const fetchData = async () => {
	// 	const contentful = require("contentful");
	// 	const client = contentful.createClient({
	// 		space: "judmcnqfm2ry",
	// 		accessToken: "Cpz2_8v_83-s3bHAYAP1a8mUV1fkFUuT7MEK3UsW-Wg",
	// 	});

	// 	client
	// 		.getEntries({ content_type: "comicBooks" })
	// 		.then((entry) => setData(entry))
	// 		.catch((err) => console.log(err));
	// 	client
	// 		.getEntries({ content_type: "mug" })
	// 		.then((entry) => setMugData(entry))
	// 		.catch((err) => console.log(err));
	// 	client
	// 		.getEntries({ content_type: "shirt" })
	// 		.then((entry) => setShirtData(entry))
	// 		.catch((err) => console.log(err));
	// 	client
	// 		.getEntries({ content_type: "blog" })
	// 		.then((entry) => setBlogData(entry))
	// 		.catch((err) => console.log(err));
			
	// };
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
				<Route path='/blog/' render={(props) => <BlogMain blogData={blogData} {...props} />}/>
                <Route exact
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
