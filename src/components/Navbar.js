import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import BlurCircularIcon from "@material-ui/icons/BlurCircular";
import "../../src/styles.css";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';




export default function Navbar() {

    const [value, setValue] = React.useState(0);



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  menuButton: {
    
    marginRight: theme.spacing(2),

  },

  title: {

    flexGrow: 1,
  },

  cart: {

    marginLeft: 30,
  },

  tab: {

    minWidth: "50px",
    '&:hover': { color: "##ff8c00" },
    '&:active': { color: "#ff8c00" },
    '&:visited': { color: "#fff" },
    color: "#fff"   
    
  }
}));

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    const classes = useStyles();

  return (
    <div className={classes.root} id="navbar">
      <AppBar position="sticky">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <BlurCircularIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            CodeShop
          </Typography>
          <Tabs 
          className={classes.tab}
        value={value}
        onChange={handleChange}
        // indicatorColor="secondary"
        // textColor="#fff"
        centered
      >
        <Tab label="t-shirts"  className={classes.tab}/>
        <Tab label="mugs"  className={classes.tab}/>
        <Tab label="comicbooks" className={classes.tab}/>
        <Tab label="blog" className={classes.tab}/>
      </Tabs>
      <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <ShoppingCartIcon className={classes.cart}/>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}