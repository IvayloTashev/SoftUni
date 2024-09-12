const mongoose = require('mongoose');
require('../models/User');
// TODO import real name model
require('../models/Creature');



async function configDatabase() {
    const connectionString = 'mongodb://127.0.0.1:27017/wizard-creatures';

    mongoose.connect(connectionString);

    console.log('Database connected');
}

module.exports = { configDatabase }