const {Schema, model} = require('mongoose');
const Joi = require('joi');

const userSchema = new Schema({
name:{
    type: String,
    required:true
},

    password: {
        type: String,
        required: [true, 'Password is required'],
      },
      email: {
        type: String,
        required: [true, 'Email is required'],
     
        unique: true,
      },
      subscription: {
        type: String,
        enum: ["starter", "pro", "business"],
        default: "starter"
      },
      token: {
        type: String,
        default: null,
      },
     
}, {versionKey:false, timestamps:true});

const registerSchema = Joi.object({
    name:Joi.string().required(),
    email:Joi.string().required(),
    password:Joi.string().min(6).required()
});
const loginSchema = Joi.object({
    
    email:Joi.string().required(),
    password:Joi.string().min(6).required()
});
const schema = {
    register: registerSchema,
    login: loginSchema
}

const User = model('user', userSchema);

module.exports ={
    User,
    schema
}