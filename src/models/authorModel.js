const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    authorName: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    }
}, { timestamps: true });



module.exports = mongoose.model('newAuthor', userSchema) //users

// String, Number
// Boolean, Object/json, array