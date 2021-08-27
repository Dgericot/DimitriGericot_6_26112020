const jwt = require('jsonwebtoken');

const { CONFIG } = require('../config/config');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        /*const decodedToken = jwt.verify(token, process.env.JWT_SECRET);*/
        const decodedToken = jwt.verify(token, CONFIG.jwtSecret);
        const userId = decodedToken.userId;
        if (req.body.userId && req.body.userId !== userId) {
            throw 'User ID non valable !';
        } else {
            next();
        }
    } catch (error) {
        res.status(401).json({ error: error | 'Requête non-authentifiée !' });
    }
}