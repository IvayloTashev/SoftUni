const { Schema, model, Types } = require('mongoose');

// TODO replace with data model from exam description

const dataSchema = new Schema({
    // TODO add/change properties depending on exam description
    prop: {
        type: String,
        required: true,
    },
    author: {
        type: Types.ObjectId,
        ref: 'User'
    }
});

const Data = model('Data', dataSchema);

module.exports = { Data };