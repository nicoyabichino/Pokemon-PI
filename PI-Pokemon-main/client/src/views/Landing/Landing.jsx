import React from "react";
import {Link} from "react-router-dom";



export default function LandingPage(){
    return(
        <div className="landing-page">
            <Link to= '/home'> 
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