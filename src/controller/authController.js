const User_Model = require("../models/User_Model");
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require("../config/env");

const loginUser = async(req,res)=>{


    const {username,password} = req.body

    try {
       
        const user  = await User_Model.findOne({username});
        if(!user){
          return  res.status(400).json({
                success:false,
                error:"Username or Password are failed",
            })
        }

        const compareHash  = await bcryptjs.compare(password,user.password);
        
        if(!compareHash){
           return res.status(400).json({
                success:false,
                error:" Password are failed",
            })
        }
        
        const token = jwt.sign({id:user._id},JWT_SECRET,{
            expiresIn:"1h"
        });
        
       return res.status(200).json({
            success:true,
            token:token

        })



    } catch (error) {
        
    }

}


const registerUser = async(req,res)=>{
    
const {username,password} = req.body;

    try {
        if( username =="" || password ==""){
            res.status(400).json({
                success:"false",
                error:"FUll field all user  req"
            });  
        }
        const hashedPass = bcryptjs.hashSync(password,8);

        const user =await User_Model.create({
            username,
            password:hashedPass
        })


    res.status(200).json({
                success:"true",
                message:"Registered Successfully",
                data:user
            });  

    } catch (error) {
        res.status(400).json({
            success:"false",
            error:message.error
        }); 
    }

}


module.exports = {
    loginUser,
registerUser
}