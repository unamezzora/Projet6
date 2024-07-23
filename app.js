const express = require('express');
const mongoose = require('mongoose');

const stuffRoutes = require('./routes/book_routes');
/*
const User = require('./models/book');*/

mongoose.connect('mongodb+srv://tatzemliakova:TC2fqldu0aD2ctCS@clustermvg.t8k3r4e.mongodb.net/?retryWrites=true&w=majority&appName=ClusterMVG',
   /* { useNewUrlParser: true,
      useUnifiedTopology: true }*/)
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

/*Pour gérer la requête POST venant de l'application front-end*/
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use('/api/book_routes', stuffRoutes);

module.exports = app;