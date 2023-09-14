import "../../css/common/Footer.css";
import siteArr from "./DummyData/siteArr";
import snsArr from "./DummyData/snsArr";

import { useNavigate } from "react-router-dom";

function Footer(){

    const navigate = useNavigate();


    return <div className="ft-wrap">
                <div className="ft-top">
                    <a href="#AboutUs">AboutUs</a>
                    <a href="#History">History</a>
                    <a href="#News">News</a>
                </div>

                <div className="ft-bottom">
                    <div className="ft-btTop">
                        <div className="familySiteBox">
                           <span style={{fontWeight : "700"}}>Family Site :  </span>
                           {siteArr.map((data,index)=> <a key={index} className="familySite" href={`${data.path}`}>{data.title}</a>)}
                        </div>
                        <div className="social">
                            {snsArr.map((data,index)=> <a key={index} className="socialCircle" href={`${data.path}`}>{data.icon}</a>)}
                        </div>
                    </div>

                    <div className="ft-btBt">
                        <div className="privacy">
                            <span className="prcontent" style={{fontWeight : "bold"}}>개인정보처리방침</span>
                            <span className="prcontent">사이트맵</span>
                            <span className="prcontent">고객문의</span>
                        </div>
                        <div className="copywrite">본 포트폴리오는 한국타이어 웹페이지를 참고하여 제작 되었습니다. 
                                                    <br></br>
                                                   본 포트폴리오는 영리 목적이 아닙니다.
                                                    <br></br>
                                                   메인 배너 부분의 영상 출처 - https://www.youtube.com/watch?v=pyAkHBjNLS8
                                                   뉴스 부분의 이미지 출처 - 모터로이드
                                                   <br></br>
                                                    Copyright © 2023 By SongKyeongSe</div>
                    </div>
                </div>
            </div>
}

export default Footer;