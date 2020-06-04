import React, { useState, useEffect } from "react";
// import "/src/styles.css";
import { makeStyles } from "@material-ui/core/styles";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

// m-UI-cards
import Button from "@material-ui/core/Button";
// import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import CardHeader from "@material-ui/core/CardHeader";
// import CardActions from "@material-ui/core/CardActions";
// import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import TodayIcon from "@material-ui/icons/Today";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import FavoriteIcon from "@material-ui/icons/Favorite";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import LinkIcon from "@material-ui/icons/Link";

// import Chip from "@material-ui/core/Chip";
// import FaceIcon from "@material-ui/icons/Face";
import image1 from "../img/1.jpg";

import { useParams } from "react-router-dom";
import parse from "html-react-parser";

const BlogDetails = ({ blogData }) => {
	const { id } = useParams();

	console.log("Get Details from ID : ", id);
	// const { items } = blogData;
	console.log("Hello from items : ", blogData);

	const useStyles = makeStyles((theme) => ({
		image: {
			width: "95%",
			height: "auto",
			// overflow: "hidden",
			margin: "auto",
			marginTop: "30px",
			marginBottom: "20px",
		},
		img: {
			maxWidth: "100%",
			maxHeight: "500px",
			borderRadius: "10px",
		},

		root: {
			width: 450,
		},
		orange: {
			backgroundColor: "#f00",
		},
		small: {
			width: theme.spacing(3),
			height: theme.spacing(3),
		},
		title: {
			textTransform: "uppercase",

			fontSize: "1.2rem",
			fontFamily: "Montserrat",
			fontWeight: 900,
			color: "#294A55",
			textDecoration: "none",
		},
		subtitle: {
			fontSize: "1rem",
			fontFamily: "Montserrat",
			fontWeight: 400,
			color: "#294A55",
			textDecoration: "none",
		},
		content: {
			fontSize: "1rem",
			fontFamily: "Montserrat",
			fontWeight: 400,
			color: "#294A55",
			textDecoration: "none",
		},
		info: {
			fontSize: "1rem",
			fontFamily: "Montserrat",
			fontWeight: 400,
			color: "#294A55",
			textDecoration: "none",
		},
	}));

	const classes = useStyles();

	if (blogData) {
		return (
			<>
				{blogData
					.filter((item) => item.blog_id == id)
					.map((item) => (
						<div id='blogDetailWrapper'>
							<div id='blogDetailBox'>
								<div id='blogDetailTitle' className={classes.title}>
									{item.blog_title}
								</div>
								<div id='blogDetailSubtitle' className={classes.subtitle}>
									{item.blog_subtitle}
								</div>
								<div className={classes.image}>
									<img src={item.blog_image} className={classes.img} ALT='x' />
								</div>
								<div id='blogDetailInfo'>
									<div id='blogDetailInfoLeft' className={classes.info}>
										<Avatar
											alt='{item.blog_author}'
											src={item.blog_avatar}
											className={classes.small}
										/>
										<div id='blogDetailSpacer'></div>
										{item.blog_author}
									</div>
									<div id='blogDetailInfoRight' className={classes.info}>
										<TodayIcon />
										<div id='blogDetailSpacer'></div>
										{item.blog_date}
									</div>
								</div>
								<div id='blogDetailContent' className={classes.content}>
									{
										// item.fields.blogContent.content.map( (entry) => documentToReactComponents(entry))
										parse(item.blog_content)

										// (<p>{entry.content.map( (more) => more.value)}</p>)
									}
								</div>
								<div id='blogDetailSocial'>
									<div id='socialLeft'>
										<div className='socialSpacer'>
											<Button size='small' color='primary' variant='contained'>
												FOLLOW {item.blog_author}
											</Button>
										</div>
										<div className='socialSpacer'>
											<FavoriteIcon />
										</div>
										<div className='socialSpacer'>
											<InsertCommentIcon />
										</div>
									</div>
									<div id='socialRight'>
										<div className='socialSpacer'>
											<TwitterIcon />
										</div>
										<div className='socialSpacer'>
											<WhatsAppIcon />
										</div>
										<div className='socialSpacer'>
											<InstagramIcon />
										</div>
										<div className='socialSpacer'>
											<LinkIcon />
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
			</>
		);
	} else {
		return null;
	}
};

export default BlogDetails;
