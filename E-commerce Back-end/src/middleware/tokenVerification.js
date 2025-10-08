var jwt = require('jsonwebtoken');

const tokenVerification = (req,res, next) =>{
    const token = req.headers.authorization
    
    jwt.verify(token, process.env.jwtToken_code, (err, decoded) =>{
       if(err) return res.status(401).send('Invalid Token');
        req.user = decoded
  });
     next()
     
    
}

module.exports = tokenVerification