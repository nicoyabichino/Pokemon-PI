import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNamePokemons } from "../../redux/actions";


export default function SearchBar(){
    const dispatch = useDispatch()
    const [name,setName] = useState("")

    function handleInputChange(e){
        e.preventDefault()
        setName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(getNamePokemons(name))

    }
    
    return (

               <div>

                <input className="searchbar"
                type = "text"
                placeholder = "Buscar Pokemon..."
                onChange={(e)=>handleInputChange(e)}
                />
                <button className="boton" type = "submit" onClick={(e) => handleSubmit(e)}>Buscar</button>
                         
              </div>

    )
};