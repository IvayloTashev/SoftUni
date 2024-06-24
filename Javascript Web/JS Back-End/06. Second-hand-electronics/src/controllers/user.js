const { Router } = require('express');
const { body, validationResult } = require('express-validator');
const { isGuest, isUser } = require('../middlewares/guards');
const { register, login } = require('../services/user');
const { createToken } = require('../services/jwt');
const { errorParser } = require('../services/util');


const userRouter = Router();


userRouter.get('/register', isGuest(), async (req, res) => {
    res.render('register');
});

userRouter.post('/register', isGuest(),
    body('username').trim().isLength({ min: 3 }).withMessage('Username must be at least 3 charecters long'),
    body('email').trim().isEmail().isLength({ min: 10 }).withMessage('Email must be at least 10 charecters long'),
    body('password').trim().isLength({ min: 4 }).withMessage('Password must be at least 4 charecters long'),
    body('repass').trim().custom((value, { req }) => value == req.body.password).withMessage('Password don\'t match'),
    async (req, res) => {
        const { email, username, password } = req.body;

        try {
            const validation = validationResult(req);

            if (validation.errors.length) {
                throw validation.errors;
            }

            const result = await register(email, username, password);
            const token = createToken(result);
            res.cookie('token', token);
            res.redirect('/');

        } catch (err) {
            res.render('register', { data: { email, username }, errors: errorParser(err).errors });
        }
    }
);

userRouter.get('/login', isGuest(), async (req, res) => {
    res.render('login');
});

userRouter.post('/login', isGuest(),
    body('email').trim(),
    body('password').trim(),
    async (req, res) => {
        const { email, password } = req.body;

        try {
            const validation = validationResult(req);

            if (validation.errors.length) {
                throw validation.errors;
            }

            const result = await login(email, password);
            const token = createToken(result);
            res.cookie('token', token);
            res.redirect('/');

        } catch (err) {
            res.render('login', { data: { email }, errors: errorParser(err).errors });
        }
    }
);

userRouter.get('/logout', isUser(), async (req, res) => {
    res.clearCookie('token');
    res.redirect('/');
});


module.exports = { userRouter };