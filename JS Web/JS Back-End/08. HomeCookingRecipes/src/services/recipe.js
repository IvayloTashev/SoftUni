const { Recipe } = require('../models/Recipe');


async function getAll() {
    return Recipe.find().lean();
}

async function getById(id) {
    return Recipe.findById(id).lean();
}

async function getRecent(){
    return Recipe.find().sort({$natural: -1}).limit(3).lean();
}

async function create(data, authorId) {

    const record = new Recipe({
        title: data.title,
        ingredients: data.ingredients,
        instructions: data.instructions,
        description: data.description,
        image: data.image,
        author: authorId
    });

    await record.save();

    return record
}

async function update(id, data, userId) {
    const record = await Recipe.findById(id);

    if(!record) {
        throw new ReferenceError('Record not found' + id)
    }

    if (record.author.toString() != userId) {
        throw new Error('Access denied')
    }

    record.title = data.title,
    record.ingredients = data.ingredients,
    record.instructions = data.instructions,
    record.description = data.description,
    record.image = data.image,

    await record.save();

    return record;
}

async function deleteById(id, userId) {
    const record = await Recipe.findById(id);

    if(!record) {
        throw new ReferenceError('Record not found' + id)
    }

    if (record.author.toString() != userId) {
        throw new Error('Access denied')
    }

    await Recipe.findByIdAndDelete(id);
}

async function addRecommend(recipeId, userId) {
    const record = await Recipe.findById(recipeId);

    if (!record) {
        throw new Error('Record not found' + recipeId);
    }

    if (record.author.toString() == userId) {
        throw new Error('Cannot recommend your own recipe');
    }

    if(record.recommendList.find(r => r.toString() == userId)) {
        throw new Error('Already recommend this recipe');
    }

    record.recommendList.push(userId);

    await record.save()

    return record;
}

async function searchRecepies(title) {
    const query = {};

    if (title) {
        query.title = new RegExp(title, 'i');
    }

    return Recipe.find(query).lean();
}

module.exports = {
    getAll,
    getById,
    getRecent,
    create,
    update,
    deleteById,
    addRecommend,
    searchRecepies
}