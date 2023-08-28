import "../../css/Mainpage/Timeline.css"
import { useSelector,useDispatch } from "react-redux";
import { changeContent,changeImg } from "../../store";
import store from "../../store";
import Array from "./DermyData/Timeline";
import { url } from "inspector";

function Timeline () {
    const dispatch = useDispatch();
   
    function slideMove(x : number ) : void {
        //슬라이드 부분 어떻게 만들지 고민 해보기...
        const slideTag : HTMLElement | null = document.querySelector(".Tl-slide");
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

    //?는 선택적 타입 있어도 되고 없어도 되고
    //style 속성을 사용하기 위해선 타입을 HTMLElement로 지정해야 한다.


    type reduxType = ReturnType<typeof store.getState>
    let content = useSelector((state : reduxType) => state.slideContent);
    let img = useSelector((state : reduxType) => state.slideImg);
    console.log(img);
    return <div className="Tl-wrap">
                <div className="Tl-time">

                    <div className="Tl-slideBox">
                        <div className="Tl-slide">
                            {Array.map((a, i)=>{
                                return <div className={i === 0 ? "Tl-slideBtn Tl-btnEnable" : "Tl-slideBtn"} key={i} onClick={()=>{slideMove(i)}}>
                                         {a.generationTime}
                                       </div>
                            })}
                        </div>
                    </div>
                    </div>
                <div className="Tl-content">
                    {Array.map((a,i)=> content === i && 
                    <div>
                        <div key={i}  className="Tl-leftContent">
                                                            <div>
                                                            {a.modelTime.map((data,i) => 
                                                                    <div key={i} className="contentContainer" onClick={()=>{dispatch(changeImg(i))}}>
                                                                        {/*모델명 */}
                                                                        <div className="Tl-modelTime">{data.name}</div>
                                                                         {/*모델설명 */}
                                                                        {data.explanation.map((data,i)=>{
                                                                            return <div className="Tl-explanation" key={i}>●{data}</div>
                                                                        })
                                                                        }
                                                                    </div>
                                                                )}
                                                             </div>
                        </div>
                        <div className="Tl-rightContent">
                             {a.modelTime.map((data,index)=>{
                                return <div>{index === img && <div>{data.photo.map((data,index)=>{return <img key={index} src={data} className="modelImg" alt=""/>})}</div> }</div>
                             })}
                        </div>      
                        <div style={{clear:"both"}}></div>                                              
                    </div>
                                                        )}
                </div>
           </div>
}

export default Timeline;