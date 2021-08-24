"use strict";
const { verifyToken } = require("../helpers/jwt")
const { Trainer } = require("../models/index")

const authentication = async (req, res, next) => {
    try {
        const { access_token } = req.headers
        const payload = verifyToken(access_token)
        if (access_token){
            const found = await Trainer.findByPk(payload.id)
            if( found ){
                req.trainer = {
                    id: payload.id,
                    name: payload.name
                }
                next()
            } else {
                throw({name: "Forbidden"})
            }
        } else {
            throw({name: "Invalid Token"})
        }
    } catch (error) {
        throw({name: "Invalid Token"})
    }
}

module.exports = authentication