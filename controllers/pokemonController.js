"use strict";

const axios = require("axios")
const genLimit = require("../helpers/genLimit")

class Controller {
    static async getPokemon(req, res, next){
        const { pokemon } = req.params
        try {
            const response = await axios({
                method: "get",
                url: `https://pokeapi.co/api/v2/pokemon/${pokemon}`
            })
            const result = {
                id: response.data.id,
                name: response.data.name,
                types: response.data.types,
                sprites: response.data.sprites.front_default
            }
            res.status(200).json(result)
        } catch (err) {
            console.log(err);
            next(err)
        }
    }

    static async generations(req, res, next){
        const name = req.params.generations
        const { limit, offset } = genLimit(name)
        try {
            const response = await axios({
                method: "get",
                url: `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
            })
            const result = response.data.results
            res.status(200).json(result)
        } catch (err) {
            next(err)
        }
    }
}

module.exports = Controller