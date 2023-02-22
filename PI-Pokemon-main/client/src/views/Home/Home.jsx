import Cards from "../../components/Cards/Cards";
import React from "react";
import { useEffect } from "react";
import {getPokemons} from '../../redux/actions';
import{useDispatch} from "react-redux";
import {Link} from "react-router-dom";

// const Home = () => {
//     const dispatch = useDispatch()
//     const allPokemons = useSelector ((state) => state.pokemons)
//     console.log(allPokemons)
//     useEffect(() =>{
//         dispatch(getPokemons())  // me trae todos los pokes del del estado
//     },[dispatch]) 
//     return (
//         <>
//         <h1>Home principal</h1>
//         <Cards></Cards>
//         </>
//     )
// };
// export default Home;

export default function Home () {
    const dispatch = useDispatch();
    // const allPokemons = useSelector((state) => state.pokemons)
    useEffect(() => {
        dispatch(getPokemons())
    },[dispatch])

    function handleClick(e) {
        e.peventDefault();
        dispatch(getPokemons());
    }

    return (
    <div>
            <Link to = "/create">Crear pokemon</Link>
    <h1>Home principal</h1>
    <button onClick={e => {handleClick(e)}}>Volver a cargar los pokemons</button>
    <Cards></Cards>
    </div>
    )
}