import React from "react";
import "../App.css";
import { SocialIcon } from "react-social-icons";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";

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

	footerTitle: {
		color: "#fff",
		textTransform: "uppercase",
		fontWeight: "600",
		marginBottom: "20px",
		fontSize: "1.4rem",
	},

	footerContainer: {
		position: "relative",
		height: "300px",
		width: "100%",
		marginTop: "100px",
		backgroundColor: "#202020",
		zIndex: 1302,
	},

	footer: {
		position: "absolute",
	},

	subContainer: {
		marginLeft: "150px",
		marginTop: "50px",
	},

	links: {
		color: "#fff",
		fontSize: "1.1rem",
		cursor: "pointer",
	},
});

const Footer = () => {
	const classes = useStyles();
	return (
		<footer className={classes.footerContainer}>
			<Grid container className={classes.footer} xs={12}>
				<Grid item xs={3} className={classes.subContainer}>
					<Grid container direction='column'>
						<Grid item>
							<Typography className={classes.footerTitle}>
								Categories
							</Typography>
						</Grid>
						<Grid item>
							<Typography className={classes.links}>T-Shirts</Typography>
						</Grid>
						<Grid item>
							<Typography className={classes.links}>Comic Books</Typography>
						</Grid>
						<Grid item>
							<Typography className={classes.links}>Mugs</Typography>
						</Grid>
					</Grid>
				</Grid>

				<Grid item xs={3} className={classes.subContainer}>
					<Grid container direction='column'>
						<Grid item>
							<Typography className={classes.footerTitle}>
								Get Awesome
							</Typography>
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

				<Grid item xs={3} className={classes.subContainer}>
					<Grid container direction='column' justify='center'>
						<Grid item>
							<Typography className={classes.footerTitle}>
								Connect with us{" "}
							</Typography>
						</Grid>
						<Grid item>
							<Grid container spacing={2}>
								<Grid item>
									<SocialIcon url='http://twitter.com' fgColor='#fff' />
								</Grid>
								<Grid item>
									<SocialIcon url='http://facebook.com' fgColor='#fff' />
								</Grid>
								<Grid item>
									<SocialIcon
										url='http://instagram.com'
										fgColor='#fff'
										bgColor='#FF69B4'
									/>
								</Grid>
								<Grid item>
									<SocialIcon url='http://youtube.com' fgColor='#fff' />
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</footer>
	);
};

export default Footer;
