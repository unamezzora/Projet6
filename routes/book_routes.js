const express = require('express');
const router = express.Router();

const bookCtrl = require('../controllers/book_ctr');

router.post('/', bookCtrl.createBook);
router.get('/', bookCtrl.getAllBooks);
router.get('/:id', bookCtrl.getOneBook);
router.put('/:id', bookCtrl.modifyBook);
router.delete('/:id', bookCtrl.deleteBook);



/*
router.post('/api/auth/signup', (req, res, next) => {
    console.log(req.body);
    const user = new User({
        ...req.body
    });
    user.save()
    .then(() => res.status(201).json({ message: 'Utilisateur enregistré !'}))
    .catch(error => res.status(400).json({ error }));
});

router.post('/api/auth/login', (req, res, next) => {
    console.log(req.body);
    res.status(201).json({
        message: 'objet créé'
    });
});

router.post('/:id/rating', (req, res, next) => {
    console.log(req.body);
    res.status(201).json({
        message: 'rating créé'
    });
});
*/

module.export = router;