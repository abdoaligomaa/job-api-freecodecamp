const mongoose = require('mongoose')


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
    unique:true,
    
  },
  password: {
    type: String,
    required: [true, 'Please provide password'],
    minlength: 6,
  },
})





module.exports = mongoose.model('User', UserSchema)