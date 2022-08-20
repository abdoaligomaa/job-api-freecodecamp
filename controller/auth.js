const User=require('../models/user')
const jwt=require('jsonwebtoken')
// const { create } = require('../models/user')
require('express-async-errors')
// const {sendEmail}=require('../email/nodemailer')
const CustomError=require('../error/customError')

const signUP=async(req,res,next)=>{
    // validate req.body
    // create new user
    // create Token
    const {name,email,password}=req.body
    if(!name||!email||!password){
        throw  new CustomError('Please provide all name , email and password',404)
    }
        const user = await User.create(req.body);

    // try {
    //     const user = await User.create(req.body)
        
    // } catch (error) {
    //     throw new CustomError("Error in validation results",404);
        
    // }
        
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
           throw new CustomError('please provide both email and password',404)
        }
        const user=await User.findOne({email:email})
        if(!user){
           throw new CustomError('please enter correct email',404)
        }
    
        const isPassCorrect=await user.checkPassword(password)
        if(!isPassCorrect){
           throw new CustomError('please Enter Correct Password',404)
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