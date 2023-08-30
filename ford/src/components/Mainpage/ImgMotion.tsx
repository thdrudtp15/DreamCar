
import React from "react";
import "../../css/Mainpage/ImgMotion.css"

import motionImg from "../../Img/ImageMotion2.jpg"

function ImgMotion(){
    window.addEventListener("scroll",function(){
        let h = this.scrollY;
        let min = 800;
        let max = 1800;
        if ( h > min && h < max){
            console.log(h);
                let y = (h - min) * 0.03;
                let tag : HTMLElement | null = document.querySelector(".Im-area");
                if(tag){
                    tag.style.transform = `translate3d(0px, ${y}%, 0px)`
                }

                let x = 100 - ((max - h) * 0.04);
                let tag2 : HTMLElement | null = document.querySelector(".Im-imgWrap")
                if(tag2) {
                    tag2.style.width = `${x}%`
                }

                let s = (( max - h ) * 0.0004) + 1.1 ;
                let tag3 : HTMLElement | null = document.querySelector(".Im-imgCont");
                if(tag3) {
                    tag3.style.transform = `scale(${s},${s})`;
                }
            }
    })
    return <div className="Im-wrap">

                <div className="Im-area">
                    <div className="Im-imgWrap">
                        <div className="Im-imgCont">
                            <img src={motionImg} alt=""/>
                        </div>
                    </div>
                </div>
        
            </div>
}

export default ImgMotion;