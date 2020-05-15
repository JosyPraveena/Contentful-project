import React from "react"
import "../App.css"
import {SocialIcon} from "react-social-icons"

const Footer = () => {

return(
    <>
    <div id="footer">
        <div  id="footer-content-left">
    <input type="text" placeholder="Email address" name="mail" required/>
    <button id="subscribe">Subscribe</button>
    </div>
    <div id="footer-content-right">
    <h2>Connect with us</h2>
    <div id="social-icons">
    <SocialIcon url="http://twitter.com" fgColor="#fff"/>
    <SocialIcon url="http://facebook.com" fgColor="#fff" />
    <SocialIcon url="http://instagram.com"fgColor="#fff" bgColor="#FF69B4"/>
    <SocialIcon url="http://youtube.com"fgColor="#fff"/>
    </div>
    </div>
    </div>
    </>
)
}

export default Footer;