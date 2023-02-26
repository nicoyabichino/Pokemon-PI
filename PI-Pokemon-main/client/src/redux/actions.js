import axios from "axios";
export const GET_POKEMONS = "GET_POKEMONS"
export const GET_TYPES = "GET_TYPES"
export const FILTER_TYPES = "FILTER_TYPES"
export const FILTER_FROM = "FILTER_FROM"
export const ORDER_AZ = "ORDER_AZ"
export const ORDER_ATTACK = "ORDER_ATTACK"
export const CLEAR_FILTERS = "CLEAR_FILTERS"
export const GET_POKEMON_NAME = "GET_POKEMON_NAME"
export const CREATE_POKEMON = "CREATE_POKEMON"
export const GET_DETAILS = "GET_DETAILS"
export const CLEAR_DETAIL = "CLEAR_DETAIL"
export const DELETE_POKEMON = "DELETE_POKEMON"

// export const getPokemons = ()=> async (dispatch) =>{
//     return fetch("http://localhost:3001/pokemons")
//     .then((r) => r.json())
//     .then((data) => dispatch({ type: 'GET_POKEMONS', payload: data }));
// };
export function getPokemons() {
    return async function(dispatch) {
        const json = await axios.get("http://localhost:3001/pokemons");
        return dispatch({
            type: GET_POKEMONS,
            payload: json.data 
        })
    }
};

export function getNamePokemons(name){
    return async function(dispatch){
        try {
            var json = await axios.get("http://localhost:3001/pokemons?name="+ name)
            return dispatch({
                type: GET_POKEMON_NAME,
                payload:  json.data
            })
            
        } catch (e) {
            console.log(e.message)
        }
    }
};

export function getDetail(id){
    return async function(dispatch){
        try {
            var json = await axios.get(`http://localhost:3001/pokemons/${id}`)
            return dispatch({
                type: GET_DETAILS,
                payload: json.data
            })
        } catch (e) {
            console.log(e.message)
            
        }
    }
};

export function deletePokemon(id){
    return async function(){
        try{
            return await axios.delete(`http://localhost:3001/pokemons/${id}`)
        }catch(e){
            console.log(e.message)
        }
    }
};

export function getTypes(){
    return async function(dispatch){
        let json = await axios.get(`http://localhost:3001/types`)
        return dispatch({
            type: GET_TYPES,
            payload: json.data
        })
    }
};

export function getPokemonName(name){
    return async function(dispatch){
        try{
        let json = await axios.get(`http://localhost:3001/pokemons?name=${name}`)
        return dispatch({
            type: GET_POKEMON_NAME,
            payload: json.data
        })
    }catch(e){
        return ("That pokemon does not exist")
    }
    }
};

export function createPokemons(payload){
    return async function(){
        let json = await axios.post(`http://localhost:3001/pokemons`,payload)
        return json
    }
};

export function filterTypes(payload){
    return{
        type: FILTER_TYPES,
        payload: payload
    }
};

export function filterFrom(payload){
    return{
        type: FILTER_FROM,
        payload : payload
    }
};

export function orderAZ(payload){
    return{
        type: ORDER_AZ,
        payload: payload
    }
};

export function orderAttack(payload){
    return{
        type: ORDER_ATTACK,
        payload: payload
    }
};

export function clearDetail(payload){
    return{
        type: CLEAR_DETAIL,
        payload: payload
    }
};