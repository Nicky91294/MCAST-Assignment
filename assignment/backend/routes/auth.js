var express = require('express');
var router = express.Router();
const {users} = require('../services/mongodb_service');
const auth = require('../services/auth.service')

router.post('/connect/:username/:password', async function (req,res,next){
    var tempuser = req.params.username
    var temppass = req.params.password
//Todo: check username + password against db
// get user role from db
    await users.find({'username': tempuser, 'passwrod': temppass})
        .then(
            function (data) {
                // res.send(data)
                if (data.role == 'admin') {
                    res.send({token: "bearer" + auth.GenerateAccessToken(tempuser, temppass, 'admin')}); 
                }else {
                    res.sendStatus(401);
                }
            }
        )
});

router.get('/test', auth.AuthenticateRoleAdmin, (req, res)=>{
    res.sendStatus(200);
})
module.exports = router