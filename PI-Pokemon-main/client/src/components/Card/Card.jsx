import style from "./Card.module.css"
import React from "react";
import { Link } from "react-router-dom";
import{useDispatch} from "react-redux";
import {getDetail} from '../../redux/actions';
import Detail from "../../views/Detail/Detail";



const Card = (props) => {
    const dispatch = useDispatch();
    function handleClick(e) {
        e.preventDefault();
        dispatch(getDetail(props.id), Detail);
        
    };
    return (
       <div className={style.card}>
           <button onClick={e => {handleClick(e)}}>{props.name}</button>
        {props.types.length>1?
        <div>
           <p>{props.types[0] + ", " + props.types[1]}</p>
           </div>: <p>{props.types}</p>
             }
           <img  src = {props.img} alt = "image not found" className="image"  width = '120px'    heigth = '100px' />
       </div>
    )   
   };
   
   export default Card;