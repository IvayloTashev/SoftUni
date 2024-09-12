const { Router } = require('express');
const { isUser } = require('../middlewares/guards');
const { body, validationResult } = require('express-validator');
const { errorParser } = require('../services/util');
const { create, update, getById, deleteById, signUp, getCreatedCourses, getSignUpCourses } = require('../services/course');

const courseRouter = Router();

courseRouter.get('/create', isUser(), async (req, res) => {
    res.render('create');
});

courseRouter.post('/create', isUser(),
    body('title').trim().isLength({ min: 5 }).withMessage('Title must be at least 5 charecters long'),
    body('image').trim().isURL({ require_tld: false, require_protocol: true }).withMessage('Image must be a valid URL'),
    body('description').trim().isLength({ min: 10 }).withMessage('Description must be at least 10 charecters long'),
    body('type').trim().isLength({ min: 3 }).withMessage('Type must be at least 3 charecters long'),
    body('certificate').trim().isLength({ min: 2 }).withMessage('Certificate must be at least 2 charecters long'),
    body('price').trim().isInt({ min: 0 }).withMessage('Price must be a positive number'),
    async (req, res) => {

        const authorId = req.user._id;

        try {
            const validation = validationResult(req);

            if (validation.errors.length) {
                throw validation.errors;
            }

            const course = await create(req.body, authorId);
            res.redirect('/catalog')
        } catch (err) {
            res.render('create', { data: req.body, errors: errorParser(err).errors });
        }
    }
);

courseRouter.get('/edit/:id', isUser(), async (req, res) => {
    const id = req.params.id;
    const course = await getById(id);

    if (!course) {
        res.render('404');
        return;
    }

    const isOwner = req.user._id == course.author.toString();

    if (!isOwner) {
        res.redirect('/login');
    }

    res.render('edit', { data: course });
});

courseRouter.post('/edit/:id', isUser(),
    body('title').trim().isLength({ min: 5 }).withMessage('Title must be at least 5 charecters long'),
    body('image').trim().isURL({ require_tld: false, require_protocol: true }).withMessage('Image must be a valid URL'),
    body('description').trim().isLength({ min: 10 }).withMessage('Description must be at least 10 charecters long'),
    body('type').trim().isLength({ min: 3 }).withMessage('Type must be at least 3 charecters long'),
    body('certificate').trim().isLength({ min: 2 }).withMessage('Certificate must be at least 2 charecters long'),
    body('price').trim().isInt({ min: 0 }).withMessage('Price must be a positive number'),
    async (req, res) => {

        const courseId = req.params.id;
        const userId = req.user._id;

        try {
            const validation = validationResult(req);

            if (validation.errors.length) {
                throw validation.errors;
            }

            const course = await update(courseId, req.body, userId);
            res.redirect('/catalog/' + courseId)
        } catch (err) {
            res.render('edit', { data: req.body, errors: errorParser(err).errors });
        }
    }
);

courseRouter.get('/delete/:id', isUser(), async (req, res) => {
    const courseId = req.params.id;
    const userId = req.user._id

    try {
        const validation = validationResult(req);

        if (validation.errors.length) {
            throw validation.errors
        }

        const course = await deleteById(courseId, userId);
        res.redirect('/catalog')
    } catch (err) {
        res.redirect('/catalog/' + courseId)
    }
});

courseRouter.get('/sign-up/:id', isUser(), async (req, res) => {
    const courseId = req.params.id;
    const userId = req.user._id;

    try {
        const validation = validationResult(req);

        if (validation.errors.length) {
            throw validation.errors
        }

        const course = await signUp(courseId, userId);
        res.redirect('/catalog/' + courseId)
    } catch (err) {
        res.redirect('/catalog/' + courseId)
    }
});

courseRouter.get('/profile', isUser(), async (req, res) => {
    const user = req.user;
    const createdCourses = await getCreatedCourses(user._id);
    const signedCourses = await getSignUpCourses(user._id);

    const createdCount = createdCourses.length;
    const singedCount = signedCourses.courseList.length;

    console.log(signedCourses.courseList);

    res.render('profile', { user, createdCount, singedCount, createdCourses, signedCourses: signedCourses.courseList })
})

module.exports = { courseRouter }