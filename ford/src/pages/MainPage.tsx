import React from 'react';
import Navbar from '../components/common/Navbar';
import FirstBlock from '../components/Mainpage/MainBanner';
import AboutUs from '../components/Mainpage/AboutUs';
import ImgMotion from '../components/Mainpage/ImgMotion';
import History from '../components/Mainpage/History';
import Timeline from '../components/Mainpage/Timeline';


function MainPage () {
    return <div>
        <Navbar />
        <FirstBlock />
        <AboutUs />
        <ImgMotion />
        <History/>
        <Timeline />
        <div style={{height : "1200px",background : "red"}}></div>
    </div>
}

export default MainPage;