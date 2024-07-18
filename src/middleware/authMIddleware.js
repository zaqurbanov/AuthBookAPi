
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/env');
const authMiddle = async (req,res,next)=>{
    const tokenHeader = req.header('Authorization');
    
    
    if(!tokenHeader){
        return res.status(401).json({
            success:"false",
            error:"No Token"
        })

    }
const token = tokenHeader.split(" ")[1]
    if(!token){

        return res.status(401).json({
            success:"false",
            error:"no token"
        })
    }


    try {
   const decoded = jwt.verify(token,JWT_SECRET);
        

   next()


    } catch (error) {
        console.log(error.message);
    }

}

module.exports = authMiddle