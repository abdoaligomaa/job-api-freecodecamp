const mongoose = require('mongoose')

const bcrypt=require('bcryptjs')

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





module.exports = mongoose.model('User', UserSchema)