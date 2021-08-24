"use strict";

const router = require("express").Router()
const Trainer = require("./trainerRouter")
const Box = require("./boxRouter")
const Pokemon = require("./pokemonRouter")

router.use("/trainers", Trainer)
router.use("/pokemons", Pokemon)
router.use("/boxes", Box)

module.exports = router