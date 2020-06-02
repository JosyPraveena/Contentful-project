import React from "react";
import { makeStyles, Theme, withStyles, createStyles } from "@material-ui/core/styles";
import Badge from '@material-ui/core/Badge';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import PropTypes from "prop-types";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import BlurCircularIcon from "@material-ui/icons/BlurCircular";
import "../../src/styles.css";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Slide from "@material-ui/core/Slide";
import { Link } from "react-router-dom";
import Logo from "../img/LOGO.png"
import createMixins from "@material-ui/core/styles/createMixins";

export default function Navbar(props) {
	
	const [value, setValue] = React.useState(0);

	function HideOnScroll(props) {
		const { children, window } = props;
		// Note that you normally won't need to set the window ref as useScrollTrigger
		// will default to window.
		// This is only being set here because the demo is in an iframe.
		const trigger = useScrollTrigger({ target: window ? window() : undefined });

		return (
			<Slide appear={false} direction='down' in={!trigger}>
				{children}
			</Slide>
		);
	}

	HideOnScroll.propTypes = {
		children: PropTypes.element.isRequired,
		/**
		 * Injected by the documentation to work in an iframe.
		 * You won't need it on your project.
		 */
		window: PropTypes.func,
	};

	const StyledBadge = withStyles((theme: Theme) =>
  createStyles({
    badge: {
      right: -1,
      top: 1,
      border: `2px solid ${theme.palette.background.default}`,
      padding: '0 4px',
    },
  }),
)(Badge);

	const useStyles = makeStyles((theme) => ({
		root: {
			flexGrow: 1,
		},

		menuButton: {
			marginRight: theme.spacing(2),
		},

		title: {
			flexGrow: 1,
			fontFamily: "Bangers",
			fontSize: "3rem",
			textDecoration: "none",
			color: "#fff",
		},

		cart: {
			marginLeft: 30,
			transition: "all 0.3s ease",
			"&:hover": {
				transition: "all 0.3s ease",
				color: "#e62429",
			},
		},

		tab: {
			minWidth: "50px",
			letterSpacing: "1.4px",
			transition: "all 0.3s ease",
			"&:visited": { color: "#fff" },
			color: "#fff",
			fontFamily: "Roboto",
			fontSize: "0.9rem",
			fontWeight: "600",
			marginLeft: "30px",
			"&:hover": {
				transition: "all 0.3s ease",
				color: "#e62429",
			},
		},

		toolbarMargin: {
			...theme.mixins.toolbar,
		},
		logo: {
			height: "75px"
		}
	}));

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const classes = useStyles();

	return (
		// <div  id='navbar'>
		<React.Fragment>
			<HideOnScroll {...props}>
				<AppBar>
					<Toolbar>
						<img src={Logo} ALT="Logo" className={classes.logo}/>

						<Typography
							component={Link}
							to='/'
							variant='h6'
							className={classes.title}
						>
							COMICS AWESOME
						</Typography>
						<Tabs
							value={value}
							onChange={handleChange}
							centered
							indicatorColor='secondary'
						>
							<Tab
								component={Link}
								to='/category/shirt'
								label='t-shirts'
								className={classes.tab}
							/>
							<Tab
								component={Link}
								to='/category/mug'
								label='mugs'
								className={classes.tab}
							/>
							<Tab
								component={Link}
								to='/category/book'
								label='comicbooks'
								className={classes.tab}
							/>
							<Tab
								component={Link}
								to='/blog'
								label='blog'
								className={classes.tab}
							/>
						</Tabs>
						<IconButton
							edge='start'
							className={classes.menuButton}
							color='inherit'
							aria-label='menu'
						>
							<StyledBadge badgeContent={props.count} color="secondary" showZero>
							<ShoppingCartIcon className={classes.cart} component={Link} color="secondary"
								to='/category/shoppingcart'/>
							</StyledBadge>
						</IconButton>
					</Toolbar>
				</AppBar>
			</HideOnScroll>
			<div className={classes.toolbarMargin}></div>
		</React.Fragment>
	);
}
