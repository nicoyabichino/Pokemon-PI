import React from "react";
import { Link } from "react-router-dom";

import style from "../Card/Card.module.css";

export default function Card(props){
    return(
        <Link to={`/Detail/${props.id}`} className={style.link}>
        <div className={style.card}>
            <img src={props.img} alt="pokemon" className={style.img}/>
            <h3 className={style.h6}>{props.name.charAt(0).toUpperCase() + props.name.slice(1)}</h3>
            <h5 className={style.h5}>Type/s: {props.types.map((t => `${t} `))}</h5>
        </div>
        </Link>
    )
}