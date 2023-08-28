import { FaBars } from 'react-icons/fa';
import {BsArrowRightShort} from 'react-icons/bs';
import {IoMdClose} from 'react-icons/io';
import {AiOutlineInstagram,AiOutlineYoutube} from 'react-icons/ai';
import {BiLogoFacebook,BiLinkExternal} from 'react-icons/bi';

type snsArrType = {icon : React.ReactElement,path : string}[];

const snsArr : snsArrType= [{icon : <AiOutlineInstagram/>, path : "https://www.instagram.com/ford_mustang.usa/" },
                                { icon : <BiLogoFacebook/> , path : "https://www.facebook.com/fordmustang/"},
                                { icon : <AiOutlineYoutube/> , path : "https://www.youtube.com/@ford"}]

                                export default snsArr;