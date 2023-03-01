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
import pikachu from "../../Images/pikachu.gif";

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
            const [pokemonsPerPage] = useState(12)
    
    const lastPokemon = currentPage * pokemonsPerPage //12
    const firstPokemon = lastPokemon - pokemonsPerPage //12- 
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
                         <img src={pikachu} alt="pokemon" className={style.pikachu}/>
                         
                         <h1 className={style.texto}>Pokemon not found</h1>
                    </div>
                </div>
                )
            }
        };