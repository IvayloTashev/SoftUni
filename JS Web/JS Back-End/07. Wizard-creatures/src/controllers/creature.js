const { Router } = require('express');
const { isUser } = require('../middlewares/guards');
const { body, validationResult } = require('express-validator');
const { errorParser } = require('../services/util');
const { create, update, getById, deleteById, addVote } = require('../services/creature');


const creatureRouter = Router();

creatureRouter.get('/create', isUser(), (req, res) => {
    res.render('create');
});

creatureRouter.post('/create', isUser(),
    body('name').trim().isLength({ min: 2 }).withMessage('Name must be at least 2 charecters long'),
    body('species').trim().isLength({ min: 3 }).withMessage('Species must be at least 3 charecters long'),
    body('image').trim().isURL({ require_tld: false, require_protocol: true }).withMessage('Image must be valid URL'),
    body('skinColor').trim().isLength({ min: 3 }).withMessage('Skin Color must be at least 3 charecters long'),
    body('eyeColor').trim().isLength({ min: 3 }).withMessage('Eye Color must be at least 3 charecters long'),
    body('description').trim().isLength({ min: 5, max: 500 }).withMessage('Description must be between 5 and 500 charecters long'),
    async (req, res) => {
        const authorId = req.user._id;

        try {
            const validation = validationResult(req);

            if (validation.errors.length) {
                throw validation.errors;
            }

            const result = await create(req.body, authorId);
            res.redirect('/catalog');

        } catch (err) {
            res.render('create', { data: req.body, errors: errorParser(err).errors })
        }
    }
);

creatureRouter.get('/edit/:id', isUser(), async (req, res) => {
    const creatureId = req.params.id;
    const creature = await getById(creatureId);

    if (!creature) {
        res.render('404');
        return;
    }

    const isOwner = req.user._id == creature.author.toString();

    if (!isOwner) {
        res.redirect('/login');
    }

    res.render('edit', { data: creature });
});

creatureRouter.post('/edit/:id', isUser(),
    body('name').trim().isLength({ min: 2 }).withMessage('Name must be at least 2 charecters long'),
    body('species').trim().isLength({ min: 3 }).withMessage('Species must be at least 3 charecters long'),
    body('image').trim().isURL({ require_tld: false, require_protocol: true }).withMessage('Image must be valid URL'),
    body('skinColor').trim().isLength({ min: 3 }).withMessage('Skin Color must be at least 3 charecters long'),
    body('eyeColor').trim().isLength({ min: 3 }).withMessage('Eye Color must be at least 3 charecters long'),
    body('description').trim().isLength({ min: 5, max: 500 }).withMessage('Description must be between 5 and 500 charecters long'),
    async (req, res) => {
        const creatureId = req.params.id;
        const userId = req.user._id;

        try {
            const validation = validationResult(req);

            if (validation.errors.length) {
                throw validation.errors;
            }

            const result = await update(creatureId, req.body, userId);
            res.redirect('/catalog');

        } catch (err) {
            res.render('edit', { data: req.body, errors: errorParser(err).errors })
        }
    }
);

creatureRouter.get('/delete/:id', isUser(), async (req, res) => {
    const creatureId = req.params.id;
    const userId = req.user._id;

    try {
        const validation = validationResult(req);

        if (validation.errors.length) {
            throw validation.errors;
        }

        const result = await deleteById(creatureId, userId);
        res.redirect('/catalog');

    } catch (err) {
        res.redirect('/details/' + creatureId);
    }
});

creatureRouter.get('/vote/:id', isUser(), async (req, res) => {
    const creatureId = req.params.id;
    const userId = req.user._id;

    try {
        const validation = validationResult(req);

        if (validation.errors.length) {
            throw validation.errors;
        }

        const result = await addVote(creatureId, userId);
        res.redirect('/details/' + creatureId);

    } catch (err) {
        res.redirect('/details/' + creatureId);
    }
});










module.exports = { creatureRouter }