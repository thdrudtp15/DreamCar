import "../../css/Mainpage/History.css";
import video from "../../Img/Intro.mp4"

function History() {
    return <div className="Ht-wrap" id="History">
        <div className="Ht-textCont">
            <div className="Ht-text history">History</div>
            <div className="Ht-text slogan">The Legend Lives</div>
            <div className="Ht-text text">
                 <p>"The Legend Lives"는 머스탱의 역사를 상징합니다.</p>
                 <p>머스탱은 오랜 역사와 혁신적 디자인으로 더욱 활기찬 미래를 약속하며</p>
                 <p>차량의 전설적인 가치와 현대적인 역동성을 함께 전달합니다.</p>
            </div>
        </div>
            <div className="Ht-videoWrap">
                <video className="Ht-video" autoPlay muted loop>
                    <source src={video} type="video/mp4"/>
                </video>
            </div>
    </div>
}

export default History;