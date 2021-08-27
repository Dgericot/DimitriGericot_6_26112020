const rateLimit = require("express-rate-limit")

const limiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 3,
    message: "Trop de tentatives de connexion. Le compte est bloqué pour une durée de 10 minutes"
})

module.exports = { limiter }