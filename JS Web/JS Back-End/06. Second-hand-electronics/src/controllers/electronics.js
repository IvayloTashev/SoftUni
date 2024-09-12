const { Router } = require('express');
const { body, validationResult } = require('express-validator');
const { isUser } = require('../middlewares/guards');
const { errorParser } = require('../services/util');
const { create, buyElectronic, update, getById, deleteById, searchElectronics, getAll} = require('../services/electronics');

const electronicsRouter = Router();

electronicsRouter.get('/create', isUser(), (req, res) => {
    res.render('create');
});

electronicsRouter.post('/create', isUser(),
    body('name').trim().isLength({ min: 10 }).withMessage('Name must be at least 10 charecters long'),
    body('type').trim().isLength({ min: 2 }).withMessage('Type must be at least 2 charecters long'),
    body('damages').trim().isLength({ min: 10 }).withMessage('Damages must be at least 10 charecters long'),
    body('image').trim().isURL({ require_tld: false, require_protocol: true }).withMessage('Image must be valid URL'),
    body('description').trim().isLength({ min: 10, max: 200 }).withMessage('Description must be between 10 and 200 charecters long'),
    body('production').trim().isInt({ min: 1900, max: 2023 }).withMessage('Production must be year between 1900 and 2023'),
    body('exploitation').trim().isInt({ min: 1 }).withMessage('Exploitation must be a positive number'),
    body('price').trim().isInt({ min: 1 }).withMessage('Price must be a positive number'),
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
            res.render('create', { data: req.body, errors: errorParser(err).errors });
        }
    }
);

electronicsRouter.get('/buy/:id', isUser(), async (req, res) => {
    const id = req.params.id;
    userId = req.user._id;

    try {
        const validation = validationResult(req);

        if (validation.errors.length) {
            throw validation.errors;
        }

        const result = await buyElectronic(id, userId);
        res.redirect('/details/' + id);

    } catch (err) {
        res.redirect('/details/' + id);
    }
});

electronicsRouter.get('/edit/:id', isUser(), async (req, res) => {
    const id = req.params.id;
    const electronic = await getById(id);

    if (!electronic) {
        res.render('404');
        return;
    }

    const isOwner = req.user._id == electronic.author.toString();

    if (!isOwner) {
        res.redirect('/login');
    }

    res.render('edit', { data: electronic });
});

electronicsRouter.post('/edit/:id', isUser(),
    body('name').trim().isLength({ min: 10 }).withMessage('Name must be at least 10 charecters long'),
    body('type').trim().isLength({ min: 2 }).withMessage('Type must be at least 2 charecters long'),
    body('damages').trim().isLength({ min: 10 }).withMessage('Damages must be at least 10 charecters long'),
    body('image').trim().isURL({ require_tld: false, require_protocol: true }).withMessage('Image must be valid URL'),
    body('description').trim().isLength({ min: 10, max: 200 }).withMessage('Description must be between 10 and 200 charecters long'),
    body('production').trim().isInt({ min: 1900, max: 2023 }).withMessage('Production must be year between 1900 and 2023'),
    body('exploitation').trim().isInt({ min: 1 }).withMessage('Exploitation must be a positive number'),
    body('price').trim().isInt({ min: 1 }).withMessage('Price must be a positive number'),
    async (req, res) => {
        const id = req.params.id;
        const userId = req.user._id;

        try {
            const validation = validationResult(req);

            if (validation.errors.length) {
                throw validation.errors;
            }

            const result = await update(id, req.body, userId);
            res.redirect('/details/' + id);

        } catch (err) {
            res.render('edit', { data: req.body, errors: errorParser(err).errors });
        }
    }
);

electronicsRouter.get('/delete/:id', isUser(), async (req, res) => {
    const id = req.params.id;
    const userId = req.user._id;

    try {
        const validation = validationResult(req);

        if (validation.errors.length) {
            throw validation.errors;
        }

        const electronic = await deleteById(id, userId);
        res.redirect('/catalog');

    } catch (err) {
        res.redirect('/details/' + id);
    }
});

electronicsRouter.get('/search', isUser(), async (req, res) => {
    const { name, type } = req.query;

    let electronics = [];

    if (name || (type && type != '')) {
        electronics = await searchElectronics(name, type);

    } else {
        electronics = await getAll();
    }

    res.render('search', { data: { name, type }, electronics })
});


module.exports = { electronicsRouter }