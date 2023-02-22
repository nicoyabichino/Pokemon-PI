import style from "./Card.module.css"
import React from "react";

const Card = (props) => {
    return (
       <div className={style.card}>
           <p>{props.name}</p>
           <p>{props.hp}</p>
           <p>{props.attack}</p>
           <p>{props.defense}</p>
           <p>{props.speed}</p>
           <p>{props.height}</p>
           <p>{props.weight}</p>
           <p>{props.types}</p>
           <p>{props.img}</p>
       </div>
    )   
   };
   
   export default Card;