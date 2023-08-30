import n1 from "../../../Img/News/NEWS1.jpg";
import n2 from "../../../Img/News/NEWS2.jpeg";
import n3 from "../../../Img/News/NEWS3.webp";


type arrType = {date : string, subject : string , img : string | undefined}[];

const NewsArr : arrType = [
                            {date : "2023. 06. 01" , subject : "포드 퍼포먼스, FIA GT3 무대에 나설 ‘머스탱 GT3′ 공개" , img : n1 },
                            {date : "2023. 01. 03" , subject : "포드 '머스탱 GT4', 벨기에 스파에서 첫 선" , img : n2 },
                            {date : "2023. 08. 03" , subject : "포드, 30만 달러의 800마력 머스탱 공개" , img : n3},
                        ];

export default NewsArr;