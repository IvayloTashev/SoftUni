const { Router } = require('express');
const { getAll, getById, getUserById, getMyPosts, } = require('../services/creature');


const homeRouter = Router();

homeRouter.get('/', (req, res) => {
    res.render('home');
});

homeRouter.get('/catalog', async (req, res) => {
    const creatures = await getAll();
    res.render('catalog', { creatures });
});

homeRouter.get('/details/:id', async (req, res) => {
    const creatureId = req.params.id;
    const creature = await getById(creatureId);

    if (!creature) {
        res.render('404');
        return;
    }

    const author = await getUserById(creature.author.toString());

    let voters = [];

    for (let user of creature.votes){
        user = await getUserById(user.toString());
        userEmail = user.email;
        voters.push(userEmail);
    }

    voters = voters.join(', ');

    creature.votesCount = creature.votes.length

    const isOwner = req.user?._id == creature.author.toString();
    const hasVoted = Boolean(creature.votes.find(e => e.toString() == req.user?._id));

    res.render('details', { creature, isOwner, hasVoted, author, voters })
});


homeRouter.get('/profile', async (req, res) => {
    const user = req.user;
    const creatures = await getMyPosts(user);
    
    creatures.forEach(x => x.votesCount = x.votes.length);

    res.render('profile', { creatures });
});


homeRouter.get('*', (req, res) => {
    res.render('404');
});

module.exports = { homeRouter }
