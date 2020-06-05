
import React, { useState, useEffect } from "react";


import { withStyles, makeStyles } from "@material-ui/core/styles";

import MiniIronman from "../img/mini_ironman.png"

console.log("Hello from Checkout")

const useStyles = makeStyles((theme) => ({

	title: {
		fontFamily: "Bangers",
		fontSize: "3rem",
		textDecoration: "none",
    }
    
}));

const Checkout = (props) => {

  
  const classes = useStyles();

//   let { cartItems } = props

//   console.log("Cart Items : ", cartItems)

console.log(props);
 

        return (<>

      <div id="cartWrapper">
        
        <div id="checkoutInfo">
        <div id="checkoutPic"  className={classes.title}>
          <img src={MiniIronman} ALT="Mini Ironman"/>
        </div>
        <div id="checkoutText" className={classes.title}>
          josy, octavian & rené<br/><br/>
          thank you for the<br/>purchase<br/><br/>you are awesome !
        </div>
        </div>
        
      </div>
    </>)
  }


export default Checkout


