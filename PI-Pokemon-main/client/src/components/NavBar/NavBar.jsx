import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

// import linkedin from "../../imagenes/linkedinn.png"
// import github from "../../imagenes/githubn.png"
// import icono from "../../imagenes/pokeapp2.png"

export default function NavBar(){
    return(
        <div className={style.all}>
            

            <div className={style.button}>
                <Link to="/home">
                <button className={style.links}>HOME</button>
                </Link>

                <Link to="/create">
                <button className={style.links}>CREATE POKEMON</button>
                </Link>
            </div>

        </div>
    )
};

//<div className={style.icono}>
    //            <Link to="/home">
          //      {/* <img src={icono} alt="logo" width="100px" height="80px"/> */}
  //              </Link>
 //           </div>