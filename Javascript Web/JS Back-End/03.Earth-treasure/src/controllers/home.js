const { Router } = require('express');
const { getRecent, getAll, getById } = require('../services/stone');

const homeRouter = Router();

homeRouter.get('/', async (req, res) => {
    const stones = await getRecent();
    res.render('home', { stones });
});

homeRouter.get('/catalog', async (req, res) => {
    const stones = await getAll();
    res.render('catalog', { stones });
});

homeRouter.get('/catalog/:id', async (req, res) => {
    const id = req.params.id;
    const stone = await getById(id);

    if (!stone) {
        res.render('404');
        return;
    }

    const isOwner = req.user?._id == stone.author.toString();
    const hasLiked = Boolean(stone.likedList.find(e => e.toString() == req.user?._id));

    res.render('details', { stone, isOwner, hasLiked });
});

module.exports = {
    homeRouter
}
