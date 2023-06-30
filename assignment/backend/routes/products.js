var express = require('express');
var router = express.Router();
const {products} = require('../services/mongodb_service');

/* GET products route listing. */
router.get('/', function(req, res, next) {
  res.send('Products route');
});

/* GET All products. */
router.get('/find', async function(req, res, next){
  await products.find({}).then((data)=> res.send(data))
});

/* GET by name. */
router.get('/name/:name', async function(req, res, next){
    await products.findOne({'name':req.params['name']})
    .then((data)=> res.send(data))
  });

/* GET by brand. */
router.get('/brand/:brand', async function(req,res,next){
    await products.find({'brand':req.params['brand']})
    .then((data)=>res.send(data))
})

//get distinct brands 
router.get('/brand', async function(req,res,next){
  await products.distinct("brand").then((data)=>res.send(data))
})

/* GET by model. */
router.get('/model/:model', async function(req, res, next){
    await products.find({'model':req.params['model']})
    .then((data)=> res.send(data))
  });

/* GET by category. */
router.get('/category/:category', async function(req, res, next){
    await products.find({'category':req.params['category']})
    .then((data)=> res.send(data))
  });

//get distinct categories 
router.get('/category', async function(req,res,next){
  await products.distinct("category").then((data)=>res.send(data))
})

/* GET by price. */
router.get('/price/:price', async function(req, res, next){
    var price= req.params.price
    await products.find({'price':price})
    .then((data)=> res.send(data))
  });

/* Delete by name */
router.delete('/delete/:name', async function(req, res, next){
  await products.deleteOne({'name':req.params['name']})
  .then((data)=> res.send(data))
});

// Create new product
router.post('/new', async function(req,res,next){
  products.create(req.body).then((data)=>res.send(data))
})


/* Update product by name*/
router.patch('/update', async function(req,res,next){
  var productToUpdate= req.body;
  products.updateOne({name:productToUpdate.name}, productToUpdate)
  .then(res.send('ok updated'));
})


module.exports = router;