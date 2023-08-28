import "../../css/common/Footer.css";
import siteArr from "./DermyData/siteArr";
import snsArr from "./DermyData/snsArr";

import { useNavigate } from "react-router-dom";

function Footer(){

    const navigate = useNavigate();


    return <div className="ft-wrap">
                <div className="ft-top">
                    <span>AboutUs</span>
                    <span>History</span>
                    <span>News</span>
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
                        <div className="copywrite">Copyright © 2023 By SongKyeongSe</div>
                    </div>
                </div>
            </div>
}

export default Footer;