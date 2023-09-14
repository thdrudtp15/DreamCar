import ford11 from "../../../Img/History/ford1-1.jpg";
import ford12 from "../../../Img/History/ford1-2.jpg";
import ford13 from "../../../Img/History/ford1-3.jpg";

import ford21 from "../../../Img/History/ford2-1.jpg";
import ford22 from "../../../Img/History/ford2-2.jpg";

import ford31 from "../../../Img/History/ford3-1.jpg";



import ford41 from "../../../Img/History/ford4-1.jpg";
import ford42 from "../../../Img/History/ford4-2.jpg";

import ford51 from "../../../Img/History/ford5-1.jpg";
import ford52 from "../../../Img/History/ford5-2.jpg";
import ford53 from "../../../Img/History/ford5-3.jpg";


import ford61 from "../../../Img/History/ford6-1.jpg";
import ford62 from "../../../Img/History/ford6-2.jpg";

import ford71 from "../../../Img/History/ford7-1.jpg";
import ford72 from "../../../Img/History/ford7-2.jpg";




import photo from "../../../Img/mustangLogo.png"

//연도별 모델이나 이슈들? 그리고 사진까지 전부 배열로 만들어야 합니다.
type arrType = {generationTime : string, modelTime : { name : string, explanation : string[] , photo : any[]}[]}[];
const Array : arrType  = [ {generationTime : "2023~" , modelTime : [{ name : "2023 S650",explanation : ["7세대 머스탱 2024년형","I4 EcoBoost, V8 GT"],photo : [ford71] },
                                                                    { name : "2025 GTD",explanation : ["7세대 GTD","800마력 이상 극강의 퍼포먼스","8단 변속기"],photo : [ford72] }]},
                            



                            {generationTime : "2015~2023" , modelTime : [{ name : "2014-2017",explanation : ["6세대 전기형","Sync3 인포테인먼트 시스템 도입","디자인과 성능이 강조된 모델"],photo : [ford61] },
                                                                         { name : "2018-2023",explanation : ["6세대 후기형","업그레이드 된 기술과 성능","2.3L 4기통 , 5.0 8기통 엔진의 엔진 옵션","강조된 그릴 디자인"],photo : [ford62] },
                                                                        ]},
                            
                            
                            
                            
                            
                            {generationTime : "2005~2014" , modelTime : [{ name : "2005-2009",explanation : ["5세대 전기형","클래식한 스타일을 현대적으로 해석한 디자인","고성능을 강조한 모델"],photo : [ford51] },
                                                                         { name : "2007-2009 Shelby GT500",explanation : ["'셸비'사의 5세대 머스탱 고성능 튜닝 버전","5.4L V8 500마력의 고성능 엔진","섀시, 서스펜션, 브레이크의 개선으로 상당한 주행성능"],photo : [ford52] },
                                                                         { name : "2010-2014",explanation : ["5세대 후기형","전기형의 리프레시 버전","엔진 업데이트를 통한 연비 향상","더욱 더 다이나믹한 선과 새로운 그릴 디자인"],photo : [ford53] }
                                                                        ]},
                           
                           
                           
                           
                           
                           
                            {generationTime : "1994~2004" , modelTime : [{ name : "1994-1998",explanation : ["4세대 전기형","복합 프레임 및 다중 링크 후륜 조향","둥근 형태 및 스무스한 디자인","당시 현대성을 유지하면서도 클래식한 머스탱의 정신을 지닌 모델"],photo : [ford41] },
                                                                         { name : "1999-2004",explanation : ["4세대 후기형","뉴 엣지 디자인","편안한 인테리어 환경 제공","프론트 서스펜션 개선"],photo : [ford42] },
                                                                        ]},
                            
                            
                            
                            
                            
                            
                            
                            {generationTime : "1979~1993" , modelTime : [
                                                                         { name : "1983 GT",explanation : ["3세대 머스탱의 성능중심 버전","에어로다이나믹 디자인","고출력","FR 구동 방식으로 우수한 주행성능"],photo : [ford31] },
                                                                         
                                                                        ]},
                            
                            
                            
                            








                            {generationTime : "1974~1978" , modelTime : [{ name : "1974",explanation : ["2세대 전기형","내부 공간 확장 등 편의기능 강화","대대적 디자인 변화","주행 경제성에 중점을 둔 모델"],photo : [ford21] },
                                                                         { name : "1975-1978",explanation : ["2세대 후기형","스포츠적 이미지보다는 실용성과 경제성을 우선시한 모델 "],photo : [ford22] },
                                                                        ]},
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            {generationTime : "1964~1973" , modelTime : [{ name : "1964-1968 THE MUSTANG",explanation : ["전설의 시작","다양한 바디 스타일 제공","I6 , V8 엔진 101~306 마력"],photo :[ford11] },
                                                                         { name : "1968-1969 Mach 1",explanation : ["스포츠 튜닝","375마력","고무적인 디자인 및 강력한 성능"],photo : [ford12] },
                                                                         { name : "1969-1970 Boss",explanation : ["최고의 컬렉터 아이템","미국 모스파워 카 문화를 대표하는 모델","탁월한 핸들링"],photo : [ford13] },
                                                                        
                                                                        ]}                            
                          ] 

export default Array ;


