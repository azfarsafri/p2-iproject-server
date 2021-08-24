"use strict";

const router = require("express").Router()
const authentication = require("../middlewares/authentication");
const Controller = require("../controllers/pokemonController")

router.use(authentication)
router.get("/:pokemon", Controller.getPokemon)
router.get("/generations/:generations", Controller.generations)

module.exports = router