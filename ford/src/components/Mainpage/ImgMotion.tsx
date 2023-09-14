
import React from "react";
import "../../css/Mainpage/ImgMotion.css"

import motionImg from "../../Img/ImageMotion.jpg"

function ImgMotion(){
    window.addEventListener("scroll",function(){
        let h = this.scrollY;
        let min = 800;
        let max = 1800;
        if ( h > min){
            // console.log(h);
                let y = (h - min) * 0.03;
                let tag : HTMLElement | null = document.querySelector(".Im-area");
                if(tag && y < 31){
                    tag.style.transform = `translate3d(0px, ${y}%, 0px)`
                }

                let x = 100 - ((max - h) * 0.04);
                let tag2 : HTMLElement | null = document.querySelector(".Im-imgWrap")
                if(tag2 && x < 103) {
                    tag2.style.width = `${x}%`
                }

                let s = (( max - h ) * 0.0004) + 1.1 ;
                let tag3 : HTMLElement | null = document.querySelector(".Im-imgCont");
                if(tag3 && s < 1.3 && s > 1.1 &&  h > min && h < max) {
                    tag3.style.transform = `scale(${s},${s})`;
                }
            }else{
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