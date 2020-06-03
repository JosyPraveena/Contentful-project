import { createMuiTheme } from "@material-ui/core/styles";
import { withTheme } from "@material-ui/styles";

export default createMuiTheme({
	palette: {
		primary: {
			main: "#202020",
		},
		secondary: {
			main: "#e62429",
		},
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 960,
			lg: 1280,
			xl: 1920,
		},
	},
	spacing: 0,
});
