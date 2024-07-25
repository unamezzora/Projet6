const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const bookRoutes = require('./routes/book_routes');
const userRoutes = require('./routes/user_routes');




mongoose.connect('mongodb+srv://tatzemliakova:TC2fqldu0aD2ctCS@clustermvg.t8k3r4e.mongodb.net/?retryWrites=true&w=majority&appName=ClusterMVG',
   /* { useNewUrlParser: true,
      useUnifiedTopology: true }*/)
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !', error));

const app = express();
app.use(cors({
  origin: 'http://localhost:3000', // домен, с которого разрешены запросы
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  allowedHeaders: 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
}));

/*Pour gérer la requête POST venant de l'application front-end*/
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });



app.use('/api/books', bookRoutes);
app.use('/api/auth', userRoutes);


module.exports = app;