
const bcrypt = require('bcryptjs');
const {User, schema} = require('../../models/user');
const {createError} = require('../../helpers');
const gravatar = require('gravatar');



const register = async(req, res)=>{
    const {error} = schema.register.validate(req.body);
    if(error){
        throw createError(400, error.message);
    }
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(user){
        throw  createError(409, `${email} is already exist `)
    }
const hashPassword = await bcrypt.hash(password, 10);
const avatarURL = gravatar.url(email);
    const result = await User.create({...req.body, password: hashPassword, avatarURL: avatarURL});
    res.status(201).json({
name:result.name,
email:result.email,
    })
}


module.exports = register;