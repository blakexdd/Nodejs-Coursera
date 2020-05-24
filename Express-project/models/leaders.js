const mongoose = require('mongoose');

const leadersSchema = mongoose.Schema({
    "name": {
        type: String,
        required: true,
        unique: true
    },
    "image": {
        type: String,
        required: true,
    },
    "designation": {
        type: String,
        required: true
    },
    "abbr": {
        type: String,
        required: true
    },
    "description": {
        type: String,
        required: true
    },
    "feautured": {
        type: Boolean,
        required: true
    }
});

const leadersModel = mongoose.model('Leader', leadersSchema);

module.exports = leadersModel;