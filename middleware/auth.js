const jwt = require('jsonwebtoken');
require('dotenv').config();
exports.authCheck = (req, res, next) => {
    try{
        const token= req.body.token || req.cookies.token || req.headers.authorization.split(' ')[1];
        
        try{
            
            const decoded =jwt.verify(token, process.env.JWT_SECRET);
                       
            

        }catch(error){
            return res.status(401).json({
                success: 'false',
                message: 'Invalid token'
            });
        }
        next();
    }catch(error){
        res.status(500).json(
            {   
                success: 'false',
                message: "Token not found"
            }
        );
    }
}