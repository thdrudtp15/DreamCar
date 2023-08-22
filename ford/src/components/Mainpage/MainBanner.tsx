import React from "react";
import ford from "../../Img/Intro.mp4";
import "../../css/Mainpage/MainBanner.css"

function MainBanner(){
    return <div className="Mb-wrap">
                <video autoPlay loop muted className="Mb-video">
                    <source src={ford} type="video/mp4"/>
                </video>
                <div className="Mb-message">MUSTANG</div>
            </div>
}

export default MainBanner;