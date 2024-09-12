const { Router } = require('express');
const { isUser } = require('../middlewares/guards');
const { body, validationResult } = require('express-validator');
const { errorParser } = require('../services/util');
const { create, getById, update, deleteById, addVote } = require('../services/volcano');

const volcanoRouter = Router();

volcanoRouter.get('/create', isUser(), (req, res) => {
    res.render('create')
});

volcanoRouter.post('/create', isUser(),
    body('name').trim().isLength({ min: 2 }).withMessage('Name must be at least 2 charecters long'),
    body('location').trim().isLength({ min: 3 }).withMessage('Location must be at least 3 charecters long'),
    body('elevation').trim().isInt({ min: 0 }).withMessage('Elevation must be higher than 0 meters'),
    body('lastEruption').trim().isInt({ min: 0, max: 2024 }).withMessage('Year of last eruption must be between 0 and 2024'),
    body('image').trim().isURL({ require_tld: false, require_protocol: true }).withMessage('Image must be valid URL'),
    body('typeVolcano').trim(),
    body('description').trim().isLength({ min: 10 }).withMessage('Description must be at least 10 charecters long'),
    async (req, res) => {
        const authorId = req.user._id;

        try {
            const validation = validationResult(req);

            if (validation.errors.length) {
                throw validation.errors
            }

            const volcano = await create(req.body, authorId);
            res.redirect('/catalog')
        } catch (err) {
            res.render('create', { data: req.body, errors: errorParser(err).errors })
        }
    }
);

volcanoRouter.get('/edit/:id', isUser(), async (req, res) => {
    const volcanoId = req.params.id;
    const volcano = await getById(volcanoId);

    if (!volcano) {
        res.render('404');
        return;
    }

    const isOwner = req.user._id == volcano.author.toString();

    if (!isOwner) {
        res.redirect('/login');
    }

    res.render('edit', { data: volcano })
});

volcanoRouter.post('/edit/:id', isUser(),
    body('name').trim().isLength({ min: 2 }).withMessage('Name must be at least 2 charecters long'),
    body('location').trim().isLength({ min: 3 }).withMessage('Location must be at least 3 charecters long'),
    body('elevation').trim().isInt({ min: 0 }).withMessage('Elevation must be higher than 0 meters'),
    body('lastEruption').trim().isInt({ min: 0, max: 2024 }).withMessage('Year of last eruption must be between 0 and 2024'),
    body('image').trim().isURL({ require_tld: false, require_protocol: true }).withMessage('Image must be valid URL'),
    body('typeVolcano').trim(),
    body('description').trim().isLength({ min: 10 }).withMessage('Description must be at least 10 charecters long'),
    async (req, res) => {
        const volcanoId = req.params.id;
        const userId = req.user._id;

        try {
            const validation = validationResult(req);

            if (validation.errors.length) {
                throw validation.errors
            }

            const volcano = await update(volcanoId, req.body, userId);
            res.redirect('/catalog/' + volcanoId)
        } catch (err) {
            res.render('edit', { data: req.body, errors: errorParser(err).errors })
        }
    }
);

volcanoRouter.get('/delete/:id', isUser(), async (req, res) => {
    const volcanoId = req.params.id;
    const userId = req.user._id

    try {
        const validation = validationResult(req);

        if (validation.errors.length) {
            throw validation.errors
        }

        const volcano = await deleteById(volcanoId, userId);
        res.redirect('/catalog')
    } catch (err) {
        res.redirect('/catalog/' + volcanoId)
    }
});

volcanoRouter.get('/vote/:id', isUser(), async (req, res) => {
    const volcanoId = req.params.id;
    const userId = req.user._id

    try {
        const validation = validationResult(req);

        if (validation.errors.length) {
            throw validation.errors
        }

        const volcano = await addVote(volcanoId, userId);
        res.redirect('/catalog/' + volcanoId)
    } catch (err) {
        res.redirect('/catalog/' + volcanoId)
    }
});



module.exports = { volcanoRouter }