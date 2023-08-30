import "../../css/Mainpage/News.css";
import { useSelector, UseSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { setNewsPage } from "../../store";
import store from "../../store";
import newsArr from "../Mainpage/DermyData/News";


import { Cheerio } from "cheerio/lib/cheerio";
import axios from "axios";
import { useEffect } from "react";

function News() {
    const dispatch = useDispatch();
    const newsPage = useSelector((state : ReturnType<typeof store.getState >) => state.newsPage)

    function mouseUp (index : number) {

        dispatch(setNewsPage(index));

       let list : NodeList = document.querySelectorAll(".Ns-subject");
       if(list){
        for(let i = 0; i < list.length; i++){
            let tag = list[i] as Element
            tag.classList.remove("Ns-newsSelect");
        }
        let tag = list[index] as Element;
        let progress : HTMLElement | null = document.querySelector(".Ns-progress");
        if(progress){
            console.log("WLR")
            progress.style.transform = `translateX(${index * 100}%)`
        }
        tag.classList.add("Ns-newsSelect");
        } 
    }

    function suffix(index : number) : string {
        const suffixes = ["st" , "nd" , "rd" ];
        const suffix = suffixes[(index - 1) % 10] || "th";
        return index + suffix;
    }


    return <div className="Ns-wrap" id="News">
            <div className="Ns-headline">MotorSports News</div>
            <div className="Ns-newsImg">
                {/* {newsArr[newsPage].img} */}
                <img src={newsArr[newsPage].img}  alt=""/>

            </div>
            <div className="Ns-newsTab">
                <div className="infoWrap">
                {newsArr.map((data,index)=> <div key={index} className="Ns-newsInfo">
                                                <p className="siq">
                                                   {suffix(index + 1)}
                                                </p>
                                                <div  onMouseOver={()=>{mouseUp(index)}} className={index === 0 ? "Ns-subject Ns-newsSelect" : "Ns-subject"}>{data.subject}</div>
                                                <div className="Ns-date">{data.date}</div>
                                            </div>
                )}
                </div>
                
                
                <div className="Ns-progressBar">
                    <div className="Ns-progress"></div>
                </div>
            </div>
        </div>
}

export default News;