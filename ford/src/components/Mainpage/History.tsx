import "../../css/Mainpage/History.css";
import video from "../../Img/Intro.mp4"

function History() {
    return <div className="Ht-wrap">
        <div className="Ht-textCont">
            <div className="Ht-text history">History</div>
            <div className="Ht-text slogan">The Legend Lives</div>
            <div className="Ht-text text">
                 "The Legend Lives"는 머스탱의 역사를 상징합니다.
                <br></br>
                 차량의 전설적인 가치와 현대적인 역동성을 함께 전달하며 
                 <br></br>
                 머스탱은 오랜 역사와 혁신적인 디자인으로 더욱 활기찬 미래를 약속합니다.
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