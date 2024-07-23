const Book = require('../models/book');

exports.createBook = (req, res, next) => {
    delete req.body._id
    const book = new Book({
        ...req.body
    });
    book.save()
    .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
    .catch(error => res.status(400).json({ error }));
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