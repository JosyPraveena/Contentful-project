import React, { useState, useEffect } from "react";
// import "/src/styles.css";
import { makeStyles } from "@material-ui/core/styles";

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

// m-UI-cards
import Button from "@material-ui/core/Button"
// import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import CardHeader from "@material-ui/core/CardHeader";
// import CardActions from "@material-ui/core/CardActions";
// import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import TodayIcon from '@material-ui/icons/Today';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import FavoriteIcon from '@material-ui/icons/Favorite';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import LinkIcon from '@material-ui/icons/Link';

// import Chip from "@material-ui/core/Chip";
// import FaceIcon from "@material-ui/icons/Face";
import image1 from "../img/1.jpg";

import { useParams } from "react-router-dom";



const BlogDetails = ({ blogData }) => {

  const { id } = useParams();
  console.log("Hello from Details : ", id)
  const { items } = blogData;
  console.log("Hello from items : ", items)

  const useStyles = makeStyles((theme) => ({
    root: {
      width: 450
    },
    orange: {
      backgroundColor: "#f00"
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
    
    }
,    content: {

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
    
    }
  }));

  // let ISO = DateTime.fromISO(fields.blogDate)
  // const day=['','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
  // const month=['','January','February','March','April','May','June','July','August','September','October','November','December']

  const classes = useStyles();
  console.log(items)

      // console.log("Result : ",res[0].fields.blogId)

  return (
    <>   

{ 
items
.filter( item => { if (item.fields.blogId === id) {  return item }} )
.map(item => 


<div id="blogDetailWrapper">

<div id="blogDetailBox">

  <div id="blogDetailTitle" className={classes.title}>{item.fields.blogTitle}</div>
  <div id="blogDetailSubtitle" className={classes.subtitle}>{item.fields.blogSubtitle}</div>
  <div id="blogDetailPic"><img src={item.fields.blogImage.fields.file.url} ALT="x"/></div>
  <div id="blogDetailInfo">

      <div id="blogDetailInfoLeft" className={classes.info}><Avatar alt="{item.fields.blogAuthor}" src={item.fields.blogAvatar.fields.file.url} className={classes.small} /><div id="blogDetailSpacer"></div>{item.fields.blogAuthor}</div>
      <div id="blogDetailInfoRight" className={classes.info}><TodayIcon /><div id="blogDetailSpacer"></div>{item.fields.blogDate}</div>

  </div>
  <div id="blogDetailContent" className={classes.content}>{
                
                            item.fields.blogContent.content.map( (entry) => documentToReactComponents(entry))
                
                            // (<p>{entry.content.map( (more) => more.value)}</p>)
                
                }</div>
  <div id="blogDetailSocial">
    
  <div id="socialLeft">    
      <div className="socialSpacer"><Button size="small" color="primary" variant="contained">
  FOLLOW {item.fields.blogAuthor}
</Button></div>
    <div className="socialSpacer"><FavoriteIcon/></div>
    <div className="socialSpacer"><InsertCommentIcon/></div>
    </div>
    <div id="socialRight">    
    <div className="socialSpacer"><TwitterIcon/></div>
    <div className="socialSpacer"><WhatsAppIcon/></div>
    <div className="socialSpacer"><InstagramIcon/></div>
    <div className="socialSpacer"><LinkIcon/></div>
    </div>
    
  </div>

</div>


</div>


)

}


 
    </>
  );
}


export default BlogDetails;