const User=require('../models/user')
const jwt=require('jsonwebtoken')

const signUP=async(req,res,next)=>{
    try{
        const user =await User(req.body)
        const token=user.generateToken()
        await user.save()
        res.json({
            user:user,
            token
        })
    }catch(e){
        next(e)
    }
}
const logIN=async(req,res,next)=>{

        
        const {email,password}=req.body
        if(!email||!password){
           return next('please provide both email and password')
        }
        const user=await User.findOne({email:email})
        if(!user){
           return next('please enter correct email')
        }
    
        const isPassCorrect=await user.checkPassword(password)
        if(!isPassCorrect){
           return next('please Enter Correct Password')
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