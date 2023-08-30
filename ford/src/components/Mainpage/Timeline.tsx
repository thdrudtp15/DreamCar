import "../../css/Mainpage/Timeline.css"
import { useSelector,useDispatch } from "react-redux";
import { changeContent,changeImg } from "../../store";
import {MdOutlineArrowForwardIos} from "react-icons/md";
import React, { Dispatch, useEffect,useState } from "react";
import store from "../../store";
import Array from "./DermyData/Timeline";
import { url } from "inspector";

import { sliding } from "../../store";

function Timeline () {
    const dispatch = useDispatch();

    function timeSelect(x : number ) : void {
        const enableBtn : NodeList| null = document.querySelectorAll(".Tl-slideBtn");
        dispatch(changeImg(0));
        if(enableBtn.length > 0){
           enableBtn.forEach((data)=>{
                if(data instanceof Element){
                    data.classList.remove("Tl-btnEnable");
                }
           })
           let tag = enableBtn[x] as Element;
           tag.classList.add("Tl-btnEnable");
        }
        dispatch(changeContent(x));
    }

    let [boxWidth, setBoxWidth] = useState(0);
    let [width, setWidth] = useState(0);
    
    


    useEffect(()=>{
        function event(){
            let BoxElement : HTMLElement | null = document.querySelector(".Tl-slideBox");
            let Element : HTMLElement | null = document.querySelector(".Tl-slide");
            if(BoxElement){
                setBoxWidth(BoxElement.offsetWidth);
            }
            if(Element){
                setWidth(Element.offsetWidth);
            }
            
        }
        window.addEventListener("resize",event);

        return ()=> { window.removeEventListener("resize",event)}
    },[])
    

    let  now = useSelector((state :reduxType) => state.slideWidth);

    function slideMove(move : string) : void {
        let BoxElement : HTMLElement | null = document.querySelector(".Tl-slideBox");
        let Element : HTMLElement | null = document.querySelector(".Tl-slide");
        let moveValue  = 165;
        if(BoxElement){
            console.log("있다");
            boxWidth = BoxElement.offsetWidth;
        }

        if(Element) {
            width = Element.offsetWidth;
            console.log(width -boxWidth);
            console.log(now);
            if(move === "R" && now < width - boxWidth){
                console.log("오른쪽")
                Element.style.transform = `translateX(-${now + moveValue}px)`
                dispatch(sliding(now + moveValue))
               
            }else if(move === "L" && now > 0 ) {
                console.log("왼쪽")
                Element.style.transform = `translateX(-${now - moveValue}px)`
                dispatch(sliding(now - moveValue))
                
            }
        }else{
            console.log("아 왜 안되냐고");
        }
       

    }




    //?는 선택적 타입 있어도 되고 없어도 되고
    //style 속성을 사용하기 위해선 타입을 HTMLElement로 지정해야 한다.


    type reduxType = ReturnType<typeof store.getState>
    let content = useSelector((state : reduxType) => state.slideContent);
    let img = useSelector((state : reduxType) => state.slideImg);

    return <div className="Tl-wrap">
                <div className="Tl-time">

                    <div className="Tl-slideBox">
                        <div className="Tl-slide">
                            {Array.map((a, i)=>{
                                return <div className={i === 0 ? "Tl-slideBtn Tl-btnEnable" : "Tl-slideBtn"} key={i} onClick={()=>{timeSelect(i)}}>
                                         {a.generationTime}
                                       </div>
                            })}
                        </div>
                    </div>
                    </div>
                    <div className="Arrow L" onClick={()=>{slideMove("L")}}><MdOutlineArrowForwardIos/></div>
                    <div className="Arrow R" onClick={()=>{slideMove("R")}}><MdOutlineArrowForwardIos/></div>
                <div className="Tl-content">
                    {Array.map((data,index)=> content === index && 
                    <div>
                        <div key={index}  className="Tl-leftContent">
                                                            <div>
                                                            {data.modelTime.map((data,i) => 
                                                                    <div key={i} className="contentContainer" onClick={()=>{dispatch(changeImg(i))}}>
                                                                        {/*모델명 */}
                                                                        <div className="Tl-modelTime">{data.name}</div>
                                                                         {/*모델설명 */}
                                                                        {data.explanation.map((data,i)=>{
                                                                            return <div className="Tl-explanation" key={i}>■ {data}</div>
                                                                        })
                                                                        }
                                                                    </div>
                                                                )}
                                                             </div>
                        </div>
                        <div className="Tl-rightContent">
                             {data.modelTime.map((data,index)=>{
                                return <div key={index}>{index === img && <div>{data.photo.map((data,index)=>{return <img key={index} src={data} className="modelImg" alt=""/>})}</div> }</div>
                             })}
                        </div>      
                        <div style={{clear:"both"}}></div>                                              
                    </div>
                                                        )}
                </div>
           </div>
}

export default Timeline;