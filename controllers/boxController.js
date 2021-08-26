"use strict";
const { Box, Pokemon } = require("../models/index")

class Controller {
    static async getBox(req, res, next){
        const id = +req.params.id
        try {
            const response = await Box.findAll({where: { TrainerId: id }, include: [Pokemon]})
            res.status(200).json(response)
        } catch (err) {
            next(err)
        }
    }
}

module.exports = Controller