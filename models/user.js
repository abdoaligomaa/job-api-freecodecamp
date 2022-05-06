const mongoose = require('mongoose')

const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')


const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide name'],
    maxlength: 50,
    minlength: 3,
  },
  email: {
    type: String,
    required: [true, 'Please provide email'],
    unique:[true,'email must be unique'],
    
  },
  password: {
    type: String,
    required: [true, 'Please provide password'],
    minlength: 6,
  },
})

UserSchema.pre('save',async function(next){
  this.password=await bcrypt.hash(this.password,10)
  next()
})
UserSchema.methods.generateToken=function(){
  const user=this
  const token=jwt.sign({id:user._id,name:user.name},'jwt secret')
  return token

}
UserSchema.methods.checkPassword=async function(password){
  const user=this
  const ismatch=await bcrypt.compare(password,user.password)
  return ismatch

}




module.exports = mongoose.model('User', UserSchema)