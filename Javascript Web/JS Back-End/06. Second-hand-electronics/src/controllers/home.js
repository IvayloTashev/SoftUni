const { Router } = require('express');
const { getAll, getById } = require('../services/electronics');

const homeRouter = Router();

homeRouter.get('/', (req, res) => {
    res.render('home');
});

homeRouter.get('/catalog', async (req, res) => {
    const electronics = await getAll();
    res.render('catalog', { electronics });
});

homeRouter.get('/details/:id', async (req, res) => {
    const id = req.params.id;
    const electronic = await getById(id);

    if (!electronic) {
        res.render('404');
        return;
    }

    const isOwner = req.user?._id == electronic.author.toString();
    const isBought = Boolean(electronic.buyingList.find(b => b.toString() == req.user?._id));

    res.render('details', { electronic, isOwner, isBought });
});

homeRouter.get('*', (req, res) => {
    res.render('404');
});

module.exports = { homeRouter }
