const {Type} = require ('../db')
const Router = require('express')
const  axios = require('axios').default;
const typeRouter = Router()
const { typesPokeHandler } = require('../handlers/useHandlers');




typeRouter.get('/', typesPokeHandler);



module.exports = typeRouter;