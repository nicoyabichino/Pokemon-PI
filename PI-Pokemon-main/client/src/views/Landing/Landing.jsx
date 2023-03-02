import React from "react";
import {Link} from "react-router-dom";
import style from "../Landing/Landing.module.css";




export default function LandingPage(){
    return(
    <div className={style.div}>
        <div className={style.font}>
        <a href="https://fontmeme.com/es/efecto-brillo/"><img src="https://fontmeme.com/permalink/230302/f2049baa1582d3318ce4943937d406d2.png" alt="efecto-brillo" border="0"/></a>
        </div>
        <Link to= '/home'> 
        <button className={style.button}><a href="https://fontmeme.com/es/efecto-brillo/"><img src="https://fontmeme.com/permalink/230302/2c585dbc936d836fdde2d18850df2b58.png" alt="efecto-brillo" border="0"/></a></button>
        </Link>
   </div>
    )};
    // <video src={pokebola} autoplay="true" muted="true" loop="true" poster="https://carontestudio.com/img/contacto.jpg"></video>