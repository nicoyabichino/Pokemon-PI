import React from "react";
import {useDispatch, useSelector} from "react-redux"
import { useState } from "react";
import { clearDetail, getPokemons } from "../../redux/actions";
import { useEffect } from "react";

import style from "./Home.module.css"

import Card from "../../components/Card/Card";
import Filter from "../../components/Filter/Filter";
import Paginado from "../../components/Paginado/Paginado";
import SearchBar from "../../components/SearchBar/SearchBar";

export default function Home(){
    
        let dispatch = useDispatch()
        const pokemons = useSelector((state) => state.pokemons)
        const allPoke = useSelector((state) => state.notFilter)
    
        const [order, setOrder] = useState(" ")
        console.log(order)
    
        useEffect(() => {
                dispatch(getPokemons())
                dispatch(clearDetail())
            },[dispatch])
        
            const [currentPage, setCurrentPage] = useState(1)
            const [pokemonsPerPage, setPokemonsPerPage] = useState(12)
            console.log(setPokemonsPerPage)
    
    const lastPokemon = currentPage * pokemonsPerPage
    const firstPokemon = lastPokemon - pokemonsPerPage
    const currentPokemons = pokemons.slice(firstPokemon,lastPokemon)

    const paginado = (pageNumber) => {
            setCurrentPage(pageNumber)
        }
    
        if(!allPoke.length){
                return(
                        <div>
                            <SearchBar
                            setCurrentPage={setCurrentPage}
                            />
                            <Filter
                            setCurrentPage={setCurrentPage}
                            setOrder={setOrder}
                            />
                            <div className={style.divloading}>
                                <img src="https://cdn.dribbble.com/users/621155/screenshots/2835314/simple_pokeball.gif" alt="loading" className={style.loading}/>
                            </div>
                      </div>
                    )
                }else if(currentPokemons.length){
                        return(
                                <div>
                                    <SearchBar
                                    setCurrentPage={setCurrentPage}
                                    />
                                    <Filter
                                    setCurrentPage={setCurrentPage}
                                    setOrder={setOrder}
                                    />
                                    <ul className={style.background}>
                                        {
                                                currentPokemons.map((p) => (
                                                            <Card
                                id = {p.id}
                                key = {p.id}
                                name = {p.name}
                                img = {p.img}
                                types = {p.types}
                                />
                        ))
                    }

                </ul>
                <Paginado
                pokemons={pokemons}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                pokemonsPerPage={pokemonsPerPage}
                paginado={paginado}
                />
            </div>
        )
    }else if(allPoke && currentPokemons.length === 0){
            return (
                    <div>
                        <SearchBar
                        setCurrentPage={setCurrentPage}
                        />
                        <Filter
                        setCurrentPage={setCurrentPage}
                        setOrder={setOrder}
                        />
                    <div className={style.encontrado}>
                         <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c319.png" alt="pokemon" className={style.pikachu}/>
                         <h1 className={style.texto}>Pokemon not found</h1>
                    </div>
                </div>
                )
            }
        }
       
        // import Cards from "../../components/Cards/Cards";
        // import React from "react";
        // import NavBar from "../../components/NavBar/NavBar";
        // import SearchBar from "../../components/SearchBar/SearchBar";
        // import { useEffect} from "react";
        // import {getPokemons} from '../../redux/actions';
        // import{useDispatch} from "react-redux";
        // import {Link} from "react-router-dom";
        
        // export default function Home () {
        //     const dispatch = useDispatch();
        //     //  const allPokemons = useSelector((state) => state.pokemons)
        //     useEffect(() => {
        //         dispatch(getPokemons())
        //     },[dispatch])
        
        //     function handleClick(e) {
        //         e.preventDefault();
        //         dispatch(getPokemons());
        //     }
        
        //     return (
        //     <div>
        //     <NavBar />
        //     <SearchBar />
        //             <Link to = "/create">Crear pokemon</Link>
        //     <h1>Home principal</h1>
        //     <button onClick={e => {handleClick(e)}}>Volver a cargar los pokemons</button>
        //     <Cards></Cards>
        //     </div>
        //     )
        // };