var express = require('express');
var router = express.Router();
const {categories} = require('../services/mongodb_service');

/* GET categories route listing. */
router.get('/', async function(req, res, next) {
    await categories.find({}, {_id: 0}).sort({"category":1}).then((data)=> res.send(data))
});

/* GET All products. */
router.get('/find', async function(req, res, next){
    await categories.find({}).then((data)=> res.send(data))
  });

//Add new Category
  router.post('/newCategory', async function(req,res,next){
    var payload = req.body;
    await categories.insertMany([payload])
    res.end()
})

router.delete('/deleteCategory/:category', async function(req, res, next){
    await categories.deleteOne({'category':req.params['category']})
    .then((data)=> res.send(data))
  });

  module.exports = router;