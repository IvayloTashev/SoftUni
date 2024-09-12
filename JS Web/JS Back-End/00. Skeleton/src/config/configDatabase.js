const mongoose = require('mongoose');
require('../models/User');
// TODO import real name model
require('../models/Data');



async function configDatabase() {
    // TODO set database name
    const connectionString = 'mongodb://127.0.0.1:27017/exam-db';

    mongoose.connect(connectionString);

    console.log('Database connected');
}

module.exports = { configDatabase }