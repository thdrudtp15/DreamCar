import "../../css/Mainpage/Timeline.css"
import { useSelector,useDispatch } from "react-redux";
import { changeContent,changeImg } from "../../store";
import {MdOutlineArrowForwardIos} from "react-icons/md";
import React, { useEffect,useState } from "react";
import store from "../../store";
import Array from "./DummyData/Timeline";

import { sliding } from "../../store";

function Timeline () {
    const dispatch = useDispatch();
    let [ySize,setYSize] = useState(0);

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
            let y = document.body.offsetWidth;
            setYSize(y);
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
    },[ySize])
    

    let  now = useSelector((state : {slideWidth : number}) => state.slideWidth);

    function slideMove(move : string) : void {
        let BoxElement : HTMLElement | null = document.querySelector(".Tl-slideBox");
        let Element : HTMLElement | null = document.querySelector(".Tl-slide");
        let moveValue  = 165;
        if(BoxElement){
            boxWidth = BoxElement.offsetWidth;
        }

        if(Element) {
            width = Element.offsetWidth;
            console.log(width -boxWidth);
            console.log(now);
            if(move === "R" && now < width - boxWidth){
                Element.style.transform = `translateX(-${now + moveValue}px)`
                dispatch(sliding(now + moveValue))
            }else if(move === "L" && now > 0 ) {
                Element.style.transform = `translateX(-${now - moveValue}px)`
                dispatch(sliding(now - moveValue))
                
            }
        }else{
            
        }
       

    }


    function selectModel(index : number){
        let modelTag = document.querySelectorAll(".contentContainer")
        dispatch(changeImg(index));
        if(modelTag instanceof NodeList){
            for(let i = 0; i < modelTag.length; i++){
                if(i === index){
                    modelTag[i].classList.add("selectModel");
                }else{
                    modelTag[i].classList.remove("selectModel");
                }
            }
        }
    }



    //?는 선택적 타입 있어도 되고 없어도 되고
    //style 속성을 사용하기 위해선 타입을 HTMLElement로 지정해야 한다.


    let content = useSelector((state : {slideContent : number}) => state.slideContent);
    let img = useSelector((state : {slideImg : number}) => state.slideImg);

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
                                                                    <div key={i} className={`contentContainer ${i === 0 && "selectModel"}`} onClick={()=>{selectModel(i)}}>
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