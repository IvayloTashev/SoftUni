const { Router } = require('express');
const { getRecent, getAll, getById, getAuthor } = require('../services/course');


const catalogRouter = Router();

catalogRouter.get('/', async (req, res) => {
    const courses = await getRecent();
    res.render('home', { courses });
});

catalogRouter.get('/catalog', async (req, res) => {
    const courses = await getAll();
    res.render('catalog', { courses });
});

catalogRouter.get('/catalog/:id', async (req, res) => {
    const id = req.params.id;
    const course = await getById(id);

    if (!course) {
        res.render('404');
        return;
    }

    let isEmpty = true;

    if (course.signUpList.length > 0) {
        isEmpty = false
    }

    const users = course.signUpList;
    let signedUsers = [];

    for (let user of users) {
        curUser = await getAuthor(user);
        username = curUser.username
        signedUsers.push(username);
    }

    signedUsers = signedUsers.join(', ');

    const author = await getAuthor(course.author.toString());
    const authorEmail = author.email;

    const isOwner = req.user?._id == course.author.toString();
    const hasSigned = Boolean(course.signUpList.find(s => s.toString() == req.user?._id));

    res.render('details', { course, isOwner, hasSigned, authorEmail, isEmpty, signedUsers});
});

catalogRouter.get('*', (req, res) => {
    res.render('404');
});

module.exports = {
    catalogRouter
}
