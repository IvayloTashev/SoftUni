const { Router } = require('express');
const { getRecent, getAll, getById, searchRecepies } = require('../services/recipe');


const homeRouter = Router();

homeRouter.get('/', async (req, res) => {
    const recipes = await getRecent();
    res.render('home', { recipes });
});

homeRouter.get('/catalog', async (req, res) => {
    const recipes = await getAll();
    res.render('catalog', { recipes });
});

homeRouter.get('/details/:id', async (req, res) => {

    const recipeId = req.params.id;
    const recipe = await getById(recipeId);

    if (!recipe) {
        res.render('404');
        return;
    }

    const recommendCount = recipe.recommendList.length;
    const isOwner = req.user?._id == recipe.author.toString();
    const hasRecommend = Boolean(recipe.recommendList.find(e => e.toString() == req.user?._id));

    res.render('details', { recipe, isOwner, hasRecommend, recommendCount });
});

homeRouter.get('/search', async (req, res) => {
    const { title } = req.query;

    let recipes = [];

    if (title) {
        recipes = await searchRecepies(title);

    } else {
        recipes = await getAll();
    }

    res.render('search', { recipes })

});




homeRouter.get('*', async (req, res) => {
    res.render('404');
});



module.exports = { homeRouter }
