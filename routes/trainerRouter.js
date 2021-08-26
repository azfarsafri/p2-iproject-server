"use strict";

const router = require("express").Router()
const Controller = require("../controllers/trainerController");
const authentication = require("../middlewares/authentication");
const upload = require("../middlewares/multer")
const imageKit = require("../middlewares/imageKit")

router.post("/register", Controller.register)
router.post("/login", Controller.login)
router.use(authentication)
router.post("/add", upload.single("imageUrl"), imageKit, Controller.addPokemon)

module.exports = router