const user = require('../models/user')
const User=require('../models/user')

const signUP=async(req,res,next)=>{
    try{
        const user =await User.create(req.body)
        res.json({
            user:user,
        })
    }catch(e){
        // res.json(e.message)
        next(e)
    }
}
const logIN=(req,res,next)=>{
    res.send('log in')
}
module.exports={
    signUP,
    logIN
}