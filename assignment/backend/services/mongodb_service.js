const mongoose = require('mongoose');
const {usersSchema} = require('../models/user')
const {productsSchema} = require('../models/product');
const {specialsSchema } = require('../models/special');
const uri = "mongodb+srv://storeAdmin:0xT1i0RK1TQzilC8@store.h6sug0e.mongodb.net/Store"


mongoose.connect(uri).then(() => console.log('Mongodb Connected!'));

const users = mongoose.model('users', usersSchema)
const products = mongoose.model('products', productsSchema)
const specials = mongoose.model('specials', specialsSchema)
const categories = mongoose.model('categories', specialsSchema)
const brands = mongoose.model('brands', specialsSchema)

exports.users=users;
exports.products=products;
exports.specials=specials;
exports.categories=categories;
exports.brands=brands;
