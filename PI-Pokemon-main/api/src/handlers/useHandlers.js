const axios = require("axios");
const { Pokemon,Type} = require('../db')
const {getAllPokes, dataTypePoke} = require("../controllers/useControllers")

 const getPokesHandler = async (req, res) => {
    const { name } = req.query;
    const allPokes = await getAllPokes();
    try {
        if (name) {
            const pokeName =  allPokes.filter(e => e.name.toLowerCase() === name.toLowerCase());
            if (pokeName.length > 0) {
                res.status(200).send(pokeName);
            }
            else { res.status(400).send("No existe ningun pokemon con ese nombre")}
        }
        else { res.status(200).send(allPokes)};
    } catch (error) {
        res.status(404).send({error:error.message});
    };
}; 

//async (req, res) => {
// const {name} = req.query;
// const results = name ? getPokeByName() : await getAllPokes();

// if(name) {
//     res.send(`buscar todos pokes que se llamen ${name}`);
// }
// else{
//     res.send("mostrame todo");
// }
// };

const getPokeHandler = async (req, res) => {
    const { id } = req.params;
    const pokemon = await getAllPokes();
    try { 
        if(id){
        const pokeById =  pokemon.filter(e => e.id == id)
        if(pokeById.length < 1){res.status(400).send("No existe ningun pokemon con ese id")}
        else {res.status(200).send(pokeById)}
        
    }
    } catch (error) {
        res.status(404).send({error:error.message})
    };
    };


// async (req, res) => {
//     const {id} = req.params;
//     const source = isNaN(id) ? "bbd" : "api";

//     try {
//         const poke = await getPokeById(id, source);
//         res.status(200).json(poke)
//     } catch (error) {
//         res.status(400).json({error:error.message})
//     }

// };

const createPokeHandler = async (req,res)=>{ // Ruta creación Pokemon
    const {name,img,hp,attack,defense,speed,height,weight,types} = req.body;
    try {
        const newPokemon = await Pokemon.create({
            name,
            hp,
            attack,
            defense,
            height,
            weight,
            img,
            speed
        })  
        await dataTypePoke()
          const typeDb = await Type.findAll({
            where:{ name: types} 
        })
        newPokemon.addType(typeDb)
    
        res.status(201).send('Pokemon creado correctamente')

    } catch (error) {
          res.status(404).send('Pokemon no creado exitosamente')
    }
}; 


// async (req, res) => {
//     const {name, hp, attack, defense, speed} = req.body;
//     try {
//        const newPoke = await createPoke(name, hp, attack, defense, speed);   
//        res.send(201).json(newPoke);
//     } catch (error) {
//         res.status(400).json({error: error.message});
//     }
// };

const typesPokeHandler = async (req, res,)=>{
    try {
     await dataTypePoke()
      const allTypes = await Type.findAll()
   res.status(200).send(allTypes)
    } catch (error) {
     res.status(404).send('Error en la busqueda')
    }
 }; 

module.exports= {
    getPokeHandler,
    getPokesHandler,
    createPokeHandler,
    typesPokeHandler
}