const {Router} = require("express");
const {getPokeHandler, getPokesHandler, createPokeHandler} = require("../handlers/useHandlers")
const pokemonRouter = Router();

const validatePost = (req, res, next) => {
const {name, hp, attack, defense, speed, types, img, height, weight} = req.body;
if(!name) {return res.status(404).send({error: "Falta agregar el nombre del Pokemon"})}
else if(!hp) {return res.status(404).send({error: "Falta agregar la vida maxima del Pokemon"})}
else if(!attack) {return res.status(404).send({error: "Falta agregar el poder de ataque del Pokemon"})}
else if(!defense) {return res.status(404).send({error: "Falta agregar el nivel de defensa del Pokemon"})}
else if(!speed) {return res.status(404).send({error: "Falta agregar la velocidad del Pokemon"})}
else if(!types) {return res.status(404).send({error: "Falta agregar el tipo de Pokemon"})}
else if(!img) {return res.status(404).send({error: "Falta agregar una imagen del Pokemon"})}
else if(!height) {return res.status(404).send({error: "Falta agregar el peso del Pokemon"})}
else if(!weight) {return res.status(404).send({error: "Falta agregar la altura de Pokemon"})}
   else {
       next();
   }

};


pokemonRouter.get("/", getPokesHandler);
pokemonRouter.get("/:id", getPokeHandler);
pokemonRouter.post("/", validatePost, createPokeHandler);

module.exports = pokemonRouter;