import React from "react";
import {Link} from "react-router-dom";
import style from "../Landing/Landing.module.css";



export default function LandingPage(){
    return(
        <div className={style.div}>
            <div className={style.font}>
            <h1>WELCOME TO THE POKEMON WORLD!</h1>
            </div>
            <Link to= '/home'> 
            <button className={style.button}>GET IN</button>
            </Link>
        </div>
    )
};
