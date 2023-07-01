const jwt = require('jsonwebtoken');

function generateAccessToken(username, role){
    return jwt.sign({username:username, password:password, role: role}, process.env.TOKEN_SECRET, {expiresIn: '1800s'})
}

function authenticateToken(req,res,next){
    const authHeader = req.header['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        console.log(err);

        if (err){ return res.sendStatus(403);}
        req.user=user;

        next();
    })
}


function authenticateRoleAdmin(req,res,next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user)=>{
        console.log(err);

        if (err || user.role != 'admin'){ return res.sendStatus(403);}
        req.user = user;

        next();
    })
}

exports.GenerateAccessToken = generateAccessToken
exports.AuthenticateToken = authenticateToken
exports.AuthenticateRoleAdmin = authenticateRoleAdmin