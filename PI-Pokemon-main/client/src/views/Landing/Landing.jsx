import React from "react";
import {Link} from "react-router-dom"
// import style from "./Landing.module.css";



export default function LandingPage(){
    return(
        <div className="landing-page">
            <Link to= '/home'> 


           {/* <img src = {PokePortada} alt = "image not found" className="image-contenedor" /> */}

            <button className="button">INGRESAR</button>
            </Link>
        </div>
    )
}



// const Landing = () => {
//     return (
//         <h1>Esto es el Landing</h1>
//     )
// };

// export default Landing;