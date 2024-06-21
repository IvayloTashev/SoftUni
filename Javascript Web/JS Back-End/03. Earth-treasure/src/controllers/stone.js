const { Router } = require('express');
const { body, validationResult } = require('express-validator')
const { isUser, isGuest } = require('../middlewares/guards');
const { create, getById, update, deleteById, likeStone, getAll } = require('../services/stone');
const { errorParser } = require('../services/util');

const stoneRouter = Router();

stoneRouter.get('/create', isUser(), (req, res) => {
    res.render('create');
});

stoneRouter.post('/create', isUser(),
    body('name').trim().isLength({ min: 2 }).withMessage('Name must be at least 2 charecters long'),
    body('category').trim().isLength({ min: 3 }).withMessage('Category must be at least 3 charecters long'),
    body('color').trim().isLength({ min: 2 }).withMessage('Color must be at least 2 charecters long'),
    body('formula').trim().isLength({ min: 3, max: 30 }).withMessage('Formula must be between 3 and 30 charecters long'),
    body('location').trim().isLength({ min: 5, max: 15 }).withMessage('Location must be between 5 and 15 charecters long'),
    body('description').trim().isLength({ min: 10 }).withMessage('Description must be at least 10 charecters long'),
    body('image').trim().isURL({ require_tld: false }).withMessage('Image must be a valid URL'),
    async (req, res) => {
        try {
            const validation = validationResult(req);

            if (validation.errors.length) {
                throw validation.errors;
            }

            const result = await create(req.body, req.user._id);
            res.redirect('/catalog')
        } catch (err) {
            res.render('create', { data: req.body, errors: errorParser(err).errors });
        }

    });

stoneRouter.get('/edit/:id', isUser(), async (req, res) => {
    const id = req.params.id;
    const stone = await getById(id);

    if (!stone) {
        res.render('404');
        return;
    }

    const isOwner = req.user._id == stone.author.toString();

    if (!isOwner) {
        res.redirect("/login");
        return;
    }

    res.render('edit', { data: stone });
});

stoneRouter.post('/edit/:id', isUser(),
    body('name').trim().isLength({ min: 2 }).withMessage('Name must be at least 2 charecters long'),
    body('category').trim().isLength({ min: 3 }).withMessage('Category must be at least 3 charecters long'),
    body('color').trim().isLength({ min: 2 }).withMessage('Color must be at least 2 charecters long'),
    body('formula').trim().isLength({ min: 3, max: 30 }).withMessage('Formula must be between 3 and 30 charecters long'),
    body('location').trim().isLength({ min: 5, max: 15 }).withMessage('Location must be between 5 and 15 charecters long'),
    body('description').trim().isLength({ min: 10 }).withMessage('Description must be at least 10 charecters long'),
    body('image').trim().isURL({ require_tld: false }).withMessage('Image must be a valid URL'),
    async (req, res) => {
        const stoneId = req.params.id;
        const userId = req.user._id;

        try {
            const validation = validationResult(req);

            if (validation.errors.length) {
                throw validation.errors;
            }

            const result = await update(stoneId, req.body, userId);
            res.redirect('/catalog/' + stoneId)
        } catch (err) {
            res.render('edit', { data: req.body, errors: errorParser(err).errors });
        }
    });

stoneRouter.get('/like/:id', isUser(), async (req, res) => {
    const stoneId = req.params.id;
    const userId = req.user._id;

    try {
        const validation = validationResult(req);

        if (validation.errors.length) {
            throw validation.errors;
        }

        const result = await likeStone(stoneId, userId);
        res.redirect('/catalog/' + stoneId);
    } catch (err) {
        res.redirect('/catalog/' + stoneId);
    }
});

stoneRouter.get('/delete/:id', isUser(), async (req, res) => {
    const stoneId = req.params.id;
    const userId = req.user._id;

    try {
        const validation = validationResult(req);

        if (validation.errors.length) {
            throw validation.errors;
        }

        const result = await deleteById(stoneId, userId);
        res.redirect('/')
    } catch (err) {
        res.redirect('/catalog/' + stoneId);
    }
});

stoneRouter.get('/search', async (req, res) => {
    const { search } = req.query
    const stones = await getAll();

    let filter = null;

    if (!search) {
        filter = stones;

    } else {
        filter = stones.filter(stone => stone.name.toLowerCase().includes(search.toLowerCase()))
    }

    res.render('search', { filter })

})


module.exports = { stoneRouter }