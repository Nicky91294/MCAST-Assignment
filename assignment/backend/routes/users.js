var express = require('express');
var router = express.Router();
const {users} = require('../services/mongodb_service');

/* GET users route listing. */
router.get('/', function(req, res, next) {
  res.send('Users route');
});

/* GET All users listing. */
router.get('/find', async function(req, res, next){
  await users.find({}).then((data)=> res.send(data))
});

/* GET users by role(admin/client). */
router.get('/role/:role', async function(req,res,next){
  await users.find({'role':req.params['role']})
  .then((data)=>res.send(data))
})

//  GET by username */
router.get('/username/:username', async function(req,res,next){
  await users.find({'username':req.params['username']})
  .then((data)=>res.send(data))
})

module.exports = router;
