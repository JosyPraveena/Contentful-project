import React from "react";
import "../App.css";
import { SocialIcon } from "react-social-icons";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useMediaQuery } from "@material-ui/core";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
	btn: {
		marginTop: "30px",
		fontFamily: "Roboto",
		display: "inline-block",
		textDecoration: "none",
		border: "3px solid white",
		padding: "15px 30px",
		// borderRadius: "50px 5px 50px 5px",
		cursor: "pointer",
		color: "white",
		fontWeight: "bold",
		textTransform: "uppercase",
		transition: "all 0.4s ease",
		"&:hover": {
			transform: "translateY(-5px)",
			boxShadow: "0px 5px 20px 4px rgba(230, 36, 41, 0.5) ",
			background: "#e62429",
			borderRadius: "50px 5px 50px 5px",
		},
		"&:active": {
			transform: "translateY(-2px)",
			boxShadow: "0px 3px 15px 3px rgba(230, 36, 41, 0.5) ",
		},
	},

	input: {
		color: "#fff",
	},

	subscribe: {
		"& label.Mui-focused": {
			color: "white",
		},
		"& .MuiInput-underline:after": {
			borderBottomColor: "green",
		},
		"& .MuiOutlinedInput-root": {
			"& fieldset": {
				borderColor: "white",
			},
			"&:hover fieldset": {
				borderColor: "white",
				boxShadow: "0px 3px 15px 3px rgba(230, 36, 41, 0.5) ",
			},
			"&.Mui-focused fieldset": {
				borderColor: "white",
				boxShadow: "0px 3px 15px 3px rgba(230, 36, 41, 0.5) ",
			},
		},
	},

	socialIcon: {
		transition: "all 0.2s ease-in-out",
		"&:hover": {
			transform: "translateY(-5px)",
		},
	},

	footerTitle: {
		color: "#fff",
		textTransform: "uppercase",
		fontWeight: "600",
		marginBottom: "20px",
		fontSize: "1.4rem",
	},

	footerContainer: {
		height: "auto",
		width: "100%",
		marginTop: "100px",
		backgroundColor: "#202020",
		padding: "20px 50px",
	},

	subContainer: {
		margin: "30px 10px",
	},

	links: {
		letterSpacing: "1.4px",
		transition: "all 0.3s ease-in-out",
		"&:visited": { color: "#fff" },
		color: "#fff",
		fontFamily: "Roboto",
		fontSize: "0.9rem",
		fontWeight: "600",
		textTransform: "uppercase",
		cursor: "pointer",

		"&:hover": {
			transition: "all 0.3s ease-in-out",
			color: "#e62429",
		},
	},
});

const Footer = () => {
	const classes = useStyles();
	const breakPoint = useMediaQuery("(max-width: 650px)");
	const socialBp = useMediaQuery("(max-width: 770px)");
	return (
		<Grid
			container
			className={classes.footerContainer}
			xs={12}
			justify='space-between'
		>
			<Grid xs={breakPoint ? 12 : "auto"} className={classes.subContainer}>
				<Grid container direction='column' alignItems={breakPoint && "center"}>
					<Grid item>
						<Typography className={classes.footerTitle}>Categories</Typography>
					</Grid>
					<Grid item>
						<Typography
							component={Link}
							to='/category/shirt'
							className={classes.links}
						>
							T-Shirts
						</Typography>
					</Grid>
					<Grid item>
						<Typography
							component={Link}
							to='/category/book'
							className={classes.links}
						>
							Comic Books
						</Typography>
					</Grid>
					<Grid item>
						<Typography
							component={Link}
							to='/category/mug'
							className={classes.links}
						>
							Mugs
						</Typography>
					</Grid>
				</Grid>
			</Grid>

			<Grid xs={breakPoint ? 12 : "auto"} className={classes.subContainer}>
				<Grid container direction='column' alignItems={breakPoint && "center"}>
					<Grid item>
						<Typography className={classes.footerTitle}>Get Awesome</Typography>
					</Grid>
					<Grid item>
						<TextField
							className={classes.subscribe}
							id='outlined-secondary'
							label='Awesome E-mail'
							variant='outlined'
							color='secondary'
							inputProps={{ className: classes.input }}
							InputLabelProps={{ className: classes.input }}
						/>
					</Grid>
					<Grid item>
						<div className={classes.btn} onClick={() => alert("subscribed")}>
							Subscribe
						</div>
					</Grid>
				</Grid>
			</Grid>

			<Grid item xs={socialBp ? 12 : "auto"} className={classes.subContainer}>
				<Grid
					container
					direction='column'
					justify='center'
					alignItems={socialBp && "center"}
				>
					<Grid item>
						<Typography className={classes.footerTitle}>
							Connect with us{" "}
						</Typography>
					</Grid>
					<Grid item>
						<Grid container spacing={2}>
							<Grid item>
								<SocialIcon
									className={classes.socialIcon}
									url='http://twitter.com'
									fgColor='#fff'
								/>
							</Grid>
							<Grid item>
								<SocialIcon
									className={classes.socialIcon}
									url='http://facebook.com'
									fgColor='#fff'
								/>
							</Grid>
							<Grid item>
								<SocialIcon
									url='http://instagram.com'
									fgColor='#fff'
									bgColor='#FF69B4'
									className={classes.socialIcon}
								/>
							</Grid>
							<Grid item>
								<SocialIcon
									className={classes.socialIcon}
									url='http://youtube.com'
									fgColor='#fff'
								/>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Footer;
