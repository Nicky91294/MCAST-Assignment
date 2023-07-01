var express = require('express');
var router = express.Router();
var CryptoJS = require("crypto-js");
var key = CryptoJS.enc.Hex.parse("0123456789123456");
var iv = CryptoJS.enc.Hex.parse("0123456789123456");
const {users} = require('../services/mongodb_service');

/* GET users route listing. */
router.get('/', function(req, res, next) {
  res.send('Users route');
});

/* GET All users listing. */
router.get('/find', async function(req, res, next){
  await users.find({}, {password:0}).then((data)=> res.send(data))
});

/* GET users by role(admin/client). */
router.get('/role/:role', async function(req,res,next){
  await users.find({'role':req.params['role']})
  .then((data)=>res.send(data))
})

//  GET by username */
router.get('/:username', async function(req,res,next){
  await users.find({'username':req.params['username']})
  .then((data)=>res.send(data))
})

//  GET password encrypted */
// router.get('/:username/:password', async function(req,res,next){
//   var pass = req.params['password']
//   var decrypted = CryptoJS.AES.decrypt(pass, key, { iv: iv });
//   // console.log(JSON.parse(decrypted))
//   await users.find({'username':req.params['username'], 'password':JSON.parse(decrypted)}, {role: 1, _id:0})
//   .then((data)=>res.send(data))
// })

router.get('/:username/:password', async function(req,res,next){
  // var pass = req.params['password']
  // var decrypted = CryptoJS.AES.decrypt(pass, key, { iv: iv });
  // // console.log(JSON.parse(decrypted))
  await users.find({'username':req.params['username'], 'password':req.params['password']}, {role: 1, _id:0})
  .then((data)=>res.send(data))
})

module.exports = router;
