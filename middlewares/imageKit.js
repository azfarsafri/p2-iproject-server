"use strict";

const axios = require("axios");
const formData = require("form-data")

const imgKit = async (req, res, next) => {
    const key = new Buffer.from(process.env.IMAGEKIT_SECRET + ':').toString("base64");
    try {
        const form = new formData()
        form.append("file", new Buffer.from(req.file.buffer).toString("base64"))
        form.append("fileName", req.file.originalname)
        const result = await axios({
            method: "POST",
            url: "https://upload.imagekit.io/api/v1/files/upload",
            headers: {
                ...form.getHeaders(),
                Authorization: `Basic ${key}`
            },
            data: form
        })
        req.body.imageUrl = result.data.url
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = imgKit