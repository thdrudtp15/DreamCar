
import React from "react";
import "../../css/Mainpage/ImgMotion.css"

function ImgMotion(){
    window.addEventListener("scroll",function(){
        let h = this.scrollY;
        if ( h > 800 && h < 1900){
                let y = (h - 800) * 0.03;
                let tag : HTMLElement | null = document.querySelector(".Im-area");
                if(tag){
                    tag.style.transform = `translate3d(0px, ${y}%, 0px)`
                }

                let x = 100 - ((1800 - h) * 0.04);
                let tag2 : HTMLElement | null = document.querySelector(".Im-imgWrap")
                if(tag2) {
                    tag2.style.width = `${x}%`
                }

                let s = (( 1800 - h ) * 0.0004) + 1.1 ;
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
                            <img src="https://www.ford.com/is/image/content/dam/vdm_ford/live/en_us/ford/nameplate/mustang/2024/collections/dm/24_FRD_MST_61047.tif?croppathe=1_3x2&wid=1440" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
}

export default ImgMotion;