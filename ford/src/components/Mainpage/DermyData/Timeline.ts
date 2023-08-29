

import photo from "../../../Img/mustangLogo.png"

//연도별 모델이나 이슈들? 그리고 사진까지 전부 배열로 만들어야 합니다.
type arrType = {generationTime : string, modelTime : { name : string, explanation : string[] , photo : any[]}[]}[];
const Array : arrType  = [ {generationTime : "2023~" , modelTime : [{ name : "S650",explanation : ["7세대 머스탱 2024년형","V8 코요테 엔진 764마력 스포츠카 쿠페 형태"],photo : ["https://www.popsci.com/uploads/2022/09/19/2024-Mustang-19.jpg?auto=webp"] },{ name : "1996",explanation : ["1세대 전기형","V8 코요테 엔진 764마력 스포츠카 쿠페 형태"],photo : [] },{ name : "1997",explanation : ["1세대 전기형","V8 코요테 엔진 764마력 스포츠카 쿠페 형태"],photo : [] }]},
                            {generationTime : "2014~2023" , modelTime : [{ name : "1995",explanation : ["1세대 전기형","V8 코요테 엔진 764마력 스포츠카 쿠페 형태"],photo : [] },{ name : "1996",explanation : ["1세대 전기형","V8 코요테 엔진 764마력 스포츠카 쿠페 형태"],photo : [] },{ name : "1997",explanation : ["1세대 전기형","V8 코요테 엔진 764마력 스포츠카 쿠페 형태"],photo : [] }]},
                            {generationTime : "2005~2014" , modelTime : [{ name : "2003",explanation : ["1세대 전기형","V8 코요테 엔진 764마력 스포츠카 쿠페 형태"],photo : [] },{ name : "1996",explanation : ["1세대 전기형","V8 코요테 엔진 764마력 스포츠카 쿠페 형태"],photo : [] },{ name : "1997",explanation : ["1세대 전기형","V8 코요테 엔진 764마력 스포츠카 쿠페 형태"],photo : [] }]},
                            {generationTime : "1994~2004" , modelTime : [{ name : "1995",explanation : ["1세대 전기형","V8 코요테 엔진 764마력 스포츠카 쿠페 형태"],photo : [] },{ name : "1996",explanation : ["1세대 전기형","V8 코요테 엔진 764마력 스포츠카 쿠페 형태"],photo : [] },{ name : "1997",explanation : ["1세대 전기형","V8 코요테 엔진 764마력 스포츠카 쿠페 형태"],photo : [] }]},
                            {generationTime : "1979~1993" , modelTime : [{ name : "1995",explanation : ["1세대 전기형","V8 코요테 엔진 764마력 스포츠카 쿠페 형태"],photo : [] },{ name : "1996",explanation : ["1세대 전기형","V8 코요테 엔진 764마력 스포츠카 쿠페 형태"],photo : [] },{ name : "1997",explanation : ["1세대 전기형","V8 코요테 엔진 764마력 스포츠카 쿠페 형태"],photo : [] }]},
                            {generationTime : "1974~1978" , modelTime : [{ name : "1974",explanation : ["1세대 전기형","V8 코요테 엔진 764마력 스포츠카 쿠페 형태"],photo : ["https://i.namu.wiki/i/FGd69jBQe5vUObnAC-oW3Ddb-OHEUq2NQIVDTefHZYSN-8_Aw9o0DHSGsjvGYoWcX4cO3rJ4xm4RccZxNfzljwyEFryv8igKqbBJpKsPm-ylylnMuchG7a6YavLlKwkBxZcrJeem4ZIV4X5yG48XQg.webp"] },{ name : "1996",explanation : ["1세대 전기형","V8 코요테 엔진 764마력 스포츠카 쿠페 형태"],photo : [] },{ name : "1997",explanation : ["1세대 전기형","V8 코요테 엔진 764마력 스포츠카 쿠페 형태"],photo : [] }]},
                            {generationTime : "1964~1973" , modelTime : [{ name : "1964 THE MUSTANG",explanation : ["전설의 시작","V8 코요테 엔진 764마력 스포츠카 쿠페 형태"],photo :["https://www.motortrend.com/uploads/f/69596419.jpg"] },
                                                                         { name : "1968-1969 Mach 1",explanation : ["1세대 전기형","V8 코요테 엔진 764마력 스포츠카 쿠페 형태"],photo : ["https://cdn.carbuzz.com/gallery-images/840x560/893000/600/893663.jpg"] },
                                                                         { name : "1969-1970 Boss",explanation : ["1세대 전기형","V8 코요테 엔진 764마력 스포츠카 쿠페 형태"],photo : ["https://www.mustangspecs.com/wp-content/uploads/2020/06/1969-Boss-429.jpg"] },
                                                                         { name : "1971 Grande",explanation : ["1세대 전기형","V8 코요테 엔진 764마력 스포츠카 쿠페 형태"],photo : [] }
                                                                        ]}                            
                          ] 

export default Array ;


