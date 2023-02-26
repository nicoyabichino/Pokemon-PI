const {Pokemon,Type} = require("../db");
const axios = require("axios").default;

const getPokeApi = async () =>{
   // guardo todas las caracteristicas de los pk 
   try {
    const pokeApi = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=40")
     const pokeInfo = pokeApi.data.results.map(p => axios.get(p.url))
     const pokeResponse =  await axios.all(pokeInfo)
     .then (pokes =>
       pokes.map(p => {
           const allPoke={
               id: p.data.id,
               name: p.data.name,
               hp: p.data.stats[0].base_stat,
               attack: p.data.stats[1].base_stat,
               defense: p.data.stats[2].base_stat,
               speed: p.data.stats[5].base_stat,
               height: p.data.height,
               weight: p.data.weight,
               img: p.data.sprites.other.home.front_default,
               types: p.data.types.map(t=>t.type.name),
               createdDB: false
           }
           return allPoke;
       }))
       
       return pokeResponse;
    }  catch (error) {
           res.status({error: error.message})
   }; 
   };
   //trae todo de la ddb 
   const getPokeDb = async() =>{
      try {
       const pokeDb = await Pokemon.findAll({
           include:{
               model: Type,
               attribute:['name'],
               through:{
                   attributes: [],
               }
           }
       })
       var dat = JSON.parse(JSON.stringify(pokeDb, null, 2))
     dat.forEach(poke=> poke.types = poke.types.map(type=> type.name))

       return dat
      } catch (error) {
       res.status(404).send({error:error.message})
      };
   };

   const getAllPokes  = async() =>{
       const apiInfo =  await getPokeApi()
       const dbInfo =  await getPokeDb()
       const infoTotal = apiInfo.concat(dbInfo)
       return infoTotal
   };

   const dataTypePoke = async () =>{
    const typeApiPoke =  await axios.get("https://pokeapi.co/api/v2/type") 
     const name = typeApiPoke.data.results.map(e => e.name)
     for (let i = 0; i < name.length; i++) {
         Type.findOrCreate({
             where:{
                 name: name[i]
                }
            })
    };
    };

module.exports = {getAllPokes,dataTypePoke};