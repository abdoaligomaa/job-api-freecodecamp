const User=require('../models/user')
const jwt=require('jsonwebtoken')
// const { create } = require('../models/user')
require('express-async-errors')
// const {sendEmail}=require('../email/nodemailer')

const signUP=async(req,res,next)=>{
    // validate req.body
    // create new user
    // create Token
    if(req.body.name==" "||req.body.email==" "||req.body.password==" "){
        throw new Error('Please provide all name , email and password')
    }
    try {
        const user = await User.create(req.body)
        
    } catch (error) {
        throw new Error("Error in validation results");
        
    }
        
        // sendEmail()
        const token=user.generateToken()
        res.json({
            user,
            token
        })
}
const logIN=async(req,res,next)=>{

        
        const {email,password}=req.body
        if(!email||!password){
           throw new Error('please provide both email and password')
        }
        const user=await User.findOne({email:email})
        if(!user){
           throw new Error('please enter correct email')
        }
    
        const isPassCorrect=await user.checkPassword(password)
        if(!isPassCorrect){
           throw new Error('please Enter Correct Password')
        }
        const token=user.generateToken()
    
        res.json({
                user:user,
                token
            })

}
module.exports={
    signUP,
    logIN
}