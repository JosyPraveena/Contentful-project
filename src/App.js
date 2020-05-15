import React, { useEffect } from "react";
import "./App.css";
import Featured from "./components/featured";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./components/UI/theme";

function App() {
	useEffect(() => {
		const contentful = require("contentful");
		const client = contentful.createClient({
			space: "judmcnqfm2ry",

			accessToken: "Cpz2_8v_83-s3bHAYAP1a8mUV1fkFUuT7MEK3UsW-Wg",
		});

		client
			.getEntries({ content_type: "shirt" })
			.then((entry) => console.log(entry))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className='App'>
			<ThemeProvider theme={theme}>
				<Featured />
			</ThemeProvider>
		</div>
	);
}

export default App;
