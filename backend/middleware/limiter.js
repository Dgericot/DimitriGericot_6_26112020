const rateLimit = require("express-rate-limit")

exports.limiter = rateLimit({
    windowMs: 2 * 60 * 1000,
    max: 15,
    message: "Trop de tentatives de connexion. Le compte est bloqué pour une durée de 2 minutes"
})