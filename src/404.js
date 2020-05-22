import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import i404 from "./img/404.png"



const PageNotFound = () => {

	
	return (
		<div id="i404">
			<Typography>Wrong alley, webslinger !</Typography><p/>
			<img src={i404} />
		</div>
	);
};

export default PageNotFound;
