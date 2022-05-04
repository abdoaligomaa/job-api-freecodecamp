const mongoose=require('mongoose')

const userSchma=mongoose.Schema({
    name:{
        type:String,
        trim:true,
        maxlength: [20, 'name can not be more than 20 characters'],
        
    },
    email:{
        type:String,
        trim:true,
        required:[true,'you should enter the email'],
    },
    password:{
        type:String,
        unique:[true,'you should enter very strong password']

    },
    desc:{
        type:String,
        unique:[true,'you should enter very strong dec']
    }
})
const User=mongoose.model('User',userSchma)

module.exports=User