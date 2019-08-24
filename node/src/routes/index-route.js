'use strict'

const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store API by @wendreo",
        version: "0.1.3"
    })
})

module.exports = router