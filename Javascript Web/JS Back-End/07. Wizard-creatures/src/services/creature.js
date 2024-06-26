const { Creature } = require('../models/Creature');
const { User } = require('../models/User');

async function getAll() {
    return Creature.find().lean();
}

async function getById(id) {
    return Creature.findById(id).lean();
}

async function getUserById(id) {
    const user = await User.findById(id).lean();

    if (!user) {
        throw new Error('Author not found' + id)
    }

    return user;
}

async function create(data, authorId) {
    const record = new Creature({
        name: data.name,
        species: data.species,
        skinColor: data.skinColor,
        eyeColor: data.eyeColor,
        image: data.image,
        description: data.description,
        author: authorId
    });

    await record.save();

    return record
}

function getMyPosts(user) {
    const posts = Creature.find({ author: user._id }).populate("author").lean();
    return posts;
}

async function update(id, data, userId) {
    const record = await Creature.findById(id);

    if(!record) {
        throw new ReferenceError('Record not found' + id)
    }

    if (record.author.toString() != userId) {
        throw new Error('Access denied')
    }

    record.name = data.name,
    record.species = data.species,
    record.skinColor = data.skinColor,
    record.eyeColor = data.eyeColor,
    record.image = data.image,
    record.description = data.description,

    await record.save();

    return record;
}

async function addVote(creatureId, userId) {
    const record = await Creature.findById(creatureId);

    if(!record) {
        throw new ReferenceError('Record not found' + id)
    }

    if (record.author.toString() == userId) {
        throw new Error('Cannot vote for you own post')
    }

    if (record.votes.find(v => v.toString() == userId)) {
        throw new Error('Only one vote is allowed per creature');
    }

    record.votes.push(userId);

    await record.save();

    return record;
}

async function deleteById(id, userId) {
    const record = await Creature.findById(id);

    if(!record) {
        throw new ReferenceError('Record not found' + id)
    }

    if (record.author.toString() != userId) {
        throw new Error('Access denied')
    }

    await Creature.findByIdAndDelete(id);
}

module.exports = {
    getAll,
    getById,
    getUserById,
    getMyPosts,
    create,
    update,
    addVote,
    deleteById
}