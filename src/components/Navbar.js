import React from "react";
import {
	makeStyles,
	Theme,
	withStyles,
	createStyles,
} from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import PropTypes from "prop-types";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "../../src/styles.css";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Slide from "@material-ui/core/Slide";
import { Link } from "react-router-dom";
import Logo from "../img/LOGO.png";

import Grid from "@material-ui/core/Grid";
import { useMediaQuery } from "@material-ui/core/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTshirt } from "@fortawesome/free-solid-svg-icons";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faBlog } from "@fortawesome/free-solid-svg-icons";

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
				padding: "0 4px",
			},
		})
	)(Badge);

	const useStyles = makeStyles((theme) => ({
		root: {
			flexGrow: 1,
		},

		brandTitle: {
			[theme.breakpoints.down(650)]: {
				display: "none",
			},
		},

		iconMenu: {
			display: "none",
			[theme.breakpoints.down(1040)]: {
				display: "block",
			},
		},

		cart: {
			marginLeft: 30,
			transition: "all 0.3s ease",
			"&:hover": {
				transition: "all 0.3s ease",
				color: "#e62429",
			},
		},

		logo: {
			height: "75px",
			transition: "all, 0.6s, ease",
			[theme.breakpoints.down(920)]: {
				height: "100px",
			},
		},

		menuButton: {
			marginRight: theme.spacing(2),
		},

		navbar: {
			display: "flex",
			padding: "10px 50px",
		},

		tab: {
			minWidth: "50px",
			letterSpacing: "1.4px",
			transition: "all 0.3s ease-in-out",
			"&:visited": { color: "#fff" },
			color: "#fff",
			fontFamily: "Roboto",
			fontSize: "0.9rem",
			fontWeight: "600",
			marginLeft: "30px",
			"&:hover": {
				transition: "all 0.3s ease-in-out",
				color: "#e62429",
			},
		},

		// tabsContainer: {
		// 	[theme.breakpoints.down(1040)]: {
		// 		display: "none",
		// 	},
		// },

		title: {
			flexGrow: 1,
			fontFamily: "Bangers",
			fontSize: "3rem",
			textDecoration: "none",
			color: "#fff",
			transition: "all 0.3s ease",
			[theme.breakpoints.down(1076)]: {
				fontSize: "2.5rem",
			},
			[theme.breakpoints.down(960)]: {
				display: "none",
			},
		},

		toolbarMargin: {
			...theme.mixins.toolbar,
			[theme.breakpoints.down(810)]: { height: "172px" },
			[theme.breakpoints.down(520)]: { height: "220px" },
		},
		gridBreak: {
			[theme.breakpoints.down(1039)]: { justifyContent: "center" },
		},
	}));

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const classes = useStyles();
	const isActive = useMediaQuery("(max-width: 1076px)");
	const menuBreak = useMediaQuery("(max-width: 810px)");

	return (
		// <div  id='navbar'>
		<React.Fragment>
			<HideOnScroll {...props}>
				<AppBar>
					<Toolbar className={classes.navbar}>
						<Grid container direction='row'>
							<Grid item container justify='flex-start' sm={menuBreak ? 12 : 5}>
								<Grid
									container
									alignItems='center'
									className={classes.gridBreak}
									direction='row'
								>
									<Grid item component={Link} to='/'>
										<img src={Logo} ALT='Logo' className={classes.logo} />
									</Grid>
									<Grid item className={classes.brandTitle}>
										<Typography
											component={Link}
											to='/'
											variant='h6'
											className={classes.title}
										>
											COMICS AWESOME
										</Typography>
									</Grid>
								</Grid>
							</Grid>
							<Grid
								item
								container
								alignItems='center'
								justify='flex-end'
								xs={12}
								sm
							>
								<Grid container direction='row'>
									<Grid
										item
										xs
										container
										justify={menuBreak ? "center" : "flex-end"}
									>
										<Tabs
											value={value}
											onChange={handleChange}
											centered
											indicatorColor='secondary'
											className={classes.tabsContainer}
										>
											<Tab
												component={Link}
												to='/category/shirt'
												label={isActive ? "" : "tshirt"}
												icon={
													isActive ? (
														<FontAwesomeIcon icon={faTshirt} size='lg' />
													) : (
														""
													)
												}
												className={classes.tab}
											></Tab>
											<Tab
												component={Link}
												to='/category/mug'
												label={isActive ? "" : "mugs"}
												icon={
													isActive ? (
														<FontAwesomeIcon icon={faMugHot} size='lg' />
													) : (
														""
													)
												}
												className={classes.tab}
											/>
											<Tab
												component={Link}
												to='/category/book'
												label={isActive ? "" : "comicbooks"}
												icon={
													isActive ? (
														<FontAwesomeIcon icon={faBookOpen} size='lg' />
													) : (
														""
													)
												}
												className={classes.tab}
											/>
											<Tab
												component={Link}
												to='/blog'
												label={isActive ? "" : "blog"}
												icon={
													isActive ? (
														<FontAwesomeIcon icon={faBlog} size='lg' />
													) : (
														""
													)
												}
												className={classes.tab}
											/>
										</Tabs>
										<IconButton
											edge='start'
											className={classes.menuButton}
											color='inherit'
											aria-label='menu'
											component={Link}
											to='/category/shoppingcart'
										>
											<StyledBadge
												badgeContent={props.count}
												color='secondary'
												showZero
											>
												<ShoppingCartIcon className={classes.cart} />
											</StyledBadge>
										</IconButton>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Toolbar>
				</AppBar>
			</HideOnScroll>
			<div className={classes.toolbarMargin}></div>
		</React.Fragment>
	);
}
