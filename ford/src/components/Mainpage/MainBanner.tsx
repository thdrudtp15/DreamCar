import React from "react";
import ford from "../../Img/vodeo.mp4";
import "../../css/Mainpage/MainBanner.css"

function MainBanner(){
    return <div className="Mb-wrap">
                <img src={ford} alt="" className="mb-img"></img>
            </div>
}

export default MainBanner;