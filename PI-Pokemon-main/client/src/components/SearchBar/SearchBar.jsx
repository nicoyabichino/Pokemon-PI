import React from "react";
import { useState } from "react";
import { useDispatch} from "react-redux";
import { getPokemonName } from "../../redux/actions";


import style from "./SearchBar.module.css"

export default function SearchBar({setCurrentPage}){

    let dispatch = useDispatch()

    const [name, setName] = useState("")

    const handleInput = (e) => {
        e.preventDefault()
        setName(e.target.value)
    };

    const handleClick = (e) => {
        e.preventDefault()
        setCurrentPage(1)
        dispatch(getPokemonName(name))
        setName("")
    };

    return(
        <div className={style.div}>
            <div className={style.all}>
            <input type="text" placeholder="Search Pokemon..." value={name} className={style.input}
            onChange={(e) => handleInput(e)}
            onKeyPress={(e) => {
                if(e.key === "Enter") {
                    handleClick(e)}
            }}
            />
            <button type="submit" className={style.button}
            onClick={(e) => handleClick(e)}
            >
             <img src="https://cdn-icons-png.flaticon.com/512/188/188918.png" alt="pokebola" width="30rem" height="15rem"/> 
            </button>
            </div>
        </div>
    )
};