const mongoose = require('mongoose');
require('../models/User');
require('../models/Course');


async function configDatabase() {
    const connectionString = 'mongodb://127.0.0.1:27017/course-book';

    mongoose.connect(connectionString);

    console.log('Database connected');
}

module.exports = { configDatabase }