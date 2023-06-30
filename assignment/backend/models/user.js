const mongoose = require('mongoose');
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId;

const usersSchema = new Schema({
    _id: ObjectId,
    username: String,
    passwrod: String,
    role: String
})

exports.usersSchema=usersSchema