const express = require('express');
const router = express.Router();
const max = require("../middleware/limiter")

const userCtrl = require('../controllers/user');

router.post('/signup', userCtrl.signup);
router.post('/login', max.limiter, userCtrl.login);

module.exports = router;