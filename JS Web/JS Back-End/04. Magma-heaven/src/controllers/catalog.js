const { Router } = require('express');
const { getAll, getById, searchVolcanoes } = require('../services/volcano');

// TODO replace with real router according to exam description
const catalogRouter = Router();

catalogRouter.get('/', (req, res) => {
    res.render('home');
});

catalogRouter.get('/catalog', async (req, res) => {
    const volcanoes = await getAll();
    res.render('catalog', { volcanoes });
});

catalogRouter.get('/catalog/:id', async (req, res) => {
    const volcanoId = req.params.id;
    const volcano = await getById(volcanoId);

    if (!volcano) {
        res.render('404');
        return;
    }

    volcano.votes = volcano.voteList.length

    const isOwner = req.user?._id == volcano.author.toString();
    const hasVoted = Boolean(volcano.voteList.find(e => e.toString() == req.user?._id));

    res.render('details', { volcano, isOwner, hasVoted })
});

catalogRouter.get('/search', async (req, res) => {
    const { name, typeVolcano } = req.query;

    let volcanoes = [];

    if (name || (typeVolcano && typeVolcano != '')) {
        volcanoes = await searchVolcanoes(name, typeVolcano);

    } else {
        volcanoes = await getAll();
    }

    res.render('search', { data: { name, typeVolcano }, volcanoes })
})

catalogRouter.get('*', (req, res) => {
    res.render('404');
});


module.exports = {
    catalogRouter
}
