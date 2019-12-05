import mongoose from 'mongoose';

import { RegExp } from './constants';

const UserSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: RegExp.email,
    },
    password: {
        type: String,
        require: true
    },
});

module.exports = mongoose.model('User', UserSchema);
