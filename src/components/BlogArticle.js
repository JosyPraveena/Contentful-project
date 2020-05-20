import React, { useState, useEffect } from "react";
// import "/src/styles.css";
import { makeStyles } from "@material-ui/core/styles";

// m-UI-cards
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";

import image1 from "../img/1.jpg";

export default function BlogArticle() {
  const useStyles = makeStyles({
    root: {
      width: 800
    },
    orange: {
      backgroundColor: "#f00"
    }
  });

  const [data, setData] = useState(null);
  const [isFetched, setIsFetched] = useState(false);
  const [blogTitle, setBlogTitle] = useState(null);
  const [blogSubtitle, setBlogSubtitle] = useState(null);
  const [blogDate, setBlogDate] = useState(null);
  const [blogContent, setBlogContent] = useState(null);

  // const [blogContent, setBlogContent] = useState(null);

  // const [blogDate, setBlogDate] = useState(null);

  // const [blogimage, setBlogImage] = useState(null);

  useEffect(() => {
    const contentful = require("contentful");
    const client = contentful.createClient({
      space: "judmcnqfm2ry",

      accessToken: "Cpz2_8v_83-s3bHAYAP1a8mUV1fkFUuT7MEK3UsW-Wg"
    });

    client
      .getEntries({ content_type: "blog" })
      // .then(entry => console.log(entry.items[0].fields.blogTitle))
      .then(entry => setData(entry.items[0].fields))
      // .then(entry => console.log(entry.items[0].fields.blogId))

      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    if (data != null) {
      const {
        blogId,
        blogTitle,
        blogSubtitle,
        blogDate,
        blogAuthor,
        blogContent
      } = data;

      console.log(
        blogId,
        blogTitle,
        blogSubtitle,
        blogDate,
        blogAuthor,
        blogContent
      );

      setBlogTitle(blogTitle);
      setBlogSubtitle(blogSubtitle);
      setBlogDate(blogDate);
      setBlogContent(blogContent);
    }
  }, [data]);

  const classes = useStyles();

  return (
    <>
      <div>
        <div className="cat-container" id="theBlog">
          <div className="cat-item">
            <Card className={classes.root}>
              <CardActionArea>
                <CardHeader
                  avatar={<Avatar className={classes.orange}>RW</Avatar>}
                  title={blogTitle}
                  subheader={blogDate}
                />

                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="200"
                  image={image1}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">
                    {blogSubtitle}
                  </Typography>

                  <Typography variant="body2" color="textSecondary">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Chip
                    avatar={<Avatar>#</Avatar>}
                    size="small"
                    label="MUGS"
                    onClick=""
                  />
                  <Chip
                    avatar={<Avatar>#</Avatar>}
                    size="small"
                    label="T-SHIRTS"
                    onClick=""
                  />
                  <Chip
                    avatar={<Avatar>#</Avatar>}
                    size="small"
                    label="COMICS"
                    onClick=""
                  />
                  <Chip
                    avatar={<Avatar>#</Avatar>}
                    size="small"
                    label="WBS"
                    onClick=""
                  />
                </CardActions>
              </CardActionArea>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
