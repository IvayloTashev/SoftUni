const { Router } = require("express");
const { body, validationResult } = require("express-validator")
const { User } = require("../models/User");
const { isGuest, isUser } = require("../middlewares/guards");
const { register, login } = require("../services/user");
const { createToken } = require("../services/jwt");
const { errorParser } = require("../services/util");

const userRouter = Router();

userRouter.get('/register', isGuest(), (req, res) => {
    res.render('register');
});

userRouter.post('/register', isGuest(),
    body('email').trim().isEmail().isLength({ min: 10 }).withMessage('Email must be at least 10 charecters long'),
    body('password').trim().isLength({ min: 4 }).withMessage('Password must be at least 4 charecters long'),
    body('repass').trim().custom((value, { req }) => value == req.body.password).withMessage('Password don\'t match'),
    async (req, res) => {
        const { email, password } = req.body;

        try {
            const validation = validationResult(req);

            if (validation.errors.length) {
                throw validation.errors;
            }

            const result = await register(email, password);
            const token = createToken(result);

            res.cookie('token', token);

            res.redirect('/')
        } catch (err) {
            res.render('register', { data: { email }, errors: errorParser(err).errors });
        }
    });

    userRouter.get('/login', isGuest(), (req, res) => {
        res.render('login');
    });
    
    userRouter.post('/login', isGuest(),
        body('email').trim(),
        body('password').trim(),
        async (req, res) => {
            const { email, password } = req.body;
    
            try {
                const result = await login(email, password);
                const token = createToken(result);
    
                res.cookie('token', token);
    
                res.redirect('/')
            } catch (err) {
                res.render('login', { data: { email }, errors: errorParser(err).errors });
            }
        });

        userRouter.get('/logout', (req, res) => {
            res.clearCookie('token');
            res.redirect('/');
        })

module.exports = { userRouter }
