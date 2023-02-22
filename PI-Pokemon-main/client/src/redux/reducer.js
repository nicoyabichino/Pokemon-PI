
const initialState = {
    pokemons: [],
    allPokemons: [],
    types:[],
    details: []
};

const rootReducer = (state=initialState, action) => {
    switch(action.type){
        case "GET_POKEMONS":
            return{ 
                  ...state,
                  pokemons:action.payload,
                allPokemons: action.payload
            }
            case "GET_NAME_POKEMONS":
                return{ 
                      ...state,
                      pokemons:action.payload  
                }
        default: 
        return {...state};
    }
};

export default rootReducer;