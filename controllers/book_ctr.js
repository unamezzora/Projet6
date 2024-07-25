const Book = require('../models/book');
const fs = require('fs');

exports.createBook = (req, res, next) => {
    const bookObjet = JSON.parse(req.body.book);
    delete bookObjet._id;
    delete bookObjet.__userId;
    const book = new Book({
        ...bookObjet,
        userId: req.auth.userId,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });

    book.save()
    .then(() => { res.status(201).json({message: 'Livre enregistré'})})
    .catch((error) => { 
        console.error('Erreur lors de la sauvegarde du livre:', error);
        res.status(400).json({ error })})
        
    /*
    delete req.body._id
    const book = new Book({
        ...req.body
    });
    book.save()
    .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
    .catch(error => res.status(400).json({ error }));
    */
};

exports.modifyBook = (req, res, next) => {
    Book.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id} )
    .then(() => res.status(200).json({ message: 'Livre modifié !'}))
    .catch(error => res.status(400).json({ error}));
};

exports.deleteBook = (req, res, next) => {
    Book.deleteOne({ _id: req.params.id }, { ...req.body, _id: req.params.id} )
    .then(() => res.status(200).json({ message: 'Livre suprimé !'}))
    .catch(error => res.status(400).json({ error}));
};

exports.getOneBook = (req, res, next) => {
    Book.findOne({ _id: req.params.id })
    .then(books => res.status(200).json(book))
    .catch(error => res.status(400).json({ error}));
};

exports.getAllBooks = (req, res, next) => {
    Book.find()
    .then(books => res.status(200).json(books))
    .catch(error => res.status(400).json({ error}));
};