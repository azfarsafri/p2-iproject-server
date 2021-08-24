"use strict";

const errorHandler = (err, req, res, next) => {
    if(err.name === "SequelizeValidationError"){
        const errors = err.errors.map(el => {
            return el.message
        })
        res.status(400).json(errors)
    } else if (err.name === "SequelizeUniqueConstraintError"){
        const errors = err.errors.map(el => {
            return el.message
        })
        res.status(400).json(errors)
    } else if (err.name === "Bad Request"){
        return res.status(400).json({message: "Bad Request"})
    } else if (err.name === "Unauthorized"){
        return res.status(401).json({message: "Unauthorized"})
    } else if (err.name === "Fail Login"){
        return res.status(401).json({message: "Name / Password is wrong"})
    } else if (err.name === "Forbidden"){
        return res.status(403).json({message: "Forbidden"})
    } else if (err.name === "Not Found"){
        return res.status(404).json({message: "Not Found"})
    } else if (err.name === "Invalid Token"){
        return res.status(401).json({message: "Invalid Token"})
    } else if (err.name === "Maximum File Size Exceeded"){
        return res.status(401).json({message: "Maximum File Size Exceeded"})
    } else {
        return res.status(500).json(err)
    }
}

module.exports = errorHandler