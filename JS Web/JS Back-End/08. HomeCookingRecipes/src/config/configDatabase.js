const mongoose = require('mongoose');
require('../models/User');
require('../models/Recipe');


async function configDatabase() {
    const connectionString = 'mongodb://127.0.0.1:27017/home-cooking-recipes';

    mongoose.connect(connectionString);

    console.log('Database connected');
}

module.exports = { configDatabase }