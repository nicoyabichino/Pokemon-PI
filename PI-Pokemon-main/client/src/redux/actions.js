 import axios from "axios";

// export const getPokemons = ()=>(dispatch) =>{
//     return fetch("http://localhost:3001/pokemons")
//     .then((r) => r.json())
//     .then((data) => dispatch({ type: 'GET_POKEMONS', payload: data }));
// };
export function getPokemons() {
    return async function(dispatch) {
        const json = await axios.get("http://localhost:3001/pokemons");
        return dispatch({
            type: 'GET_POKEMONS',
            payload: json.data 
        })
    }
};
