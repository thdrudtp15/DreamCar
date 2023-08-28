import React, { Dispatch, useEffect } from "react";
import "../../css/common/Navbar.css"
import logo from "../../Img/mustangLogo.png";
import { FaBars } from 'react-icons/fa';
import {BsArrowRightShort} from 'react-icons/bs';
import {IoMdClose} from 'react-icons/io';
import {AiOutlineInstagram,AiOutlineYoutube} from 'react-icons/ai';
import {BiLogoFacebook,BiLinkExternal} from 'react-icons/bi';

import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import store from "../../store";

//사이드바 오픈 세터함수
import { setNavStatus,setNavbar } from "../../store";


function Navbar(){
    const dispatch = useDispatch();
    let navStatus = useSelector((state : ReturnType<typeof store.getState> )=> state.navbar)
    let lastScroll = 0;


    useEffect(()=>{
        function scrollEvnt(){
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
    const barArr : string[] = ["AboutUs", "History" , "News"];

    return <div className={`nav-wrap ${navStatus}`}>
            <header className="nav-bar">
                <div className="nav-logo">
                    {/* <img src={logo} alt=""></img> */}
                    <span style={{fontSize: "40px",fontWeight:"bold",transform : "skew(-25deg)"}}>FORD</span>
                </div>
                <div className="nav-controlBox">
                    <Bar arr={barArr}/>
                    <div className="nav-minIcon">
                        <span onClick={()=>dispatch(setNavStatus("open"))}><FaBars/></span>
                    </div>
                </div>
            </header>
                    <Bar2 arr={barArr} dispatch={dispatch}/>
            </div>
}

export default Navbar;


function Bar ({arr} : { arr : string[]}){
    return (
        <>
            {arr.map((a,index)=>{
                return( 
                    <div className="nav-btn" key={index}>
                        <span>{a}</span>
                    </div>
                )
                })}
        </>
    )
}

function Bar2 ({arr, dispatch} : {arr : string[]; dispatch : Dispatch<any>}) {


    const sidebarSatus  = useSelector((state: any) => state.sidebarOpen)
    

    if(sidebarSatus === "sidebar-open"){
        document.body.style.overflow = "hidden";
    }else {
        document.body.style.overflow = "visible";
    }


    type snsArrType = {icon : React.ReactElement ,path : string}[];
    type siteArrType = {title : string, path : string}[]

    const snsArr : snsArrType= [{icon : <AiOutlineInstagram/>, path : "https://www.instagram.com/ford_mustang.usa/" },
                                { icon : <BiLogoFacebook/> , path : "https://www.facebook.com/fordmustang/"},
                                { icon : <AiOutlineYoutube/> , path : "https://www.youtube.com/@ford"}]

    const siteArr : siteArrType = [{title : "Ford", path :"https://www.ford.com/"},
                                   {title : "Ford Perfomance", path : "https://performance.ford.com/"},
                                   { title : "Shelby" , path : "https://www.shelby.com/en-us/" }] 

    return(
        <div className={`side-bar ${sidebarSatus}`}>
            <div className="side-topBox">
                <div className="side-header">
                    <div className="side-lang">
                        <span>KOREAN</span>
                        <span>/</span>
                        <span style={{color : "silver"}}>ENG</span>
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
                        <span>{a}</span>
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

