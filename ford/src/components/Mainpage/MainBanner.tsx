import React from "react";
import ford from "../../Img/Intro.mp4";
import "../../css/Mainpage/MainBanner.css"
import {useState,useEffect} from "react";

import img from "../../Img/ImageMotion4.jpg";
import img2 from "../../Img/ImageMotion.jpg";
import img3 from "../../Img/ImageMotion2.jpg";

function MainBanner(){
    let [imgNumber,setImgNumber] = useState(0);
    

   


    return <div className="Mb-wrap">
                <video autoPlay loop muted className="Mb-video">
                    <source src={ford} type="video/mp4"/>
                </video>
                <div className="Mb-message">MUSTANG</div>
            </div>
}

export default MainBanner;