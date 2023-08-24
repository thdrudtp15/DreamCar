import React from 'react';
import Navbar from '../components/common/Navbar';
import FirstBlock from '../components/Mainpage/MainBanner';
import AboutUs from '../components/Mainpage/AboutUs';
import ImgMotion from '../components/Mainpage/ImgMotion';


function MainPage () {
    return <div>
        <Navbar />
        <FirstBlock />
        <AboutUs />
        <ImgMotion />
        <div style={{height : "1200px"}}></div>
    </div>
}

export default MainPage;