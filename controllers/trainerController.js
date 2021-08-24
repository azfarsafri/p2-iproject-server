"use strict";

const { checkPassword } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");
const { Trainer } = require("../models/index")

class Controller {
    static async register(req, res, next){
        const newData = {
            name: req.body.name,
            password: req.body.password,
            gender: req.body.gender,
            address: req.body.address
        }
        try {
            const response = await Trainer.create(newData)
            res.status(201).json({id: response.id, name: response.name})
        } catch (err) {
            next(err)
        }
    }

    static async login(req, res, next){
        const { name, password } = req.body
        try {
            const found = await Trainer.findOne({where: { name }})
            if (found){
                const checked = checkPassword(password, found.password)
                if (checked){
                    const access_token = signToken({id: found.id, name: found.name})
                    res.status(200).json({ access_token })
                } else {
                    throw({name: "Fail Login"})
                }
            } else {
                throw({name: "Fail Login"})
            }
        } catch (err) {
            next(err)
        }
    }

    static async trainerBox(req, res, next){
        
    }
}

module.exports = Controller