import React from "react"
import "./style.css"
import 'antd/dist/antd.css';
import { Carousel } from 'antd';

const Slider = () =>{
    return(
        <div id="slider">
           <Carousel autoplay>
    <div>
      <img src="https://images7.alphacoders.com/512/thumb-1920-512977.jpg" alt="image1"/>
      <div className="caption-section">
      <h2 className="caption">End of Sale </h2>
      <button className="buttons">SHOP NOW</button>
        </div>  
    </div>
    <div>
    <img src="https://img3.goodfon.com/wallpaper/nbig/1/ab/iron-man-marvel-comics-294.jpg" alt="image2"/>
    <div className="caption-section">
      <h2 className="caption">End of Sale </h2>
      <button className="buttons">SHOP NOW</button>
        </div>  
    </div>
    <div>
    <img src="https://wallpapertag.com/wallpaper/full/0/1/e/865188-download-free-dc-comics-backgrounds-1920x1080-mac.jpg" alt="image3"/>
    </div>
    <div>
    <img src="https://lh3.googleusercontent.com/proxy/gK6sdHWHSe_ve8saIOWd9o6al1Rf2vWNrmpsel-YftCzkwtklkyVP_JAKs4xL7RLKQERPAMPWzOtBCcTubN7eyXqDMo8RU1dihoU62p9rS-r_-v-Y-2YxCnvhyJa1ruwiaDRynf7cN23b9V7Qi3XoOApM9FPtaqt8GL4utVdAGXdi_7MLFtMBgCOWi14jCUEg5_kd4oKDHQ72mJIfAYEK-RbCVT6pm9DvIr-6of5Uvc6xRXqw-EttBysdElgPFtHRbxuog4SRBeF17o0TtZ8j_Ty-OLvLfjmAHeLEsncwxvD1eGCo-5OVcR8VRiAAw" alt="image4"/>
    <div className="caption-section">
      <h2 className="caption">End of Sale </h2>
      <button className="buttons">SHOP NOW</button>
        </div>  
    </div>
  </Carousel>
        </div>
    )
}
export default Slider