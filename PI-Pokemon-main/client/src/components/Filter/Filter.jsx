import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTypes, filterTypes, filterFrom, orderAZ, orderAttack, getPokemons} from "../../redux/actions";
import { useEffect } from "react";
import style from "./Filter.module.css"

export default function Filter({setCurrentPage, setOrder}){

    let dispatch = useDispatch()
    const types = useSelector((state) => state.types)

    useEffect(() => {
        dispatch(getTypes())
    },[dispatch])

    const handleReset = (e) => {
        e.preventDefault()
        setCurrentPage(1)
        dispatch(getPokemons())
    };

    const handleFilterTypes = (e) => {
        setCurrentPage(1)
        dispatch(filterTypes(e.target.value))
    };
    const handleFilterFrom = (e) => {
        setCurrentPage(1)
        dispatch(filterFrom(e.target.value))
    };

    const handleOrderAZ = (e) => {
        setCurrentPage(1)
        dispatch(orderAZ(e.target.value))
        setOrder(`Order by ${e.target.value}`)
    };

    const handleOrderATTACK = (e) => {
        setCurrentPage(1)
        dispatch(orderAttack(e.target.value))
        setOrder(`Order by ${e.target.value}`)
    };

    return(
        <div className={style.div}>

            <div className={style.div2}>
            <button onClick={(e) => handleReset(e)} className={style.button}>
                REFRESH
            </button>

        <select onChange={(e) => handleFilterFrom(e)} className={style.select}>
            <option value="all">ALL</option>
            <option value="api">API</option>
            <option value="yours">YOURS</option>
        </select>

        <select onChange={(e) => handleFilterTypes(e)} className={style.select}>
            <option value="none">All types...</option>
            {
                types && types.map((e) => {
                    return (
                        <option value={e.name}>{e.name.toUpperCase()}</option>
                    )
                })
            };
        </select>

        <select onChange={(e) => handleOrderAZ(e)} defaultValue={"none"} className={style.select}>
            <option value="none" >Alphabetical order...</option>
            <option value="az">A-Z</option>
            <option value="za">Z-A</option>
        </select>

        <select onChange={(e) => handleOrderATTACK(e)} defaultValue={"none"} className={style.select}>
            <option value="none">Attack order...</option>
            <option value="plus">+ ATTACK</option>
            <option value="less">- ATTACK</option>
        </select>
        </div>

        </div>
    )
};