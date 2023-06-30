var express = require('express');
var router = express.Router();
const {brands} = require('../services/mongodb_service');

/* GET brands route listing. */
router.get('/', async function(req, res, next) {
    await brands.find({}, {_id: 0}).sort({"brand":1}).then((data)=> res.send(data))
});

/* GET All products. */
router.get('/find', async function(req, res, next){
    await brands.find({}).then((data)=> res.send(data))
  });

//Add new Category
  router.post('/newBrand', async function(req,res,next){
    var payload = req.body;
    await brands.insertMany([payload])
    res.end()
})

router.delete('/deleteBrand/:brand', async function(req, res, next){
    await brands.deleteOne({'brand':req.params['brand']})
    .then((data)=> res.send(data))
  });

module.exports = router;