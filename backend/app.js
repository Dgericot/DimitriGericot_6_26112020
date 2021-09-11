const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const { limiter } = require('./middleware/limiter');


const sauceRoutes = require('./routes/sauce')
const userRoutes = require('./routes/user');


mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

app.use(helmet());
app.use(cors());


app.use(bodyParser.json());


app.use('/images', express.static(path.join(__dirname, 'images')));


app.use('/api/sauces', sauceRoutes);
app.use('/api/auth', limiter, userRoutes);

module.exports = app;