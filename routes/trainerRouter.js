"use strict";

const router = require("express").Router()
const Controller = require("../controllers/trainerController");

router.post("/register", Controller.register)
router.post("/login", Controller.login)
router.get("/:id", Controller.trainerBox)
module.exports = router