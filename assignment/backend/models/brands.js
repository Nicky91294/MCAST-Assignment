const mongoose = require('mongoose');
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId;

const brandsSchema = new Schema({
    _id: ObjectId,
    brand: String
})

exports.bandsSchema=brandsSchema