import React from "react"
import "../App.css"
import 'antd/dist/antd.css';
import { Carousel } from 'antd';

const Slider = () =>{
    return(
        <div id="slider">
           <Carousel autoplay>
    <div>
      <img src="https://images7.alphacoders.com/512/thumb-1920-512977.jpg" alt="image1"/>
      <div className="caption-section">
      <h3 className="caption">End of Sale</h3>
      {/* <button className="buttons">SHOP NOW</button> */}
        </div>  
    </div>
    <div>
    <img src="https://img3.goodfon.com/wallpaper/nbig/1/ab/iron-man-marvel-comics-294.jpg" alt="image2"/>
    <div className="caption-section">
      <h2 className="caption">End of Sale </h2>
      {/* <button className="buttons">SHOP NOW</button> */}
        </div>  
    </div>
    <div>
    <img src="https://wallpapertag.com/wallpaper/full/0/1/e/865188-download-free-dc-comics-backgrounds-1920x1080-mac.jpg" alt="image3"/>
    </div>
    <div>
    <img src="https://www.ubackground.com/_ph/22/697416964.jpg" alt="image4"/>
    <div className="caption-section">
      <h2 className="caption">End of Sale </h2>
      {/* <button className="buttons">SHOP NOW</button> */}
        </div>  
    </div>
  </Carousel>
        </div>
    )
}
export default Slider