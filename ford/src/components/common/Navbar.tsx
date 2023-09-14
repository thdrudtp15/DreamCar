import React, { Dispatch, useEffect } from "react";
import "../../css/common/Navbar.css"
import logo from "../../Img/mustangLogo.png";
import { FaBars } from 'react-icons/fa';
import {BsArrowRightShort} from 'react-icons/bs';
import {IoMdClose} from 'react-icons/io';
import {AiOutlineInstagram,AiOutlineYoutube} from 'react-icons/ai';
import {BiLogoFacebook,BiLinkExternal} from 'react-icons/bi';
import siteArr from "./DummyData/siteArr";
import snsArr from "./DummyData/snsArr";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


//사이드바 오픈 세터함수
import { setNavStatus,setNavbar } from "../../store";


function Navbar(){
    const dispatch = useDispatch();
    let navStatus = useSelector((state : {navbar : string} )=> state.navbar)
    let lastScroll = 0;


    useEffect(()=>{
        function scrollEvnt(){
            dispatch(setNavStatus("close"));
            let now = window.scrollY;
            if(now > lastScroll){
                dispatch(setNavbar("nav-barDown"));
            }else if(now < lastScroll){
                if(now === 0) {
                    dispatch(setNavbar(""));
                }else
                dispatch(setNavbar("nav-barUp"))
            }
            
            //0이 되면 초기화
            lastScroll = now <= 0 ? 0 : now;
        }

        window.addEventListener("scroll",scrollEvnt);
        return ()=> window.removeEventListener("scroll",scrollEvnt);
    },[])


    const barArr : string[] = ["About", "History" , "News"];

    return  <div> 
        <div className={`nav-wrap ${navStatus}`}>
            <header className="nav-bar">
                <div className="nav-logo">
                    <span style={{fontSize: "40px",fontWeight:"bold",transform : "skew(-25deg)"}}>FORD</span>
                </div>
                <div className="nav-controlBox">
                    <Bar arr={barArr} dispatch={dispatch}/>
                    <div className="nav-minIcon">
                        <span style={{color : "#eee"}} onClick={()=>dispatch(setNavStatus("open"))}><FaBars/></span>
                    </div>
                </div>
            </header>        
            </div>
            <Bar2 arr={barArr} dispatch={dispatch}/>
            </div>
}

export default Navbar;


function Bar ({arr,dispatch} : { arr : string[], dispatch : Dispatch<any>}){
    return (
        <>
            {arr.map((a,index)=>{
                return( 
                    <div className="nav-btn" key={index}>
                        <a href={`#${a}`} onClick={(()=>{dispatch(setNavbar("nav-barDown"));})}>{a}</a>
                    </div>
                )
                })}
        </>
    )
}

function Bar2 ({arr, dispatch} : {arr : string[]; dispatch : Dispatch<any>}) {
    const sidebarSatus  = useSelector((state: any) => state.sidebarOpen)
    
    return(
        <div className={`side-bar ${sidebarSatus}`}>
            <div className="side-topBox">
                <div className="side-header">
                    <div className="side-lang">
                    </div>
                    <div className="side-cancel">
                        <span onClick={()=>{
                            dispatch(setNavStatus("close"));
                        }}>
                        <IoMdClose />
                        </span>
                    </div>
                </div>
                {arr.map((a,i)=> 
                    <div className="side-btn" key={i}>
                        <a href={`#${a}`}>{a}</a>
                        <span className="side-ArrowBox">
                            <span className="side-Arrow">
                                <BsArrowRightShort />
                            </span>
                        </span>
                    </div>
                    )}
            </div>
            <div className="side-bottomBox">
                <div className="side-btTop">
                    {siteArr.map((a,i)=><a className="site" key={i} href={`${a.path}`}>{a.title}
                                            <span className="link-icon">
                                                <BiLinkExternal/>
                                            </span>
                                        </a>)}
                </div>
                <div className="side-btBt">
                    {snsArr.map((a,i)=> 
                            <div className="sns" key={i}>
                                <a className="snsBox" href={`${a.path}`}>
                                {a.icon}
                                </a>
                            </div> 
                    )} 
                </div>
            </div>
        </div>
    ) 
}

