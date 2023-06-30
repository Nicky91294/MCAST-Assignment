const mongoose = require('mongoose');
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId;

const specialsSchema = new Schema({
    _id: ObjectId,
    name: String,
    brand: String,
    model: String,
    imageurl: String,
    category: String,
    price: String
})

exports.specialsSchema=specialsSchema