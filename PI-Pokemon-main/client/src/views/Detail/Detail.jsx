import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams, useHistory } from "react-router-dom";
import { getDetail, deletePokemon } from "../../redux/actions";

import style from "../Detail/Detail.module.css"

export default function Detail(){
    let dispatch = useDispatch()
    let params = useParams()
    let history = useHistory()

    
    useEffect(() => {
        dispatch(getDetail(params.id))
    },[params.id, dispatch])
    
    const details = useSelector((state) => state.details)

    const destroy = (e) => {
        e.preventDefault()
        if(window.confirm("Do you really want to delete this Pokemon?")) {
            dispatch(deletePokemon(params.id))
            alert("The pokemon has been successfully removed")
            history.push("/home")
        }
    }

    return(
        <div className={style.all}>
        {
            details.length > 0 ?

            <div className={details[0].createdDB === true ? `${style.cardDB}` : `${style.card}`}>
                <div className={style.divdelete}>
                {
                    details[0].createdDB === true ? <button onClick={(e) => destroy(e)} className={style.delete}>DELETE</button> : null
                }
                </div>
                <h1 className={style.h1}>{details[0].name.charAt(0).toUpperCase() + details[0].name.slice(1)}</h1>
                <div className={style.divtext}>
                <div className={style.text}>
                <p>ID: {details[0].id}</p>
                <p>Attack: {details[0].attack}</p>
                <p>Defense: {details[0].defense}</p>
                <p>Speed: {details[0].speed}</p>
                <p>Height: {details[0].height}</p>
                <p>Weight: {details[0].weight}</p>
                </div>
                <div className={style.divimg}>
                <img src={details[0].img} alt="pokemon" className={details[0].createdDB === true ? `${style.imgDB}` : `${style.img}`}/>
                <p className={style.types}>Type/s: {details[0].types.map((t) => {
                    return t + " "
                })}</p>
                </div>
                </div>
                <Link to="/home" className={style.link}><button className={style.button}>BACK HOME</button></Link>
            </div>
        :
        <div className={style.loading}>
            <img src="https://static.wixstatic.com/media/662469_bb65c01462b343849e6c32896793e4bf~mv2.gif" alt="pokemon" className={style.pikachu}/>
            <h3 className={style.texto}>Loading...</h3>    
        </div>
        }
        </div>
    )
};