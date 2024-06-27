const { Router } = require('express');
const { body, validationResult } = require('express-validator');
const { create, addRecommend, update, getById, deleteById} = require('../services/recipe');
const { isUser } = require('../middlewares/guards');
const { errorParser } = require('../services/util');

const recipeRouter = Router();

recipeRouter.get('/create', isUser(), (req, res) => {
    res.render('create')
});

recipeRouter.post('/create', isUser(),
    body('title').trim().isLength({ min: 2 }).withMessage('Title must be at least 2 charecters long'),
    body('description').trim().isLength({ min: 10, max: 100 }).withMessage('Description must be between 10 and 100 charecters long'),
    body('ingredients').trim().isLength({ min: 10, max: 200 }).withMessage('Ingredients must be between 10 and 200 charecters long'),
    body('instructions').trim().isLength({ min: 10 }).withMessage('Instructions must be at least 10 charecters long'),
    body('image').trim().isURL({ require_tld: false, require_protocol: true }).withMessage('Image must be a valid url'),
    async (req, res) => {

        const authorId = req.user._id;

        try {
            const validation = validationResult(req);

            if (validation.errors.length) {
                throw validation.errors
            }

            const recipe = await create(req.body, authorId);
            res.redirect('/catalog')
        } catch (err) {
            res.render('create', { data: req.body, errors: errorParser(err).errors })
        }
    }
);

recipeRouter.get('/edit/:id', isUser(), async (req, res) => {
    const id = req.params.id;
    const recipe = await getById(id);

    if (!recipe) {
        res.render('404');
        return;
    }

    const isOwner = req.user._id == recipe.author.toString();

    if (!isOwner) {
        res.redirect("/login");
        return;
    }

    res.render('edit', { data: recipe });
});

recipeRouter.post('/edit/:id', isUser(),
    body('title').trim().isLength({ min: 2 }).withMessage('Title must be at least 2 charecters long'),
    body('description').trim().isLength({ min: 10, max: 100 }).withMessage('Description must be between 10 and 100 charecters long'),
    body('ingredients').trim().isLength({ min: 10, max: 200 }).withMessage('Ingredients must be between 10 and 200 charecters long'),
    body('instructions').trim().isLength({ min: 10 }).withMessage('Instructions must be at least 10 charecters long'),
    body('image').trim().isURL({ require_tld: false, require_protocol: true }).withMessage('Image must be a valid url'),
    async (req, res) => {
        const recipeId = req.params.id;
        const userId = req.user._id;

        try {
            const validation = validationResult(req);

            if (validation.errors.length) {
                throw validation.errors
            }

            const recipe = await update(recipeId, req.body, userId);
            res.redirect('/details/' + recipeId)
        } catch (err) {
            res.render('edit', { data: req.body, errors: errorParser(err).errors })
        }
    }
);

recipeRouter.get('/delete/:id', isUser(), async (req, res) => {
    const recipeId = req.params.id;
    const userId = req.user._id;

    try {
        const validation = validationResult(req);

        if (validation.errors.length) {
            throw validation.errors;
        }

        const result = await deleteById(recipeId, userId);
        res.redirect('/catalog')
    } catch (err) {
        res.redirect('/catalog/' + recipeId);
    }
});

recipeRouter.get('/recommend/:id', isUser(), async (req, res) => {
    const recipeId = req.params.id;
    const userId = req.user._id;

    try {
        const validation = validationResult(req);

        if (validation.errors.length) {
            throw validation.errors;
        }

        const result = await addRecommend (recipeId, userId);
        res.redirect('/details/' + recipeId);
    } catch (err) {
        res.redirect('/details/' + recipeId);
    }
});






module.exports = { recipeRouter }