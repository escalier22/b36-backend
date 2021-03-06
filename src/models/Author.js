const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    first_name:{
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
    },
    birth_date: {
        type: Date,
    },
    gender: {
        type: String,
        enum: ('M', 'F', 'O'),
    },
    post: {
        type: [Schema.Type.ObjectId],
        ref: 'post'
    },
    is_active:{
        type: Boolean,
        default: true,
    }
},{
    timestamps: true,
});

module.exports = mongoose.model('author', AuthorSchema);