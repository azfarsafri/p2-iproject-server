"use strict";

const router = require("express").Router()
const Controller = require("../controllers/boxController")

router.get("/:id", Controller.getBox)

module.exports = router