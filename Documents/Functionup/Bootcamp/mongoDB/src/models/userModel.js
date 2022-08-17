const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    author_id:{
        type: Number,
        unique: true,
        required: true
    },
    author_name: {
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
    }
}, { timestamps: true });




module.exports = mongoose.model('Authors', userSchema) //users




// String, Number
// Boolean, Object/json, array