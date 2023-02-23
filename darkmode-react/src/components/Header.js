import React,{useContext} from "react";
import { DarkContext } from "../context/DarkContext";
import {NameContext} from "../context/NameContext";
const Header =()=>{
    const{isDark} = useContext(DarkContext);
    const siteName =useContext(NameContext);
    return(
        <div className="header" style={{
            backgroundColor: isDark ? '#222' : null,
            color: isDark ? '#fff' : '#222'
        }}>
            <h1>{siteName}</h1>
            <ul>
                <li>menu1</li>
                <li>menu2</li>
                <li>menu3</li>
            </ul>
        </div>
    )
}
export default Header;