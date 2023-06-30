const mongoose = require('mongoose');
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId;

const categoriesSchema = new Schema({
    _id: ObjectId,
    category: String
})

exports.categoriesSchema = categoriesSchema