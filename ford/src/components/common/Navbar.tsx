import React from "react";
import "../../css/common/Navbar.css"
import logo from "../../Img/mustangLogo.png";
import { UseSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";



function Navbar(){
    return <div className="nav-wrap">
            <header className="nav-bar">
                <div className="nav-logo">
                    <img src={logo} alt=""></img>
                </div>
                <div className="nav-controlBox">
                    <div className="nav-btn"><span>AboutUs</span></div>
                    <div className="nav-btn"><span>History</span></div>
                    <div className="nav-btn"><span>News</span></div>
                    <div className="nav-minIcon"><span>M</span></div>
                </div>
            </header>
            <div className="nav2-bar">
                <div className="nav2-topBox"></div>
                <div className="nav2-bottomBox"></div>
            </div>
            </div>
}

export default Navbar;